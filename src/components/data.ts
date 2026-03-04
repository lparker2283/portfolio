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
  date?: string;
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
      category: "Personal Project · Discovery Artifacts",
      date: "2025 – Present",
      description:
        "An intellectual commons for the raw material of thinking. Voice memos, screenshots, half-formed sketches; the stuff that disappears before it becomes anything. An ongoing exploration of whether wild, unstructured discovery makes interesting shapes before the presentation layer comes in and cleans everything up.",
      role: "Creator / Contributor",
      status: "In process",
      statusVariant: "dev",
      links: [{ label: "Give Corpus a try →", href: "#" }],
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
      category: "Personal Project · AI Shadow Work Tool",
      date: "2025 – Present",
      description:
        "A shadow work platform built at the intersection of Jungian psychology and AI. Designed for people ready to stop managing their inner life and start working it. Born out of a season of real disruption (becoming a mother, moving across the country, needing something more rigorous than a meditation app, etc). Built it because I couldn't find it.",
      role: "Creator",
      status: "In process",
      statusVariant: "dev",
      links: [{ label: "Descend →", href: "#" }],
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
      category: "Product Management · Enterprise Complexity",
      date: "2013 – 2017",
      description:
        "Youngest PM in division history with a $25M aerospace portfolio at a Fortune 500. Managed product strategy across global supply chains in highly regulated industries. Built products for Tesla, Rolls Royce, GE, and others, and drove a materials reduction program leading to 15% cost reduction on a 50-year old product line.",
      role: "Global Product Manager",
      status: "Alumni",
      statusVariant: "ongoing",
      links: [],
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
      category: "Startup · Learning Platform",
      date: "2021 – 2023",
      description:
        "Joined as the 4th hire when Exponent was purely for aspiring product managers. Left when it had 500K+ learners and a curriculum infrastructure built to scale.",
      role: "Curriculum Lead",
      status: "Alumni",
      statusVariant: "ongoing",
      links: [{ label: "Try Exponent →", href: "https://www.tryexponent.com" }],
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
      category: "Learning Platform · Instructional Design",
      date: "2024 – 2026",
      description:
        "Led developer education for Shopify's partner ecosystem including designing curriculum, building the analytics infrastructure to understand how learning actually landed, and closing the loop with learner voice to keep improving. First course drove $4M in B2B merchant revenue for 3 brands without any formal course GTM.",
      role: "Sr. Instructional Designer",
      status: "Alumni",
      statusVariant: "ongoing",
      links: [{ label: "Visit Shopify Academy →", href: "https://www.shopify.com/learn" }],
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
      category: "Pre-ChatGPT AI · Thought Leadership",
      date: "2017 – 2019",
      description:
        "Head of Thought Leadership at an enterprise AI company in 2018, when \"AI\" still made executives nervous. Helped position a cognitive computing platform before the category had a name. Got a feature in Thrive Global and Authority Magazine as a result.",
      role: "Head of Thought Leadership",
      status: "Alumni",
      statusVariant: "ongoing",
      links: [
        { label: "Read my Authority Magazine feature →", href: "https://medium.com/authority-magazine/women-leading-the-ai-industry-the-conversation-is-so-narrowly-focused-on-the-technology-the-b08e9dbb1b83" },
      ],
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
