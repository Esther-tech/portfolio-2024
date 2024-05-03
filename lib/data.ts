import projectImage from "@/public/images/details.jpg";
import zenhq from "@/public/images/zenhq-icon.png";
import accelerator from "@/public/svg/accelerator-icon.svg";
import shortstay from "@/public/images/shortstay-icon.png";
import rolesProject from "@/public/images/roles-project.png";

export const navItems = [
  {
    title: "Home",
    path: "/",
  },
  { title: "Experience", path: "#experience" },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Frontend developer",
    year: "2022-Present",
    company: "AcceleratorApp",
    companyIcon: accelerator,
    tags: ["B2B", "SaaS"],
  },
  {
    title: "Frontend developer",
    year: "2021-2022",
    company: "zenHQ",
    companyIcon: zenhq,
    tags: ["B2B", "SaaS", "E-commerce"],
  },
  {
    title: "Project manager",
    year: "2020",
    company: "zenHQ",
    companyIcon: zenhq,
    tags: ["B2B", "SaaS", "E-commerce"],
  },
  {
    title: "Revenue coordinator",
    year: "2017-2018",
    company: "Short Stay",
    companyIcon: shortstay,
    tags: ["Real Estate", "Optimization"],
  },
] as const;

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "GraphQL",
  "Apollo Client",
  "Next.js",
  "Tailwind CSS",
  "PostCSS",
  "Formik",
  "Shopify Liquid",
  "Yup",
  "Material UI",
  "D3.js",
  "Git",
  "Jest",
];

export const projectData = [
  {
    id: 1,
    timeline: "2023 Q1-Q3",
    title: "Enhancing user roles and permissions management",
    tags: ["React", "Typescript", "GraphQL", "Formik", "yup"],
    imageUrl: rolesProject,
    company: {
      name: "AcceleratorApp",
      icon: accelerator,
      info: [
        "AcceleratorApp revolutionizes the incubator and accelerator landscape by offering comprehensive software solutions tailored to the unique needs of these organizations. By automating, organizing, and tracking various facets of incubation and acceleration processes, the platform empowers these entities to focus on their core mission without being bogged down by administrative tasks. From application management to milestone planning, coaching tracking to community management, AcceleratorApp software streamlines operations while enhancing the value each member receives from the experience.",
        "With customizable modules, AcceleratorApp adapts to the specific processes and requirements of each incubator or accelerator, fostering efficiency and transparency throughout the startup journey. We believe in fostering global connections while supporting local economies, driven by a dedication to meritocracy and transparency in the startup ecosystem.",
      ],
    },
    caseStudy: {
      intro: [
        "This case study illustrates the collaborative effort among a frontend developer, a designer, and a backend developer to integrate role and permission management features into a complex React.js codebase. The project aimed to empower admin users to efficiently assign roles and permissions while implementing access restrictions throughout the application.",
      ],
      body: [
        "The team's primary challenge was to enhance the existing user management system by incorporating granular control over user roles and permissions. This involved enabling admin users to assign default permissions and create custom roles with specific permissions, while ensuring seamless implementation of access restrictions across various views.",
        "The collaboration commenced with comprehensive discussions to outline the feature's scope and requirements. The designer conceptualized intuitive user interfaces, while the backend developer laid the groundwork by architecting necessary GraphQL APIs and database structures to support frontend implementation.",
        "Utilizing React.js and TypeScript, I leveraged Formik and Yup validation for streamlined creation and editing of roles. Custom hooks were implemented to minimize GraphQL query calls, optimizing performance by utilizing cached values stored in React context. The frontend architecture facilitated dynamic rendering of permissions based on user roles, ensuring seamless user interactions and minimal network requests.",
        "Close collaboration with the backend developer ensured smooth integration of frontend components with GraphQL APIs. Rigorous testing procedures were implemented to validate the system across diverse user scenarios, identifying and addressing potential edge cases proactively.",
        "The successful integration of role and permission management features empowered admin users with enhanced control over user access within the application. Post-implementation feedback highlighted significant improvements in usability and efficiency, affirming the success of our collaborative endeavor.",
        "In conclusion, the collaborative efforts of the frontend developer, designer, and backend developer resulted in the seamless integration of role and permission management features, enhancing the security and usability of the application. This case study underscores the importance of cross-functional collaboration in delivering robust solutions that align with user needs and industry best practices. The utilization of React.js, TypeScript, and GraphQL technologies facilitated efficient development and implementation of the feature, showcasing the power of modern frontend development techniques in solving complex challenges.",
      ],
    },
  },
  {
    id: 2,
    timeline: "2023 Q4",
    title: "Multi-user calendar management and adding availability",
    tags: ["React", "Typescript"],
    imageUrl: projectImage,
    company: {
      name: "AcceleratorApp",
      icon: accelerator,
      info: [
        "AcceleratorApp revolutionizes the incubator and accelerator landscape by offering comprehensive software solutions tailored to the unique needs of these organizations. By automating, organizing, and tracking various facets of incubation and acceleration processes, the platform empowers these entities to focus on their core mission without being bogged down by administrative tasks. From application management to milestone planning, coaching tracking to community management, AcceleratorApp software streamlines operations while enhancing the value each member receives from the experience.",
        "With customizable modules, AcceleratorApp adapts to the specific processes and requirements of each incubator or accelerator, fostering efficiency and transparency throughout the startup journey. We believe in fostering global connections while supporting local economies, driven by a dedication to meritocracy and transparency in the startup ecosystem.",
      ],
    },
    caseStudy: {
      intro: [
        "This case study delves into the collaborative effort between a frontend developer, a designer, and a backend developer to integrate role and permission management features into a large-scale application.",
      ],
      body: [
        "Our team of three, consisting of a UI/UX designer, a Backend developer, and me, a Frontend Developer, was tasked with enhancing the existing user management system to incorporate granular control over user roles and permissions.",
        "The collaboration commenced with brainstorming sessions to outline the scope and requirements of the feature. The designer conceptualized user interfaces, while the backend developer began architecting necessary APIs and database schemas.",
        "I translated design mockups into functional components, ensuring dynamic rendering of permissions based on selected roles. Iterative development cycles refined the interface and optimized user interactions.",
        "Close collaboration with the backend developer ensured seamless integration of frontend components with GraphQL queries and mutations. Rigorous testing validated the system across diverse user scenarios.",
        "The integration empowered administrators with control over user access. User feedback post-implementation indicated significant improvement in usability and efficiency.",
      ],
    },
  },
  {
    id: 3,
    timeline: "2023",
    title: "ZenPay???",
    tags: ["React", "Javascript", "Redux"],
    imageUrl: projectImage,
    company: {
      name: "zenHQ",
      icon: zenhq,
      info: ["zenhq"],
    },
    caseStudy: {
      intro: ["Intro"],
      body: ["Body"],
    },
  },
  {
    id: 4,
    timeline: "2023 Q3",
    title: "Another interesting project; customizing a Shopify website",
    tags: ["React", "JavaScript", "Liquid", "Shopify"],
    imageUrl: projectImage,
    company: {
      name: "Adday",
      icon: shortstay,
      info: ["Adday"],
    },
    caseStudy: {
      intro: ["Intro"],
      body: ["Body"],
    },
  },
] as const;
