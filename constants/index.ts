export const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Case Studies",
    path: "/case-studies",
  },
  {
    title: "Contact",
    path: "/contact",
  },

] as const;

export const MY_EMAIL = "wirayuda233@gmail.com";

export const SERVICES = [
  {
    title: "Analytics & SEO",
    text: "Implement tracking & analytics tools to monitor website performance & improve SEO.",
    icon: "/assets/icons/pencil.svg",
  },
  {
    title: "Front-End Dev",
    text: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
    icon: "/assets/icons/cursor.svg",
  },
  {
    title: "Back-End Dev",
    text: "Focus on server-side, ensuring seamless data management and communication between the user interface and the server.",
    icon: "/assets/icons/code.svg",
  },
  {
    title: "Web Optimization",
    text: "Web optimization focuses on improving website performance for a smoother user experience",
    icon: "/assets/icons/speed.svg",
  },
] as const;

export const SKILLS = [
  {
    label: "Javascript",
    icon: "/assets/icons/js.svg",
  },
  {
    label: "React Js",
    icon: "/assets/icons/react.svg",
  },
  {
    label: "Redux",
    icon: "/assets/icons/redux.svg",
  },
  {
    label: "Next Js",
    icon: "/assets/icons/nextjs.svg",
  },
  {
    label: "Nest Js",
    icon: "/assets/icons/nestjs.svg",
  },
  {
    label: "Postgresql",
    icon: "/assets/icons/psql.svg",
  },
  {
    label: "Socket.io",
    icon: "/assets/icons/socketio.svg",
  },
  {
    label: "Golang",
    icon: "/assets/icons/go.svg",
  },
  {
    label: "Typescript",
    icon: "/assets/icons/ts.svg",
  },
  {
    label: "Html",
    icon: "/assets/icons/html.svg",
  },
  {
    label: "CSS",
    icon: "/assets/icons/css.svg",
  },
  {
    label: "Sass",
    icon: "/assets/icons/sass.svg",
  },
  {
    label: "Material UI",
    icon: "/assets/icons/mui.svg",
  },
  {
    label: "Tailwind CSS",
    icon: "/assets/icons/tw.svg",
  },
  {
    label: "Git",
    icon: "/assets/icons/git.svg",
  },
  {
    label: "Github",
    icon: "/assets/icons/github.svg",
  },
  {
    label: "Node JS",
    icon: "/assets/icons/nodejs.svg",
  },
  {
    label: "Express JS",
    icon: "/assets/icons/express.svg",
  },
  {
    label: "Mongo DB",
    icon: "/assets/icons/mongo.svg",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/wira-yuda29/",
    label: "Linkedln",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    link: "https://github.com/wirayuda299",
    label: "Github",
    icon: "/assets/icons/github.svg",
  },
] as const;

export const FORM_FIELDS = [
  {
    label: "name",
    title: "What’s your name?",
    subTitle: "",
  },
  {
    label: "email",
    title: "What is your email?",
    subTitle: "",
  },
  {
    label: "messageText",
    title: "Write something about your project goals and timeframe",
    subTitle: "",
  },
  {
    label: "senderContact",
    title: "How to reach out to you back?",
    subTitle: "eg. phone number or email ",
  },
] as const;

export const CASE_STUDY_BASE_QUERY = `*[_type == "caseStudies"]`;
export const CASE_STUDY_FIELDS = `
  _id,
  title,
  subTitle,
  "mockup": mockup.asset->url,
  demoSite,
  sourceCode,
  "techStacks": techStacks[]{
    "icon": icon.asset->url,
    name
  },
  projectInfo,
  descriptions,
  challenges,
  learnings,
  backgroundColor
`;
