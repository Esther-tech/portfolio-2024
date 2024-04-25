import projectImage from '@/public/images/details.jpg'

export const navItems = [
  {
    title: "Home",
    path: "#home",
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

export const projectData = [
  {
    id: 1,
    company: 'AcceleratorApp',
    year: '2023',
    title: 'First project of improving something that has to do with the frontend of this company',
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
    company: 'ZenHQ',
    year: '2023',
    title: 'Thrid project name',
    tags: ['React', 'Javascript', 'Redux' ],
    imageUrl: projectImage,
  },
  {
    id: 4,
    company: 'Adday',
    year: '2023',
    title: 'Another interesting project to look at, customizing a Shopify website',
    tags: ['React', 'JavaScript', 'Liquid', 'Shopify'],
    imageUrl: projectImage,
  } 
] as const;

