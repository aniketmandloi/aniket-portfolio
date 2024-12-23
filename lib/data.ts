import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBitcoin, FaCar, FaMobile, FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nextDashboardImage from "@/public/Next-Dashboard.png";
import aniketShopImage from "@/public/Aniket's-Shop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BlackWallet LTD, Software Developer (Contractor)",
    location: "Remote, India",
    description:
      "Developing a Decentralized Crypto Exchange Platform by leveraging TypeScript, Fastify.js, React.js, Redux RTK Query, Postgres, and PrismaORM, resulting in seamless client-side data fetching and high-performance backend operations.",
    icon: React.createElement(FaBitcoin),
    date: "Nov 2023 – Present",
  },
  {
    title: "Manabu Method, Software Developer (Contractor)",
    location: "Remote, India",
    description:
      "Leading the Development of a Cross-platform Mobile Expo-App using React Native, TypeScript, GraphQL, Apollo-Express server, and PrismaORM with Postgres, enabling foreign organizations to provide facilities to unreached communities in forests, targeting a 30% increase in outreach, Ongoing efforts focus on reducing aid response time by 40% and enhancing service delivery through real-time data synchronization and efficient backend operations.",
    icon: React.createElement(FaMobile),
    date: "April 2024 – Present",
  },
  {
    title: "MET - Capital, Software Developer",
    location: "Remote, India",
    description:
      "Worked on Hiconium Project with Typescript, Express.js, node.js, GraphQl, Digital Ocean to help build a platform for hypercars, Collected Relevant Data Points using Javascript and Puppeteer.",
    icon: React.createElement(FaCar),
    date: "Jan 2024 – April 2024",
  },
  {
    title: "Bitcot, Python Developer",
    location: "Indore, India",
    description:
      "Developed a dynamic Flask web app with OpenAI API integration, utilizing LangChain for NLP, featuring AI components and on used Database extensions such as pgvector for postgres. Also handled NASA data analysis in Python, uploading to A WS S3 using Boto3.",
    icon: React.createElement(FaPython),
    date: "July 2023 – Aug 2023",
  },
  {
    title: "Safecity - Red Dot Foundation, Intern",
    location: "Remote, India",
    description:
      "Developed and crafted high-converting landing pages and an engaging frontend for the website, resulting in an impressive 75% enhancement in online visibility. This strategic overhaul contributed significantly to a notable 30% upsurge in user engagement metrics.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2021 - Feb 2022",
  },
  {
    title: "Prestige Institute of Engineering and Research ",
    location: "Indore, India",
    description:
      "Major Project: Implemented Deep Learning Modal, using Python , FastAPI and TensorFlow to Achieve 97 .8% accuracy to save more than 62% of potato crop affected by the two major diseases Early Blight and Late Blight with Image Processing.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Nextjs-Dashboard",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: nextDashboardImage,
  },
  {
    title: "Aniket's-Shop",
    description:
      "An ecommerce web application to buy cloths and products, with Authentication",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MaterialUI",
      "Redux",
      "Prisma",
      "Passport.js",
    ],
    imageUrl: aniketShopImage,
  },
  {
    title: "Nextjs Dashboard",
    description:
      "A web app for quick analytics on Invoices and Customers. It was my First web app using nextjs, Deployed on Vercel",
    tags: ["Typescript", "React", "Next.js", "PostgreSQL", "Tailwind"],
    imageUrl: nextDashboardImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
