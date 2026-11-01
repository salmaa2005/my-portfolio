export interface NavItem {
  label: string;
  to: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Explore", to: "/explore" },
  { label: "Projects", to: "/projects" },
  { label: "Articles", to: "/articles" },
];