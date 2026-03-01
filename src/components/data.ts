export const CENTER = { x: 44, y: 48 };

export interface ProjectColors {
  primary: string;
  secondary: string;
  border: string;
  glow: string;
  panelBg: string;
  badge?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectPanel {
  title: string;
  category: string;
  description: string;
  role: string;
  status: string;
  statusVariant: "active" | "dev" | "ongoing";
  links: ProjectLink[];
}

export interface Project {
  id: string;
  label: string;
  x: number;
  y: number;
  floatClass: string;
  colors: ProjectColors;
  panel: ProjectPanel;
}

export const PROJECTS: Project[] = [
  {
    id: "corpus",
    label: "Corpus",
    x: 19,
    y: 18,
    floatClass: "float-corpus",
    colors: {
      primary: "#c9a96e",
      secondary: "#e8dcc8",
      border: "rgba(201, 169, 110, 0.4)",
      glow: "rgba(201, 169, 110, 0.18)",
      panelBg: "rgba(201, 169, 110, 0.06)",
    },
    panel: {
      title: "Corpus",
      category: "Writing Practice",
      description:
        "A longform writing and thinking practice — essays on transformation, alchemy, and the structures underneath experience. A space for ideas that resist easy categorization.",
      role: "Author",
      status: "Ongoing",
      statusVariant: "ongoing",
      links: [{ label: "Read →", href: "#" }],
    },
  },
  {
    id: "hod",
    label: "House of Descent",
    x: 16,
    y: 74,
    floatClass: "float-hod",
    colors: {
      primary: "#9b8ec4",
      secondary: "#c5bce0",
      border: "rgba(155, 142, 196, 0.4)",
      glow: "rgba(155, 142, 196, 0.18)",
      panelBg: "rgba(155, 142, 196, 0.06)",
    },
    panel: {
      title: "House of Descent",
      category: "AI Platform · Switchyard LLC",
      description:
        "An AI-powered shadow work platform combining Jungian psychology with tactical decision-making frameworks. Built to surface what's actually in the way.",
      role: "Founder & Builder",
      status: "In Development",
      statusVariant: "dev",
      links: [{ label: "Join Waitlist →", href: "#" }],
    },
  },
  {
    id: "stone",
    label: "Soil & Stone",
    x: 74,
    y: 71,
    floatClass: "float-stone",
    colors: {
      primary: "#c4a05a",
      secondary: "#c4b5a0",
      border: "rgba(196, 160, 90, 0.4)",
      glow: "rgba(196, 160, 90, 0.18)",
      panelBg: "rgba(196, 160, 90, 0.06)",
    },
    panel: {
      title: "Genesee Valley Stone Works",
      category: "Business · Masonry & Construction",
      description:
        "Co-owner of a masonry and construction business rooted in the Genesee Valley. Handles strategy, operations, and brand for a craft-first company.",
      role: "Co-Owner / Strategy & Operations",
      status: "Active",
      statusVariant: "active",
      links: [{ label: "View Work →", href: "#" }],
    },
  },
];

export const STARS = [
  { x: 5, y: 9 },
  { x: 92, y: 7 },
  { x: 87, y: 33 },
  { x: 3, y: 54 },
  { x: 96, y: 61 },
  { x: 51, y: 4 },
  { x: 77, y: 14 },
  { x: 11, y: 84 },
  { x: 64, y: 91 },
  { x: 34, y: 93 },
  { x: 82, y: 87 },
  { x: 7, y: 37 },
  { x: 56, y: 96 },
  { x: 94, y: 44 },
  { x: 27, y: 6 },
  { x: 44, y: 88 },
  { x: 70, y: 4 },
  { x: 18, y: 52 },
  { x: 88, y: 78 },
  { x: 40, y: 2 },
];
