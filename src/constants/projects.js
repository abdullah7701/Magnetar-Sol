import { COURSE_CATEGORIES } from "./courses";

const { default: WebDev } = require("components/ServicesHome/WebDev");

const getCategory = (category) =>
  Object.keys(COURSE_CATEGORIES).find((k) => COURSE_CATEGORIES[k] === category);

export const PROJECTS = [
  {
    title: "UI/UX Design",
    category: getCategory(COURSE_CATEGORIES.DESIGN),
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    component: <WebDev />,
  },
  {
    title: "Web development",
    category: getCategory(COURSE_CATEGORIES.WEB_DEVELOPMENT),
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    component: <WebDev />,
  },
  {
    title: "SEO",
    category: getCategory(COURSE_CATEGORIES.SEO),
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    component: <WebDev />,
  },
  {
    title: "Automation",
    category: getCategory(COURSE_CATEGORIES.AUTOMATION),
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    component: <WebDev />,
  },
];
