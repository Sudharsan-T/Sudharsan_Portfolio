import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  electionAnalysis,
  proj1,
  proj3,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Customer Segmentation and Product Recommendation",
    description:
      "InsightLens is a data analysis and machine learning project that segments customers based on purchasing behavior. It uses clustering and outlier detection to group customers and provide personalized product recommendations, helping businesses enhance customer engagement and increase sales.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: proj1,
    source_code_link: "https://github.com/Sudharsan-T/Customer-Segmentation-and-Product-Recommendation",
  },
  {
    name: "Election Analysis Dashboard Using PowerBI",
    description:
      "This dashboard provides a comprehensive analysis of the 2024 Indian General Election results. It helps users explore election trends, party performance, and voter dynamics at national, state, and constituency levels.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "election analysis",
        color: "pink-text-gradient",
      },
    ],
    image: electionAnalysis,
    source_code_link: "https://github.com/Sudharsan-T/End-To-End-2024-Election-Analysis",
  },
  {
    name: "DRIFA-Net: A Dual Attention Approach for Medical Image Fusion",
    description: "DRIFA-Net is a dual attention-based multimodal model for disease classification. It combines multi-branch and multimodal fusion attention to improve feature learning and generalization. Using Monte Carlo dropout for uncertainty estimation, it boosts diagnostic accuracy and reliability across five medical datasets, supporting better clinical decisions.",
    tags: [
      {
        name: "deep learning",
        color: "blue-text-gradient",
      },
      {
        name: "multimodal",
        color: "green-text-gradient",
      },
      {
        name: "medical AI",
        color: "pink-text-gradient",
      },
    ],
    image: proj3,
  },
];

export { services, technologies, experiences, testimonials, projects };
