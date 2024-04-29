import projectImage from '@/public/images/details.jpg';
import zenhq from '@/public/images/zenhq-icon.png';
import accelerator from '@/public/svg/accelerator-icon.svg';
import shortstay from '@/public/images/shortstay-icon.png';

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
    companyIcon: accelerator,
    tags:  ['B2B', 'SaaS'],
  },
  {
    title: 'Frontend developer',
    year: '2021-2022',
    company: 'zenHQ',
    companyIcon: zenhq,
    tags:  ['B2B', 'SaaS', 'E-commerce'],
  },
  {
    title: 'Project manager',
    year: '2020',
    company: 'zenHQ',
    companyIcon: zenhq,
    tags:  ['B2B', 'SaaS', 'E-commerce'],
  },
  {
    title: 'Revenue coordinator',
    year: '2017-2018',
    company: 'Short Stay',
    companyIcon: shortstay,
    tags:  ['Real Estate', 'Optimization'],
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

