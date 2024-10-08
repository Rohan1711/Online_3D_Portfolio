import {
  mobile,
  backend,
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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  linkedin,
  contact,
  githubi,
  threejs,
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
    id: "feedbacks",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const links = [
  {
    id: 1,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-kakare-478729184",
    style: "rounded-tr-md mt-4", // Style for the list item
  },
  {
    id: 2,
    text: "GitHub",
    href: "https://github.com/Rohan1711",
    style: "rounded-tr-md mt-4",
  },
  {
    id: 3,
    text: "Mail",
    href: "mailto:rohankakare@gmail.com",
    style: "rounded-tr-md mt-4",
  },
  {
    id: 4,
    text: "Resume",
    href: "/Rohan Kakare CV.pdf",
    style: "rounded-tr-md mt-4", // Style for the list item
    download: true, // Indicates if the link should be downloadable
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
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
    name: "Python",
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
    title: "Representative, Operations",
    company_name: "Concentrix",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "January 2021 - February 2022",
    points: [
      "As a Representative, Operations, I was an integral part of the operations team, contributing to the efficient functioning of the e-commerce(flipkart) platform.",
      "Addressed customer queries and concerns regarding orders, shipments, and product information.",
      "Provided excellent customer service through various channels, including email, chat, and phone.",
      "During my tenure as a Representative, Operations at Flipkart, I played a Subject Matter Expert (SME) role, where I actively contributed my expertise to enhance operational processes and address complex challenges. This involved providing guidance to team members, sharing in-depth knowledge, and ensuring the effective implementation of best practices within the operations department",
    ],
  },
  {
    title: "Senior Associate",
    company_name: "Eviden-Atos",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - October 2024",
    points: [
      "Provided technical support to end-users, resolving hardware, software, and network-related issues.",
      "Troubleshot and diagnosed system performance issues on desktops, laptops, and mobile devices.",
      "Supported the setup, configuration, and troubleshooting of networking equipment ( routers, switches, VPNs).",
      "Collaborated with cross-functional teams to address recurring issues and improve system performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "From Pune University in V.P.S.College Of Arts Commerce and Science",
    name: "BSc(Computer science)",
    designation: "70.00 %",
    company: "2019",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "From Maharashtra State Board in D.P.Metha Junior College, Lonavla",
    name: "H.S.C",
    designation: "55.69 %",
    company: "2016",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "From Maharashtra State Board in Dr. B N Purandare vidyalay, Lonavla",
    name: "S.S.C",
    designation: "77.60 %",
    company: "2014",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Decentralize crowdfunding flatform",
    description:
      "A decentralized crowdfunding platform leverages blockchain technology to create a transparent, secure, and trustless ecosystem for fundraising. Unlike traditional crowdfunding platforms that rely on central authorities, a decentralized crowdfunding platform operates on a peer-to-peer network of participants, removing the need for intermediaries.",
    tags: [
      {
        name: "solidity ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "web3.0",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rohan1711/Decentralized_CrowdFunding_Platform",
  },
  {
    name: "Fake product identification using blockchain",
    description:
      `In an era where counterfeit products pose a significant threat to consumer safety and brand reputation, the "Fake Product Identification by QR Code using Blockchain" project emerges as a cutting-edge solution. Leveraging the transparency and security features of blockchain technology, this system aims to provide consumers and businesses with a reliable method to authenticate products and ensure their authenticity.`,
    tags: [
      {
        name: "solidity ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "truffle suite",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rohan1711/Fake-Product-Identification-using-Blockchain-",
  },
  {
    name: "Decentralize Drive",
    description:
      "Decentralized Drive is a type of storage solution built on a decentralized network powered by blockchain technology rather than depending on a single centralized organization. Instead of being stored on a single server managed by a single authority, data is preserved on multiple nodes in a decentralized network. As a result, there is an increase in security and dependability since the data is shared and protected from errors and other risks.",
    tags: [
      {
        name: "solidity ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "ipfs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rohan1711/Decentralized_Drive_3.0",
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/rohan-kakare-478729184',    
  },
  {
    name: 'GitHub',
    iconUrl: githubi,
    link: 'https://github.com/Rohan1711',
  },
  {
    name: 'Instagram',
      iconUrl: contact,
      link: 'https://www.instagram.com/rohankakare/?igsh=MzNlNGNkZWQ4Mg%3D%3D',
  }
];

export { services, technologies, experiences, testimonials, projects };
