import {
    mobile,
    backend,
    landingpage,
    netflix,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    store,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: " Django Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React JS Developer",
  //    company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Highlight your ability to design and structure React components in a modular and reusable manner.",
        "Detail your experience with state management solutions like React's built-in state, Context API, or third-party libraries such as Redux or Mobx.",
        "Detail your approach to creating responsive and mobile-friendly user interfaces using CSS and media queries.",
        "Mention any experience you have with using popular UI component libraries like Material-UI, Ant Design, or Chakra UI.",
      ],
    },
    {
      title: "Django Developer",
     // company_name: "Tesla",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Using Django's Object-Relational Mapping (ORM) to interact with databases, create models, and perform database operations.",
        "Detail your experience in building RESTful APIs using Django's built-in features or third-party packages like Django REST framework.",
        "Django's template language to create dynamic and responsive web pages.",
        "Highlight your skills in defining clear URL routing patterns using Django's URL configuration system.",
      ],
    },
    {
      title: "Python Developer",
    //  company_name: "Shopify",
      icon: threejs ,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Highlight your proficiency in designing and implementing classes, inheritance, encapsulation, and polymorphism.",
        "Describe your experience in tackling complex problems using Python's features and algorithms.",
        " Detail your understanding of concurrency concepts and async/await for efficient code execution.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
    //  company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Ability to design user interfaces that are visually appealing, user-friendly, and responsive across different devices and screen sizes.",
        "Detail your proficiency in JavaScript and its modern features, enabling you to create interactive and dynamic frontend components.",
        "Highlight your knowledge of backend frameworks such as Express.js (Node.js), Django (Python), Python",
        "Showcase your ability to integrate frontend components with backend APIs, ensuring smooth data flow between the two layers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Talha proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Talha does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Talha optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Showroom",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce Store",
      description:
        "Ecommerce store that helps the people to buy the daily life products and have the amazing user Interface. I have added the payment gateway for the purchasing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: store,
      source_code_link: "https://ecommerce-stripe-vekd.vercel.app/",
    },
    {
      name: "Netflix clone",
      description:
        "This is the netflix clone that same exactly looks like the netflix. In this app you can see the latest movies trailers of netlfix for free and I have used the tmdb apis for this.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TMDBapis",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://netflix-clone-9f83e.web.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };