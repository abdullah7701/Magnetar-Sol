export const COURSE_CATEGORIES = {
  SEO: "SEO",
  AUTOMATION: "Automation",
  DESIGN: "UI/UX Design",
  WEB_DEVELOPMENT: "Web Development",
};

// Add duration in hours (in points for minutes, e.g., 0.25 = 15 minutes, 1.5 = 1 hour 15 minutes, etc.)
export const COURSES = [
  {
    title: "SEO Fundamentals",
    description:
      "Learn the basics of Search Engine Optimization and how to improve your website's visibility on search engines.",
    link: "https://www.coursera.org/learn/seo-fundamentals",
    duration: 10, // 10 hours
    learners: 3200,
    cover:
      "https://th.bing.com/th/id/OIP.vBjC9ZFX4-ZDTWRH0RvgKQHaE8?w=272&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    category: COURSE_CATEGORIES.SEO,
  },
  {
    title: "Automated Testing with Selenium",
    description:
      "Learn how to automate web applications with Selenium WebDriver and enhance your testing skills.",
    link: "https://www.udemy.com/course/automated-testing-with-selenium/",
    duration: 10, // 10 hours
    learners: 2400,
    cover:
      "https://th.bing.com/th/id/OIP.OHfKUH7hiUKoSmbLtqstrgHaEH?rs=1&pid=ImgDetMain",
    category: COURSE_CATEGORIES.AUTOMATION,
  },
  {
    title: "UI/UX Design Essentials",
    description:
      "Master the principles of UI/UX design and learn to create user-friendly interfaces.",
    link: "https://www.coursera.org/learn/ui-ux-design",
    duration: 12, // 12 hours
    learners: 1500,
    cover:
      "https://th.bing.com/th/id/R.5d9114888ac3b0db7c11706d799b9c49?rik=St5nruUshqYtFA&pid=ImgRaw&r=0",
    category: COURSE_CATEGORIES.DESIGN,
  },
  {
    title: "The Complete Web Development Bootcamp",
    description:
      "A comprehensive course covering HTML, CSS, JavaScript, Node.js, and more for aspiring web developers.",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    duration: 45, // 45 hours
    learners: 8000,
    cover:
      "https://th.bing.com/th/id/OIP.OiZhGS5AQXm2P-0WaYwPigHaEK?rs=1&pid=ImgDetMain",
    category: COURSE_CATEGORIES.WEB_DEVELOPMENT,
  },
];