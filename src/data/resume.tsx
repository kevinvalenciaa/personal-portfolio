import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// to run, enter "pnpm dev"

export const DATA = {
  name: "kevin valencia",
  initials: "KV",
  url: "https://kevinvalencia.com",
  location: "toronto, canada",
  locationLink: "",
  description:
    "a digital repository.",
  summary:
    "",
    
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "C",
    "React.js",
    "SQL",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Pandas",
    "Git",
    "Kubernetes",
    "Docker",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    /*{ href: "/blog", icon: NotebookIcon, label: "Blog" },*/
  ],
  contact: {
    email: "kevin.valencia@queensu.ca",
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
        url: "mailto:kevin.valencia@queensu.ca",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/17bmiY2XZf5YNEPr-tfcf0wTKEibYSyz9/view?usp=sharing",
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
      title: "AI/ML Engineer",
      logoUrl: "/qmind.png",
      start: "September 2024",
      end: "Present",
      description:
        "Conducted exploratory data analysis (EDA) on a 40,320-point dataset over two months, engineering features such as time-based, environmental, and building conditions using pandas and NumPy to predict optimal air handling unit start times. Utilized PyTorch and TensorFlow for deep neural network training, optimizing thermal prediction models that reduced calibration time by 40%. Architected a reinforcement learning framework for HVAC optimization using Stable Baselines 3, resulting in 15% energy savings while maintaining occupant comfort. Engineered comprehensive testing and validation framework with cross-validation methodology for a thermal prediction model, ensuring model robustness by maintaining 91% accuracy across diverse operational conditions.",
    },
    {
      company: "QWeb",
      href: "https://qweb.dev/",
      badges: [],
      location: "Kingston, Ontario",
      title: "Software Engineer",
      logoUrl: "/qweb.logo.jpeg",
      start: "January 2025",
      end: "April 2025",
      description:
        "Led the end-to-end development of a responsive, public-facing website for a Queen’s-affiliated theatre company, enhancing its online presence and event accessibility. Oversaw a team of 5+ software developers, managing timelines, design decisions, and scope using agile practices. Built and deployed the site using React, TypeScript, and Next.js with version control via Git and GitHub.",
    },
    {
      company: "COMPSA",
      href: "https://compsa.ca/",
      badges: [],
      location: "Kingston, Ontario",
      title: "DevOps Engineer Intern",
      logoUrl: "/compsa.png",
      start: "September 2024",
      end: "December 2024",
      description:
        "Spearheaded the migration of 5+ web services from internal university infrastructure to DigitalOcean, implementing Git-based deployment workflows and achieving a 12% reduction in downtime and improved user experience. Streamlined DNS management processes to support migration by leveraging Cloudflare for traffic redirection and DNS record updates, ensuring integration with DigitalOcean infrastructure.",
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
        "Facilitated projects to help agents promote social media growth and build networks. Developed in-house training solutions and social media marketing brochures. Directly worked with 10+ Real Estate agents to create marketing materials, using graphic design tools including Adobe, Canva, and VistaCreate. Implemented targeted digital marketing strategies that increased engagement across Facebook, Instagram, and Twitter.",
    },
  ],

  education: [
    {
      school: "Queen's University",
      href: "https://www.queensu.ca/",
      degree: "Computer Science (AI Specialization), Minor in Statistics",
      logoUrl: "/queens.png",
      start: "",
      end: "Expected 2028",
      description: "Relevant Courses: Computer Science I and Computer Science II, Discrete Structures, Introduction to Statistics",
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
      title: "Quillio",
      href: "",
      dates: "September 2024 - Present",
      active: true,
      description:
        "An AI journal that remembers everything you capture each day and uses it to help you make big decisions. Connects daily context (Stream) to strategic planning (Canvas) with pattern detection and insights, turning reflection and strategy into one continuous loop for founders and product builders.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Supabase",
        "OpenAI",
        "Python",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.usequillio.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/quillio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SCR-20251128-brtx.jpeg",
    },
    {
      title: "Optimum Start",
      href: "",
      dates: "September 2024 - April 2025",
      active: true,
      description:
        "A reinforcement learning framework for HVAC optimization that combines physics-based thermal modeling with machine learning to reduce energy consumption by 15% while maintaining occupant comfort. Utilized deep neural networks and RL agents to create an intelligent building control system.",
      technologies: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Stable Baselines 3",
        "Gymnasium",
        "pandas",
        "NumPy",
      ],
      links: [
        {
          type: "Website",
          href: "https://noda.ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/optimumstart.jpeg",
    },
    {
      title: "Voyentra AI",
      href: "",
      dates: "January 2025 - Present",
      active: true,
      description:
        "An AI-powered personalized travel concierge platform enabling users to plan vacation trips, flights, hotels, and generate custom AI-recommended itineraries. Integrated Gemini AI for a conversational chatbot that assists users in planning trips by generating personalized itineraries based on preferences, budget, and real-time travel data.",
      technologies: [
        "React",
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Python",
        "Tailwind CSS",
        "Gemini API",
        "Flask",
      ],
      links: [
        {
          type: "Website",
          href: "https://voyentra-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/travel-concierge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/voyentra-search.png",
    },
    {
      title: "Data-Driven NBA Team Building",
      href: "",
      dates: "March 2025",
      active: true,
      description:
       "Developed for the QSAO NBA Analytics Case Competition, where we placed 2nd, this project analyzes a team's roster and cap situation, builds a player valuation framework, and proposes data-driven free agent signings and a realistic trade to optimize team performance and future success.",
      technologies: [
        "Python",
        "pandas",
        "Matplotlib",
        "NumPy",
        "Seaborn",
      ],
      links: [
        /*{
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },*/
        {
          type: "Source",
          href: "https://github.com/kevinvalenciaa/QSAO-competition",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/QSAO.png",
    },
    {
      title: "NumNum",
      href: "",
      dates: "January 2025",
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
      dates: "December 2024 - January 2025",
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
  /*hackathons: [
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
  ],*/
} as const;
