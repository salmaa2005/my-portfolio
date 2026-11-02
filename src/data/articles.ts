import type { Article } from "../types/content";

export const articles: Article[] = [
  {
    type: "article",
    slug: "understanding-lvm",
    title: "Understanding Physical Volumes, Volume Groups, and Logical Volumes",
    summary:
      "A mental model for LVM — where the abstraction lives, why it exists, and what commands you actually run.",
    body: `
When you first encounter LVM (Logical Volume Manager) on Linux, the terminology can feel like an alphabet soup: PV, VG, LV, PE. But LVM is just a way to insert a flexible abstraction layer between your physical disks and your filesystems.

## The Problem LVM Solves
With traditional partitioning, if you create a 50GB partition and later need 100GB, you are stuck. You either have to unmount, delete, and recreate the partition (risking data loss), or use a tool like \`gparted\` to resize partitions, which is often slow and error-prone.

LVM solves this by decoupling the physical storage from the logical storage.

## The Three Primitives

1. **Physical Volumes (PVs)**: These are your raw disks or standard partitions (e.g., \`/dev/sdb1\`). You initialize them with \`pvcreate\`.
2. **Volume Groups (VGs)**: Think of a VG as a pool of storage. It takes one or more PVs and combines them into a single, unified pool. You create a VG with \`vgcreate\`.
3. **Logical Volumes (LVs)**: These are the flexible "virtual partitions" you carve out of a VG. You format them with a filesystem (like XFS or ext4) and mount them. You create an LV with \`lvcreate\`.

## A Practical Example

Let's say you have a new 100GB disk at \`/dev/sdb\`. 

First, initialize it as a physical volume:
\`\`\`bash
pvcreate /dev/sdb
\`\`\`

Next, create a volume group called \`vg_data\` and add the PV to it:
\`\`\`bash
vgcreate vg_data /dev/sdb
\`\`\`

Now, carve out a 50GB logical volume called \`lv_logs\`:
\`\`\`bash
lvcreate -L 50G -n lv_logs vg_data
\`\`\`

Format it with XFS and mount it:
\`\`\`bash
mkfs.xfs /dev/vg_data/lv_logs
mkdir -p /var/logs
mount /dev/vg_data/lv_logs /var/logs
\`\`\`

## The Magic: Extending Online
Six months later, \`/var/logs\` is full. With LVM, you can extend it while it's mounted and actively being written to.

Extend the logical volume by 20GB:
\`\`\`bash
lvextend -L +20G /dev/vg_data/lv_logs
\`\`\`

Grow the XFS filesystem to use the new space:
\`\`\`bash
xfs_growfs /var/logs
\`\`\`

And just like that, you have 20GB more space with zero downtime.
    `,
    category: "linux",
    tags: ["LVM", "Storage", "RHEL"],
    publishedAt: "2025-09-20",
    readingTimeMinutes: 8,
    isSample: true,
    featured: true,
  },
  {
    type: "article",
    slug: "docker-networking-basics",
    title: "Docker Networking: A Grounded Walkthrough",
    summary:
      "Bridge, host, overlay — what each mode really does, and when to reach for one over the other.",
    body: `
Docker networking can be confusing because it changes the way you think about \`localhost\` and IP addresses. Let's break down the most common network drivers and when to use them.

## The Default: Bridge Network
When you install Docker, it creates a virtual switch on your host called \`docker0\`. When you run a container without specifying a network, it attaches to this default bridge network.

Containers on this bridge get an IP address (usually in the \`172.17.0.0/16\` range) and can talk to the outside world via NAT (Network Address Translation).

**The Catch:** On the *default* bridge network, containers can only communicate with each other via IP address. There is no automatic DNS resolution by container name.

## The Better Way: User-Defined Bridges
If you create your own bridge network, Docker enables an embedded DNS server. 

\`\`\`bash
docker network create my_app_net
docker run -d --name web --network my_app_net nginx
docker run -it --rm --network my_app_net alpine ping web
\`\`\`

In this example, the \`alpine\` container can successfully ping \`web\` because Docker's DNS resolves the container name to its IP address automatically. This is why user-defined networks are almost always preferred over the default bridge.

## The Escape Hatch: Host Network
Sometimes, you don't want the Docker network to touch the traffic at all. The \`host\` network mode removes network isolation entirely — the container shares the host's networking namespace.

\`\`\`bash
docker run -d --network host nginx
\`\`\`

If Nginx listens on port 80 inside the container, it will immediately take over port 80 on the host. This is fast and useful for performance-critical applications, but you lose the ability to map different container ports to the same host port.
    `,
    category: "devops",
    tags: ["Docker", "Networking", "Containers"],
    publishedAt: "2025-09-05",
    readingTimeMinutes: 11,
    isSample: true,
  },
  {
    type: "article",
    slug: "aws-iam-in-practice",
    title: "AWS IAM in Practice: Users, Groups, Roles, and Policies",
    summary:
      "The vocabulary of IAM, mapped to a realistic least-privilege example with MFA enforcement.",
    body: `
Identity and Access Management (IAM) is the backbone of AWS security. If you misconfigure it, you either lock yourself out or leave the door wide open for attackers.

## The Vocabulary
- **User**: A person or service that needs long-term credentials (password or access key).
- **Group**: A collection of users. Policies applied to a group apply to all users inside it.
- **Role**: An identity that can be assumed temporarily. It doesn't have long-term credentials.
- **Policy**: A JSON document that defines *who* can do *what* to *which resource*.

## The Golden Rule
**Never use the root account.** Instead, create an IAM user for yourself, attach it to an Admin group, and enable MFA (Multi-Factor Authentication) on both accounts.

## A Least-Privilege Example
Imagine you have an EC2 instance that needs to read files from an S3 bucket. 
Don't create an IAM user and hardcode the access keys into the EC2 instance. Instead, create an **IAM Role**.

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-app-bucket",
        "arn:aws:s3:::my-app-bucket/*"
      ]
    }
  ]
}
\`\`\`

Attach this policy to a Role, and then attach that Role to the EC2 instance. The EC2 instance will now have temporary, rotating credentials to access *only* that specific bucket. No hardcoded passwords, no risk of leaked keys.
    `,
    category: "cloud",
    tags: ["AWS", "IAM", "Security"],
    publishedAt: "2025-08-22",
    readingTimeMinutes: 13,
    isSample: true,
  },
];
