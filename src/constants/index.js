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
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "AI/ML Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "MySql",
    icon: mysql,
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
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Research Intern",
    company_name: "IEEE Publication – Under the guidance of Dr. S. Maheswari",
    icon: creator,
    iconBg: "#383E56",
    date: "",
    points: [
      "Worked on the development of DRIFA-Net, a deep learning framework for multimodal medical image classification.",
      "Designed and implemented dual attention modules for robust feature fusion and uncertainty quantification.",
      "Achieved 2–10% performance improvement over state-of-the-art methods across five benchmark datasets (CT, MRI, dermoscopy, pap smear).",
      "Published the research paper titled 'Enhancing Multimodal Fusion Learning for Medical Imaging with Dual Attention and Uncertainty Quantification' in IEEE."
    ],
  },
  {
    title: "Content Writer",
    company_name: "Newsletter : Professional Failures",
    icon: web,
    iconBg: "#383E56",
    date: "",
    points: [
      "Managed a newsletter focused on real-world professional setbacks and the growth that follows.",
      "Authored insightful articles blending storytelling with actionable takeaways to engage a diverse audience.",
      "Built and nurtured a reader base by maintaining a consistent publishing schedule and authentic voice.",
      "Analyzed audience feedback and engagement to iteratively improve content quality and reader retention."
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
