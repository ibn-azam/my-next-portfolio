const screenshot = (url) =>
  `https://api.screenshotone.com/take?url=${url}&access_key=YOUR_KEY`;
export const projects = [
  {
    slug: "digitools-platform-react",
    name: "DigiTools Platform",
    tagline: "Supercharge Your Digital Workflow",
    description:
      "A modern digital marketplace platform where users can discover, explore, and purchase premium digital products — including AI-powered tools, design assets, and productivity software. Built with a clean, responsive UI and a seamless cart experience.",
    image:  "https://api.microlink.io/?url=https://digitools-platform-products.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    tech: ["React 18", "Vite", "Tailwind CSS", "DaisyUI", "Lucide React"],
    techIcons: ["⚛️", "⚡", "🎨", "🌼", "🧩"],
    github: "https://github.com/ibn-azam/digitools-platform-react",
    live: "https://digitools-platform-products.netlify.app/",
    category: "Frontend",
    challenges: [
      "Implementing a real-time cart system that updates totals dynamically without page reloads.",
      "Designing a responsive layout that looks polished across all screen sizes using Tailwind utilities.",
      "Structuring reusable components cleanly to avoid prop-drilling across deeply nested UI.",
    ],
    improvements: [
      "Add user authentication so cart data persists across sessions.",
      "Integrate a real payment gateway (Stripe) for actual purchases.",
      "Add a search and filter system for browsing products by category or price range.",
      "Build an admin dashboard for managing product listings dynamically.",
    ],
  },
  {
    slug: "github-issue-tracker",
    name: "GitHub Issue Tracker",
    tagline: "Track GitHub issues in real time",
    description:
      "A GitHub Issue Tracker app that fetches and displays issues from any public GitHub repository using the GitHub REST API. Users can filter by state, browse issue details, and navigate between pages of results.",
    image: "https://opengraph.githubassets.com/1/ibn-azam/Github-Issue-Tracker",
    tech: ["React", "GitHub REST API", "Tailwind CSS", "React Router"],
    techIcons: ["⚛️", "🐙", "🎨", "🔗"],
    github: "https://github.com/ibn-azam/Github-Issue-Tracker",
    live: null,
    category: "Frontend",
    challenges: [
      "Handling GitHub API rate limiting — needed to implement caching strategies to avoid hitting the limit.",
      "Building pagination that works correctly when switching between open and closed issue filters.",
      "Managing async state cleanly while keeping the UI responsive during data fetches.",
    ],
    improvements: [
      "Add OAuth authentication to raise the API rate limit from 60 to 5000 requests/hour.",
      "Allow users to search any GitHub repo by entering username and repo name dynamically.",
      "Add label and assignee filtering for more granular issue browsing.",
    ],
  },
  {
    slug: "my-next-portfolio",
    name: "My Next Portfolio",
    tagline: "Personal portfolio built with Next.js",
    description:
      "A fully responsive, modern personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features animated hero section, project showcase pulled live from GitHub API, skills section, and contact form.",
    image: "https://api.microlink.io/?url=https://my-next-portfolio-eight-nu.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "GitHub API"],
    techIcons: ["▲", "🎨", "🎬", "🐙"],
    github: "https://github.com/ibn-azam/my-next-portfolio",
    live: "https://my-next-portfolio-eight-nu.vercel.app/",
    category: "Frontend",
    challenges: [
      "Integrating Google Fonts via next/font without layout shift on initial load.",
      "Making the navbar sticky while keeping it visually seamless with the hero section gradient.",
      "Handling 'use client' vs server component boundaries properly with metadata and animations.",
    ],
    improvements: [
      "Add a blog section powered by MDX for writing technical articles.",
      "Implement dark/light mode toggle with smooth CSS transitions.",
      "Add a CMS so projects can be updated without code changes.",
    ],
  },
  {
    slug: "payoo",
    name: "Payoo",
    tagline: "A clean fintech landing page UI",
    description:
      "Payoo is a sleek, responsive payment and fintech landing page UI built purely with HTML and CSS. It showcases modern layout techniques, clean card-based design, and a professional payment flow interface.",
    image: "https://opengraph.githubassets.com/1/ibn-azam/payoo",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    techIcons: ["🌐", "🎨", "📱"],
    github: "https://github.com/ibn-azam/payoo",
    live: null,
    category: "Frontend",
    challenges: [
      "Achieving pixel-perfect layout without a CSS framework — all done with pure CSS Grid and Flexbox.",
      "Making the design fully responsive from 320px mobile to 1440px desktop without breakpoint hacks.",
    ],
    improvements: [
      "Rebuild with React and Tailwind CSS for a more scalable component structure.",
      "Add animations and micro-interactions using CSS keyframes or Framer Motion.",
      "Connect to a backend for actual payment processing simulation.",
    ],
  },
  {
    slug: "ideavault",
    name: "IdeaVault",
    tagline: "Store and organize your ideas",
    description:
      "IdeaVault is a note-taking and idea management web app built with JavaScript. Users can create, edit, and delete ideas with a clean card-based UI. Data persists in localStorage so ideas are saved between sessions.",
    image: "https://api.microlink.io/?url=https://ideavault-theta.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    techIcons: ["⚡", "🌐", "🎨", "💾"],
    github: "https://github.com/ibn-azam/ideavault",
    live: "https://ideavault-theta.vercel.app/",
    category: "Frontend",
    challenges: [
      "Implementing CRUD operations cleanly with vanilla JavaScript and no framework.",
      "Managing localStorage sync while keeping the UI reactive to data changes.",
    ],
    improvements: [
      "Rebuild with React and add cloud sync via Firebase or Supabase.",
      "Add tags, categories, and search/filter functionality.",
      "Add markdown support for richer idea formatting.",
    ],
  },
  {
    slug: "keen-keeper",
    name: "Keen Keeper",
    tagline: "A smart task management app",
    description:
      "Keen Keeper is a task management web app built with JavaScript. It allows users to add, complete, and delete tasks with a minimalist, distraction-free interface. Designed for productivity with a clean card-based layout.",
    image: "https://opengraph.githubassets.com/1/ibn-azam/keen-keeper",
    tech: ["JavaScript", "HTML5", "CSS3"],
    techIcons: ["⚡", "🌐", "🎨"],
    github: "https://github.com/ibn-azam/keen-keeper",
    live: null,
    category: "Frontend",
    challenges: [
      "Building a clean task state system with pure JavaScript without any state management library.",
      "Handling edge cases like empty input, duplicate tasks, and bulk-delete actions.",
    ],
    improvements: [
      "Add due dates, priority levels, and categories for tasks.",
      "Rebuild with React and add drag-and-drop reordering using dnd-kit.",
      "Sync tasks to a backend so they persist across devices.",
    ],
  },
];