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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Google Cloud Platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "Apache Kafka",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "Apache Airflow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  },
  {
    name: "Apache Spark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
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
      "Sudharsan made complex problems look easy with his clear thinking and technical depth during our IEEE research.",
    name: "Abdul Hashim",
    designation: "Research Intern",
    company: "IEEE Project",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Sudharsan stands out for his research focus and sharp thinking. A dependable contributor throughout our IEEE work.",
    name: "Dr. S. Maheswari",
    designation: "Assistant Professor & IEEE Research Guide",
    company: "IEEE Project",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Sudharsan combines creativity with sharp execution. A valuable partner in our innovation efforts.",
    name: "Azfer Mirza",
    designation: "Founder",
    company: "Professional Failures",
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
    name: "India General election results - 2024 overview analysis",
    description:
      "This dashboard provides a comprehensive analysis of the 2024 Indian General Election results. It helps users explore voting patterns, party performance, and voter behavior across national, state, and constituency levels, offering insights to understand political trends and regional dynamics.",
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
    name: "A Dual Attention Approach for Medical Image Fusion",
    description: "Dual attention-based multimodal model for disease classification. It combines multi-branch and multimodal fusion attention to improve feature learning and generalization. Using Monte Carlo dropout for uncertainty estimation, it boosts diagnostic accuracy and reliability across five medical datasets, supporting better clinical decisions.",
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
