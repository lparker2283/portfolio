export const CENTER = { x: 44, y: 48 };

export interface ProjectColors {
  primary: string;
  secondary: string;
  border: string;
  glow: string;
  panelBg: string;
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
  // ── Independent projects ──────────────────────────────────────────
  {
    id: "corpus",
    label: "Corpus",
    x: 18,
    y: 14,
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
    x: 12,
    y: 73,
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
    x: 78,
    y: 73,
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

  // ── Professional experience ───────────────────────────────────────
  {
    id: "te",
    label: "TE Connectivity",
    x: 73,
    y: 13,
    floatClass: "float-te",
    colors: {
      primary: "#7496b8",
      secondary: "#b8cede",
      border: "rgba(116, 150, 184, 0.4)",
      glow: "rgba(116, 150, 184, 0.18)",
      panelBg: "rgba(116, 150, 184, 0.06)",
    },
    panel: {
      title: "TE Connectivity",
      category: "Experience · Product Management",
      description:
        "Youngest PM managing a $25M aerospace portfolio. Led product strategy for high-reliability connector systems across defense and commercial aviation programs.",
      role: "Product Manager",
      status: "Alumna",
      statusVariant: "ongoing",
      links: [{ label: "teconnectivity.com →", href: "https://www.te.com" }],
    },
  },
  {
    id: "exponent",
    label: "Exponent",
    x: 88,
    y: 43,
    floatClass: "float-exp",
    colors: {
      primary: "#5ea89e",
      secondary: "#a8d4d0",
      border: "rgba(94, 168, 158, 0.4)",
      glow: "rgba(94, 168, 158, 0.18)",
      panelBg: "rgba(94, 168, 158, 0.06)",
    },
    panel: {
      title: "Exponent",
      category: "Experience · Learning Platform",
      description:
        "4th hire. Helped scale the product management learning platform from early-stage to 500K+ learners — shaping curriculum, community, and growth strategy.",
      role: "Early Team",
      status: "Alumna",
      statusVariant: "ongoing",
      links: [{ label: "tryexponent.com →", href: "https://www.tryexponent.com" }],
    },
  },
  {
    id: "shopify",
    label: "Shopify Academy",
    x: 50,
    y: 88,
    floatClass: "float-shopify",
    colors: {
      primary: "#7aaa7a",
      secondary: "#b8d4b8",
      border: "rgba(122, 170, 122, 0.4)",
      glow: "rgba(122, 170, 122, 0.18)",
      panelBg: "rgba(122, 170, 122, 0.06)",
    },
    panel: {
      title: "Shopify Academy",
      category: "Experience · Instructional Design",
      description:
        "Senior Instructional Designer building learning experiences for Shopify merchants and partners. Owned curriculum strategy across merchant and partner enablement programs.",
      role: "Senior Instructional Designer",
      status: "Alumna",
      statusVariant: "ongoing",
      links: [{ label: "shopify.com/learn →", href: "https://www.shopify.com/learn" }],
    },
  },
  {
    id: "coseer",
    label: "Coseer",
    x: 6,
    y: 42,
    floatClass: "float-coseer",
    colors: {
      primary: "#b0789a",
      secondary: "#d4b0c8",
      border: "rgba(176, 120, 154, 0.4)",
      glow: "rgba(176, 120, 154, 0.18)",
      panelBg: "rgba(176, 120, 154, 0.06)",
    },
    panel: {
      title: "Coseer",
      category: "Published Writing · AI & Knowledge Systems",
      description:
        "Published writing on AI, language, and enterprise knowledge systems. Contributed to thought leadership on how organizations make meaning at scale.",
      role: "Contributing Writer",
      status: "Published",
      statusVariant: "ongoing",
      links: [{ label: "Read Articles →", href: "#" }],
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
