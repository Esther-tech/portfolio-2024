import projectImage from "@/public/images/details.jpg";
import zenhq from "@/public/images/zenhq-icon.png";
import accelerator from "@/public/svg/accelerator-icon.svg";
import shortstay from "@/public/images/shortstay-icon.png";
import adday from "@/public/images/adday-logo.webp";
import filtion from "@/public/images/filtion.png";
import rolesProject from "@/public/images/role-project.jpg";
import availabilityProject from "@/public/images/availability-project.png";
import addayProject1 from "@/public/images/adday-project2.png";
import addayProject2 from "@/public/images/adday-project1.png";
import filtionProject1 from "@/public/images/filtion-1.png";
import filtionProject2 from "@/public/images/filtion-2.png";
import filtionProject3 from "@/public/images/filtion-3.png";

export const navItems = [
  {
    title: "Home",
    path: "/",
  },
  { title: "Experience", path: "/#experience" },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/#contact",
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
    id: 4,
    timeline: "2024 Q2",
    duration: "2 weeks",
    demoUrl: "https://ethglobal.com/showcase/filtion-i0rnb",
    codeUrl: "https://github.com/Filtion/filtion-hack",
    title: "A Web3 Name Service for Decentralized Blogs",
    tags: [
      "Next.js",
      "Tailwind.css",
      "Scaffold-ETH",
      "Hardhat",
      "Filecoin",
      "ENS",
    ],
    imageUrl: [filtionProject1, filtionProject2, filtionProject3],
    company: {
      name: "Filtion",
      icon: filtion,
      website: "https://ethglobal.com/showcase/filtion-i0rnb",
      info: [
        "Filtion is a groundbreaking project developed during the HackFS 2024 hackathon. It represents a significant advancement in web technology, shifting from the traditional Web2 framework to a more decentralized Web3 approach. Filtion allows users to create, manage, and monetize their blogs using decentralized storage solutions, addressing key issues inherent in traditional web services.",
      ],
    },
    caseStudy: {
      intro: [
        "The digital landscape is evolving from Web2's centralized model to Web3's decentralized paradigm. Filtion, created at HackFS 2024, exemplifies this shift by providing a decentralized platform for creating and managing blogs. This service addresses the shortcomings of traditional web services by offering enhanced security, control, and monetization opportunities.",
      ],
      body: [
        "Traditional Web2 services like blogs, Brunch (a Korean blog platform), and Notion rely on centralized databases for data storage and management. While these platforms are feature-rich and user-friendly, they have notable drawbacks. Data loss is a significant risk if the centralized database is compromised or deleted. Revenue generation is also limited, as creators struggle to directly monetize their content. Additionally, privacy concerns are prevalent, with users needing to provide personal information to third-party sites, risking data exposure in the event of a hack.",
        "Filtion leverages Web3 technologies to overcome these limitations. It uses decentralized data storage, ensuring permanent preservation of content and reducing data loss risk. By storing content on the blockchain, Filtion enables transparent information sharing. The platform allows content creators to generate revenue through various models, offering content sharing profits and ownership benefits. Users can create, own, and manage their sites without relying on centralized platforms, giving them full control over their digital assets.",
        "Filtion integrates several innovative features. Users can create sites using Ethereum Name Service (ENS), converting blockchain addresses into human-readable domain names. Content is stored on the InterPlanetary File System (IPFS), ensuring permanence and ease of sharing. Various monetization models enable users to earn from their content. The Lilypad feature provides AI-generated, royalty-free images for blog decoration. WeatherXM offers accurate weather forecasts on users' home pages. Filtion uses Fleek for hosting Next.js apps, enhancing performance, security, and reliability.",
        "Filtion's technical implementation involves using Fleek for decentralized hosting, IPFS and Filecoin for decentralized storage, and ENS for domain management. Fleek ensures decentralized execution, optimizing image loading and integrating seamlessly with IPFS and Filecoin. Filecoin incentivizes data storage, ensuring data availability and security, while the Filecoin Virtual Machine (FVM) automates data management.",
      ],
      conclusion: [
        "Filtion's technical implementation involves using Fleek for decentralized hosting, IPFS and Filecoin for decentralized storage, and ENS for domain management. Fleek ensures decentralized execution, optimizing image loading and integrating seamlessly with IPFS and Filecoin. Filecoin incentivizes data storage, ensuring data availability and security, while the Filecoin Virtual Machine (FVM) automates data management.",
      ],
    },
  },
  {
    id: 3,
    timeline: "2023 Q4",
    duration: "5 weeks",
    demoUrl: "",
    codeUrl: "",
    title: "Multi-user calendar management and adding availability",
    tags: ["React", "Typescript", "PostCss", "Git"],
    imageUrl: [availabilityProject],
    company: {
      name: "AcceleratorApp",
      icon: accelerator,
      website: "https://www.acceleratorapp.co/en/",
      info: [
        "AcceleratorApp revolutionizes the incubator and accelerator landscape by offering comprehensive software solutions tailored to the unique needs of these organizations. By automating, organizing, and tracking various facets of incubation and acceleration processes, the platform empowers these entities to focus on their core mission without being bogged down by administrative tasks. From application management to milestone planning, coaching tracking to community management, AcceleratorApp software streamlines operations while enhancing the value each member receives from the experience.",
      ],
    },
    caseStudy: {
      intro: [
        "In many administrative tasks, such as scheduling interviews or appointments, managing overlapping availability of multiple users poses a significant challenge. In a recent project, our team tackled this issue head-on to empower admin users with a streamlined solution. The objective was clear: enable admins to view overlapping availability of up to five users simultaneously, facilitating efficient scheduling and management.",
      ],
      body: [
        "To achieve this goal, we developed a modal interface featuring a weekly calendar view. Leveraging the power of Typescript, React, and GraphQL, we ensured a robust and responsive solution. The modal allowed admins to effortlessly toggle between users, selecting and deselecting up to five individuals at a time using intuitive checkboxes.",
        "One of the key functionalities of the modal was the ability to incorporate personal events from selected users into the view, providing crucial context for scheduling decisions. Additionally, we implemented a feature to highlight overlapping availability sections across all selected users, enhancing visibility and facilitating decision-making.",
        "Collaboration was at the heart of our approach. We worked closely with both the design and backend development teams to ensure seamless integration and optimal user experience. By leveraging React context API and hooks, we maintained state efficiently, ensuring smooth interaction within the interface.",
        "One of the core challenges we encountered was accommodating users across different timezones. However, with careful consideration and implementation, we successfully integrated timezone adjustments based on user settings, ensuring a consistent and accurate view for all users.",
      ],
      conclusion: [
        "In conclusion, the development of the multi-user availability view modal significantly enhances the admin user experience in managing overlapping availability. By providing a comprehensive overview of multiple users' schedules in a single interface, we've streamlined the scheduling process and improved efficiency.",
        "Through collaboration, innovative use of technology, and a commitment to user-centric design, we've delivered a solution that not only meets but exceeds the needs of our clients. Moving forward, we remain dedicated to refining and expanding upon this foundation, continually striving to enhance the frontend experience for users across diverse administrative tasks.",
      ],
    },
  },
  {
    id: 2,
    timeline: "2023 Q1-Q3",
    duration: "30 weeks",
    demoUrl: "",
    codeUrl: "",
    title: "Enhancing user roles and permissions management",
    tags: ["React", "Typescript", "GraphQL", "PostCSS", "Formik", "Yup", "Git"],
    imageUrl: [rolesProject],
    company: {
      name: "AcceleratorApp",
      icon: accelerator,
      website: "https://www.acceleratorapp.co/en/",
      info: [
        "AcceleratorApp revolutionizes the incubator and accelerator landscape by offering comprehensive software solutions tailored to the unique needs of these organizations. By automating, organizing, and tracking various facets of incubation and acceleration processes, the platform empowers these entities to focus on their core mission without being bogged down by administrative tasks. From application management to milestone planning, coaching tracking to community management, AcceleratorApp software streamlines operations while enhancing the value each member receives from the experience.",
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
      ],
      conclusion: [
        "In conclusion, the collaborative efforts of the frontend developer, designer, and backend developer resulted in the seamless integration of role and permission management features, enhancing the security and usability of the application. This case study underscores the importance of cross-functional collaboration in delivering robust solutions that align with user needs and industry best practices. The utilization of React.js, TypeScript, and GraphQL technologies facilitated efficient development and implementation of the feature, showcasing the power of modern frontend development techniques in solving complex challenges.",
      ],
    },
  },

  {
    id: 1,
    timeline: "2023 Q3",
    duration: "3 weeks",
    demoUrl: "https://www.addaywellness.com/",
    codeUrl: "",
    title:
      "Customizing a shopify webshop: a case study in Liquid and JavaScript",
    tags: ["JavaScript", "Liquid", "Shopify", "Git", "CSS"],
    imageUrl: [addayProject1, addayProject2],
    company: {
      name: "Adday Wellness",
      website: "https://www.addaywellness.com/",
      icon: adday,
      info: [
        "Adday is dedicated to promoting holistic health through functional foods that nurture the body and mind. Their range of nutrition supplements is meticulously crafted with probiotics, prebiotics, and natural ingredients to support healthy digestion, gut health, and overall wellness. With a focus on plant-based, clean eating, we aim to empower individuals on their journey towards a healthier lifestyle. From immune support to weight balance and mind focus, our products are designed to help you achieve your wellness goals. At Adday, we believe in the transformative power of small habits and are committed to supporting your holistic well-being, one step at a time.",
      ],
    },
    caseStudy: {
      intro: [
        "This case study delves into the comprehensive customization of a Shopify webshop, achieved through the adept utilization of the Liquid programming language and vanilla JavaScript. The project aimed to transform a standard Shopify store into a unique and tailored online shopping experience, catering to the specific needs and branding of the client.",
      ],
      body: [
        "The customization process commenced with a thorough analysis of the client's requirements and design preferences. Leveraging the flexibility of Shopify's Liquid templating language, I meticulously crafted custom templates and sections to achieve the desired layout and functionality. This involved creating unique page templates for the homepage, product pages, and collection pages, ensuring consistency and coherence throughout the webshop.",
        "One of the key challenges was implementing dynamic product filtering and sorting functionalities. Utilizing Liquid's powerful logic and iteration capabilities, I developed custom filters based on product attributes such as category, price range, and availability. Vanilla JavaScript was employed to enhance user interactions, enabling seamless filtering and sorting of products without requiring page reloads.",
        "Another crucial aspect of the customization was adding subscription options to the product pages utilizing the variant variable already present in Shopify. By leveraging the existing variant settings, which were repurposed as subscription options, we empowered the client to easily adjust these settings through the Shopify admin panel. This approach not only streamlined the process of adding subscriptions but also provided flexibility for the client to tailor subscription offerings to meet evolving customer preferences. With the integration of subscription options directly into the product pages, customers can now conveniently subscribe to their favorite products with just a few clicks, enhancing user experience and driving recurring revenue for the client.",
        "Accessibility and performance optimization were prioritized throughout the customization process. Leveraging Liquid's conditional rendering capabilities, I implemented responsive design principles to ensure optimal user experiences across devices of varying screen sizes. Additionally, I optimized page load times by minimizing unnecessary Liquid code and leveraging browser caching techniques.",
        "The final phase of the customization involved rigorous testing and quality assurance. I conducted thorough cross-browser and cross-device testing to ensure compatibility and consistency across different environments. Additionally, I collaborated closely with the client to gather feedback and make any necessary adjustments to meet their expectations.",
      ],
      conclusion: [
        "In conclusion, the comprehensive customization of the Shopify webshop exemplifies the power and versatility of the Liquid programming language and vanilla JavaScript. By leveraging these technologies, I was able to transform a standard Shopify store into a highly tailored and engaging online shopping experience, perfectly aligned with the client's vision and branding. This case study underscores the importance of expertise and creativity in leveraging platform capabilities to achieve unique and impactful solutions in e-commerce development.",
      ],
    },
  },
] as const;
