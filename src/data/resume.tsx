import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// to run, enter "pnpm dev"

export const DATA = {
  name: "Kevin Valencia",
  initials: "KV",
  url: "https://kevinvalencia.com",
  location: "Toronto, Canada",
  locationLink: "",
  description:
    "Software Engineer | Student | F1 Enthusiast",
  summary:
    "",
    
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "Next.js",
    "SQL",
    "Typescript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Flask",
    "Pandas",
    "Tailwind",
    "Git",
    "CloudFlare",
    "Vercel",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    /*{ href: "/blog", icon: NotebookIcon, label: "Blog" },*/
  ],
  contact: {
    email: "krvalencia06@gmail.com",
    tel: "6479167367",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kevinvalenciaa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevinangelo-valencia/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:krvalencia06@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1973LT0pUuVuH050iZLefJ2WpYQTDNlBH/view?usp=drive_link",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "QMIND",
      badges: [],
      href: "https://qmind.ca/",
      location: "Kingston, Ontario",
      title: "AI/ML Designer",
      logoUrl: "/qmind.png",
      start: "September 2024",
      end: "Present",
      description:
        "Reducing high operational costs in hospitals through predictive energy management, by developing a reinforcement learning model that uses Proximal Policy Optimization (PPO) to analyze energy data across variables like time, temperature, and occupancy levels.",
    },
    {
      company: "QWeb",
      href: "https://qweb.dev/",
      badges: [],
      location: "Kingston, Ontario",
      title: "Lead Full Stack Developer",
      logoUrl: "/qweb.logo.jpeg",
      start: "January 2025",
      end: "April 2025",
      description:
        "Lead Web Developer @ Bader Lane Productions.",
    },
    {
      company: "COMPSA",
      href: "https://compsa.ca/",
      badges: [],
      location: "Kingston, Ontario",
      title: "DevOps Intern",
      logoUrl: "/compsa.png",
      start: "September 2024",
      end: "December 2024",
      description:
        "Enhanced website reliability by migrating 5+ web services to DigitalOcean using Git for manual repository deployment, reducing downtime by 20% and improving user experience for Queen's students. Streamlined DNS management processes to support migration by leveraging Cloudflare for traffic redirection and DNS record updates, ensuring integration with DigitalOcean infrastructure.",
    },
    
    {
      company: "Royal LePage",
      href: "https://www.royallepage.ca/en/",
      badges: [],
      location: "Oakville, Ontario",
      title: "UI/UX Designer",
      logoUrl: "/royallepage.png",
      start: "June 2022",
      end: "August 2022",
      description:
        "Facilitated several projects to help new hires and existing agents promote social media growth and build a network (Inhouse training solutions, social media marketing brochures). Directly worked with 10+ Real Estate agents and developed marketing materials to promote social media growth using graphic designing tools (Adobe, Canva, VistaCreate). Implemented targeted digital marketing strategies that contributed to increased engagement and follower growth across various social media platforms (Facebook, Instagram, Twitter).",
    },
  ],

  education: [
    {
      school: "Queen's University",
      href: "https://www.queensu.ca/",
      degree: "Bachelor's Degree of Computing, Computer Science Specialization",
      logoUrl: "/queens.png",
      start: "",
      end: "Expected 2028",
      description: "Relevant Courses: Computer Science I and Computer Science II, Discrete Structures, Introduction to Statistics, Linear Algebra, Differential and Integral Calculus",
    },
    {
      school: "St. Ignatius of Loyola",
      href: "https://secondary.hcdsb.org/loyola/",
      degree: "Final Average: 91%",
      logoUrl: "/loyola.png",
      start: "2020",
      end: "- 2024",
      description: "Relevant Courses: Grade 12 Computer Science, Grade 12 Computer Engineering"
    },
  ],
  projects: [
    
    {
      title: "QCorner",
      href: "",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Coming soon..",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Auth0",
        "PostgreSQL",
        "Vercel",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          /*type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,*/
          type: "Source",
          href: "https://github.com/kevinvalenciaa/QCorner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/qcorner.png",
    },
    {
      title: "NumNum",
      href: "",
      dates: "January 2025 - Present",
      active: true,
      description:
       "A tinder-style dining app designed to simplify the decision-making process for choosing where to eat. NumNum personalizes restaurant recommendations based on user preferences, location, and dietary needs, alongside an AI-powered assistant that analyzes menus, suggests tailored dishes, plans routes, and even assists with reservations.",
      technologies: [
        "React.js",
        "Next.js",
        "Typescript",
        "Python",
        "Google Cloud Platform",
        "Gemini API",
        "Flask"
      ],
      links: [
        /*{
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/NumNum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/numnum.jpeg",
    },
    {
      title: "Budgetify",
      href: "",
      dates: "December 2024 - Present",
      active: true,
      description:
       "a full-stack expense tracker application allowing users to track, categorize, and graphically visualize their finances.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        /*{
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/expense-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/budgetify.png",
    },
    {
      title: "Magic Ring Quest",
      href: "",
      dates: "June 2024 - October 2024",
      active: true,
      description:
        "A Zelda-style RPG game in Python that includes elements using Pygame library to incorporate graphics, animations, collisions, fake depth, upgrade mechanics, and a level map.",
      technologies: [
        "Python",
        "PyGame",
      ],
      links: [
        /*{
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/Magic-Ring-Quest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/game.png",
    },
    
  ],
  hackathons: [
    {
      title: "QHacks",
      dates: "January 2025",
      location: "Kingston, Ontario",
      description:
        "Built NumNum, a tinder-style dining app designed to simplify the decision-making process for choosing where to eat. ",
      image:
        "qhacks.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
