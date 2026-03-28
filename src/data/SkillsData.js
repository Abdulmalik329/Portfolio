import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

export const SkillsData = [
  // Frontend Core
  { name: "Javascript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> }, // Next.js bilan ishlatganingiz uchun qoldirdim
  { name: "React Js", icon: <FaReact /> },

  // Styling
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },

  // Backend & Database (Rezyumedan)
  { name: "Node Js", icon: <SiNodedotjs /> },
  { name: "Express Js", icon: <SiExpress /> },
  { name: "Prisma ORM", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },

  // Version Control
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];
