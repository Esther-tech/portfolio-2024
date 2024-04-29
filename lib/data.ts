import projectImage from '@/public/images/details.jpg'

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
    title: 'Frontend developer',
    year: '2022-Present',
    company: 'AcceleratorApp',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Frontend developer',
    year: '2021-2022',
    company: 'zenHQ',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Project manager',
    year: '2020',
    company: 'zenHQ',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Revenue coordinator',
    year: '2017-2018',
    company: 'Short Stay Group',
    tags:  ['Real Estate', 'Analytical'],
  }
] as const;

export const projectData = [
  {
    id: 1,
    company: 'AcceleratorApp',
    year: '2023',
    title: 'First project of improving the frontend of this company',
    tags: ['React', 'Typescript', 'Tailwind', 'Next.js'],
    imageUrl: projectImage,
  },
  {
    id: 2,
    company: 'AcceleratorApp',
    year: '2023',
    title: 'Second project name reshaping a certain website for a SaaS company',
    tags: ['React', 'Typescript'],
    imageUrl: projectImage,
  },
  {
    id: 3,
    company: 'zenHQ',
    year: '2023',
    title: 'Thrid project name',
    tags: ['React', 'Javascript', 'Redux' ],
    imageUrl: projectImage,
  },
  {
    id: 4,
    company: 'Adday',
    year: '2023',
    title: 'Another interesting project; customizing a Shopify website',
    tags: ['React', 'JavaScript', 'Liquid', 'Shopify'],
    imageUrl: projectImage,
  } 
] as const;

