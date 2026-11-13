import type { NoteCourse } from "../types/notes";

export const noteCourses: NoteCourse[] = [
  {
    slug: "linux-fundamentals",
    title: "Linux Fundamentals",
    category: "linux",
    summary:
      "A structured introduction to the Linux operating system — from the filesystem and permissions to processes and services.",
    description:
      "Foundational Linux concepts, organized as a walkthrough from the filesystem down to services and storage.",
    chapters: [
      {
        slug: "filesystem-basics",
        title: "The Linux Filesystem",
        summary:
          "The single tree, the FHS layout, and where things actually live on a modern Linux system.",
        order: 1,
        readingTime: 6,
        body: `Linux exposes a single filesystem tree starting at \`/\`. Unlike Windows, there are no drive letters — every disk, partition, and network share is mounted somewhere under this tree.

The Filesystem Hierarchy Standard (FHS) defines what each top-level directory is for, so tools and users can rely on a consistent layout across distributions.

## The Top-Level Layout

Here is what the standard top-level directories actually mean:

- **/etc:** System-wide configuration files.
- **/var:** Variable data (logs, spools, website content).
- **/usr:** Read-only user data (binaries, libraries, documentation).
- **/home:** User home directories.

## Checking your system

You can list the top-level directories to see them on your own machine:

\`\`\`bash
ls -1 /
# bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
# boot  etc  lib   media  opt  root  sbin  sys  usr
\`\`\`

Take a moment to explore \`/etc\` and \`/var\` — they are the two directories you will touch most as an administrator.`,
      },
      {
        slug: "permissions-and-ownership",
        title: "Permissions and Ownership",
        summary:
          "Read, write, execute — the three-bit model — and how octal notation packs it into a single number.",
        order: 2,
        readingTime: 10,
        body: `Every file carries an owner and a group, and three permission triples: what the owner can do, what the group can do, and what everyone else can do.

The system also supports advanced permission bits outside the standard read/write/execute model. Two of the most important are [setuid] and the [sticky bit].

## Octal notation

Three digits, each 0-7, encoding one triple. 4 = read, 2 = write, 1 = execute. Add them for combinations: 7 = rwx, 5 = r-x, 4 = r--.

\`\`\`bash
chmod 755 script.sh    # rwxr-xr-x
chmod 644 notes.txt    # rw-r--r--
chown alice:devs file  # owner=alice, group=devs
\`\`\``,
        highlights: [
          {
            term: "setuid",
            explanation:
              "setuid is a special permission bit that makes a program run with the *owner's* privileges, not the invoker's. The classic example is /usr/bin/passwd — it needs to write to /etc/shadow (owned by root) even when a normal user runs it.",
          },
          {
            term: "sticky bit",
            explanation:
              "The sticky bit on a directory means users can only delete or rename their own files inside it — even if they have write permission on the directory itself. /tmp has it set by default, which is why random users can't delete each other's temp files.",
          },
        ],
        quiz: [
          {
            question: "What permissions does \`chmod 640 report.pdf\` produce?",
            choices: [
              "rw-r-----",
              "rw-r--r--",
              "rwxr-----",
              "r--r-----",
            ],
            correctIndex: 0,
            explanation:
              "6 = rw- (owner), 4 = r-- (group), 0 = --- (other). So the result is rw-r-----.",
          },
          {
            question:
              "Which command gives the owner full access, and everyone else read + execute?",
            choices: [
              "chmod 755 file",
              "chmod 744 file",
              "chmod 700 file",
              "chmod 644 file",
            ],
            correctIndex: 0,
            explanation:
              "755 = 7 (rwx) for owner, 5 (r-x) for group, 5 (r-x) for other.",
          },
        ],
        labs: [
          {
            title: "Set up a shared project directory",
            objective:
              "Create a directory /srv/project where a group of developers can read, write, and execute files, but other users can only read.",
            steps: [
              {
                instruction: "Create a group called devs.",
                solution: "groupadd devs",
                language: "bash",
              },
              {
                instruction: "Create the directory /srv/project.",
                solution: "mkdir /srv/project",
                language: "bash",
              },
              {
                instruction:
                  "Change the owner to root and the group to devs.",
                solution: "chown root:devs /srv/project",
                language: "bash",
              },
              {
                instruction:
                  "Set permissions so owner and group can read/write/execute, and others can only read.",
                solution: "chmod 775 /srv/project",
                language: "bash",
              },
              {
                instruction:
                  "Add the sticky bit so only file owners can delete their own files inside.",
                solution: "chmod +t /srv/project",
                language: "bash",
              },
              {
                instruction: "Verify the resulting permissions.",
                solution: "ls -ld /srv/project\n# drwxrwxr-t. 2 root devs … /srv/project",
                language: "bash",
              },
            ],
            finalNote:
              "The trailing `t` in the permission string is the sticky bit — members of the group can create and edit files, but only the owner of each file can delete it.",
          },
        ],
      },
      {
        slug: "processes-and-services",
        title: "Processes and Services",
        summary:
          "How the kernel schedules work, what a PID is, and how systemd manages long-running services.",
        order: 3,
        readingTime: 8,
        body: `A process is a running instance of a program, identified by a PID and owned by a user. Processes form a tree — every process has a parent, all the way up to PID 1 (init / systemd).

On modern Linux, long-running background services are managed by **systemd**, which tracks their lifecycle, restarts them on failure, and captures their logs in the journal.`,
        highlights: [
          {
            term: "PID 1",
            explanation:
              "PID 1 is the first process the kernel starts. Everything else is a descendant. On legacy systems it was /sbin/init (SysVinit). On modern systems it's systemd (or OpenRC on Alpine, runit on Void, etc.). If PID 1 crashes, the kernel panics.",
          },
        ],
        code: [
          {
            language: "bash",
            code: `ps aux              # snapshot of all processes
top                 # live view, sortable
systemctl status sshd
journalctl -u sshd  # logs for the sshd unit`,
            caption: "The five commands you'll type daily.",
          },
        ],
      },
    ],
  },
];