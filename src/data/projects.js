// src/data/projects.js
// ──────────────────────────────────────────────
// HOW TO ADD NEW PROJECTS:
// 1. Copy one of the objects below and add it to the array
// 2. Set a unique id (increment from last)
// 3. Place thumbnail in public/images/projects/
// 4. Fill in title, category, description, tools, year, url
// 5. url is optional - if not provided, button won't show
// ──────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Brand Identity Kit",
    category: "Personal Branding",
    description: "Complete personal brand identity including logo, color palette, typography system, and social media templates for a fitness influencer.",
    thumbnail: "/images/projects/project-1.jpg",
    tools: ["Canva", "PicsArt"],
    year: "2024",
    url: "https://your-project-link-1.com",
  },
  {
    id: 2,
    title: "Cinematic Fitness Reel",
    category: "Video Editing",
    description: "High-energy workout reel with dynamic cuts, color grading, and motivational overlays designed for Instagram and TikTok.",
    thumbnail: "/images/projects/project-2.jpg",
    tools: ["CapCut", "InShot"],
    year: "2024",
    url: "https://your-project-link-2.com",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Design",
    description: "Complete social media visual campaign for a lifestyle brand — carousel posts, stories, highlights covers, and reels thumbnails.",
    thumbnail: "/images/projects/project-3.jpg",
    tools: ["Canva", "Meitu"],
    year: "2024",
    url: "https://your-project-link-3.com",
  },
  {
    id: 4,
    title: "Pitch Deck Design",
    category: "Presentations",
    description: "Modern, minimalist investor pitch deck with animated transitions, data visualization, and luxury visual identity.",
    thumbnail: "/images/projects/project-4.jpg",
    tools: ["Canva"],
    year: "2023",
    url: "https://your-project-link-4.com",
  },
  {
    id: 5,
    title: "Photography Portfolio",
    category: "Design",
    description: "Curated photography portfolio layout with clean grid design, dramatic typography, and cohesive dark aesthetic.",
    thumbnail: "/images/projects/project-5.jpg",
    tools: ["PicsArt", "Meitu"],
    year: "2023",
    url: "https://your-project-link-5.com",
  },
  {
    id: 6,
    title: "Lifestyle Content Series",
    category: "Video Editing",
    description: "Week-long lifestyle content series across platforms including reels, short-form YouTube clips, and TikTok edits.",
    thumbnail: "/images/projects/project-6.jpg",
    tools: ["CapCut", "InShot"],
    year: "2024",
    url: "https://your-project-link-6.com",
  },
];

export default projects;
