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
    title: 'Title1',
    year: '2020-2021',
    company: 'Company',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Title2',
    year: '2020-2021',
    company: 'Company',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Title3',
    year: '2020-2021',
    company: 'Company',
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Title4',
    year: '2020-2021',
    company: 'Company',
    tags:  ['B2B', 'SaaS'],
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

