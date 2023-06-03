import {
    backend,
    javascript,
    typescript,
    html,
    css,
    cpp,
    csharp,
    java,
    python,
    webgl,
    mysql,
    pytorch,
    r,
    postgre,
    rust,
    lua,
    reactjs,
    nodejs,
    git,
    datafast,
    honeywell,
    honeywelproj,
    worldmap,
    database,
    carrent,
    jobit,
    tripguide,
    threejs,
    frontend,
    ittech,
    gamedev,
  } from "../assets";
  
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
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IT Technician",
      icon: ittech,
    },
    {
      title: "Game Developer",
      icon: gamedev,
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
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "webgl",
      icon: webgl,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "r",
      icon: r,
    },
    {
      name: "postgre",
      icon: postgre,
    }
  ];
  
  const experiences = [
    {
      title: "AI ML Base Air Traffic Communication Prediction",
      company_name: "Honeywell",
      icon: honeywell,
      iconBg: "#383E56",
      date: "August 2022 - May 2023",
      points: [
        "Developing a Machine Learning algorithm in Pytorch that learns from the communication sequence of past flights and predicts the future sequences for ATC Communications",
        "Employed two distinct machine-learning models, we successfully addressed our problem using different methodologies. XGBoost, as well as a Random Forest Model",
        "Participating in team meetings and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT Technician",
      company_name: "Datafast",
      icon: datafast,
      iconBg: "#383E56", 
      date: "May 2021 - Present",
      points: [
        "Playing a vital role in maintaining and troubleshooting computer systems and networks.",
        "Diagnosing and resolve technical issues faced by users, ensuring their hardware and software operate smoothly.",
        "Providing technical support and guidance to individuals and organizations, helping them navigate technological challenges.",
        "Responsibilities include installing and configuring software, setting up new hardware, and ensuring data security measures are in place.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Alan is so poggers",
      name: "Joshua Frisby",
      designation: "Professor",
      company: "Glendale Community College",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Honeywell’s AI/ML Base ATC Communication Prediction ",
      description:
        "Develop a ML algorithm that learns from the communication sequence of past flights and predicts the future sequences for ATC",
      tags: [
        {
          name: "Pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: honeywelproj,
      source_code_link: "https://github.com/YangHusurianto/honeywell-atc-ai",
    },
    {
      name: "Data Analysis: World Map of State Fragility",
      description:
        "This project examines the impact of U.S. involvement in foreign countries and evaluates its effects on both the United States and the countries they are engaged with. It utilizes a dataset called State Fragility that provides index scores for countries in two key categories: Effectiveness and Legitimacy. These categories are further divided into four dimensions: Security, Political, Economic, and Social Effectiveness/Legitimacy. The index score is determined by combining the effectiveness score and the legitimacy score of each country.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: worldmap,
      source_code_link: "https://github.com/asu-cse494-s2022/Project-Matthew-Ahmed-Conner-Shaswat",
    },
    {
      name: "Politician Database",
      description:
        "A comprehensive database of all politicians in the United States, with working search functionality and a user-friendly interface. As well as Add, Modify, and Delete functionality.",
      tags: [
        {
          name: "PythonFlask",
          color: "blue-text-gradient",
        },
        {
          name: "pgAdmin",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: database,
      source_code_link: "https://github.com/alanhafeed/Group50DatabaseProject",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };