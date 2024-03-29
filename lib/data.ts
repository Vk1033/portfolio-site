import ecommerceStoreImg from "@/public/ecommerce-store.jpg";
import spotifyCloneImg from "@/public/spotify-clone.jpg";
import pythonBotsImg from "@/public/python-bots.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Spotify Clone",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Supabase"],
    url: "https://spotify-clone-vk1033.vercel.app//",
    imageUrl: spotifyCloneImg,
  },
  {
    title: "E-commerce Store",
    description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Vite.js", "GraphQL", "Tailwind", "Firebase"],
    url: "https://aesthetic-treacle-779f86.netlify.app/",
    imageUrl: ecommerceStoreImg,
  },
  {
    title: "Python apps",
    description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Python", "Flask", "MongoDB", "Nodejs"],
    url: "github.com/vk1033",
    imageUrl: pythonBotsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
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
  "Flask",
  "Framer Motion",
] as const;
