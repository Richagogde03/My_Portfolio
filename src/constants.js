// Skill section logo

import html_logo from "./assets/tech-logo/html.png";
import css_logo from "./assets/tech-logo/css.png";
import js_logo from './assets/tech-logo/javascript.png';
import cpp_logo from './assets/tech-logo/cpp.png';
import java_logo from './assets/tech-logo/java.png'
import react_logo from './assets/tech-logo/reactjs.png'
import acertinity_logo from './assets/tech-logo/acertinity-logo.png';
import mysql_logo from './assets/tech-logo/mysql.png';
import mongo_logo from './assets/tech-logo/mongodb.png';
import notion_logo from './assets/tech-logo/Notion_app_logo.png';
import node_logo from './assets/tech-logo/nodejs.png';
import vercel_logo from './assets/tech-logo/vercel.png';
import bi_logo from './assets/tech-logo/Power_BI_Logo.svg.png';
import git_logo from './assets/tech-logo/git.png';
import github_logo from './assets/tech-logo/github.png';
import python_logo from './assets/tech-logo/python.png';
import vs_logo from './assets/tech-logo/vscode.png';
import tailwind_logo from './assets/tech-logo/tailwindcss.png';
import nextjs_logo from './assets/tech-logo/nextjs.png';


// project section logo
import weather_app from './assets/project-logo/weather-app.PNG';
import todo_list from './assets/project-logo/to-do-list.PNG';
import tic_tac_toe from './assets/project-logo/tic-tac-toe.PNG';
import venai from './assets/project-logo/venai.png';
import edusphere from './assets/project-logo/edusphere.PNG';
import login_signup from './assets/project-logo/login-signup.PNG';
import perfect_planners from './assets/project-logo/perfect-planners.PNG';
import rock_paper_scissor from './assets/project-logo/rock-paper-scissor.PNG';


// educational section logo 
import acropolis_logo from './assets/educational-logo/acropolis-logo.jpeg';
import school_logo from './assets/educational-logo/school-logo.jpeg';

export const SkillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: 'HTML', logo: html_logo},
            { name: 'CSS', logo: css_logo},
            { name: 'JavaScript', logo: js_logo},
            { name: 'React JS', logo: react_logo},
            { name: 'Tailwind CSS', logo: tailwind_logo},
            { name: 'Next JS', logo: nextjs_logo},
            { name: 'Acertinity UI', logo: acertinity_logo}
        ]
    },
    {
        title: 'Backend',
        skills:[
            { name: "MySQL", logo: mysql_logo},
            { name: "MongoDB", logo: mongo_logo},
            { name: "Node JS", logo: node_logo}
        ]
    },
    {
        title: 'Languages',
        skills: [
            { name: "C++", logo: cpp_logo},
            { name: "Java", logo: java_logo},
            { name: "Python", logo: python_logo},
            { name: "Javascript", logo: js_logo},
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: 'Git', logo: git_logo},
            { name: 'Github', logo: github_logo},
            { name: 'VS Code', logo: vs_logo},
            { name: 'Vercel', logo:vercel_logo},
            { name: 'Power BI', logo:bi_logo},
            { name: 'Notion', logo: notion_logo}
        ]
    }
]


export const projects = [
    {
        id: 0,
        title: "EduSphere",
        description: "EduSphere is a modern and responsive college website designed to showcase academic programs, testimonials, offered courses, and contact details etc. It provides a clean and intuitive interface for students and visitors to explore the institution’s offerings.",
        image: edusphere,
        tags: ["HTML", "CSS", "Javascript", "ReactsJS", "API", "Vite"],
        github: "https://github.com/Richagogde03/EduSphere",
        liveLink: "https://richagogde03.github.io/EduSphere/"
    },
    {
        id: 1,
        title: "venAi",
        description: "VenAi is a modern and interactive landing page for an AI-powered assistant, designed to resemble platforms like Google Gemini. It highlights key features, intelligent capabilities, and offers a clean, user-friendly interface for a seamless user experience.",
        image: venai,
        tags: ["HTML", "CSS", "Javascript", "API"],
        github: "https://github.com/Richagogde03/VenAi",
        liveLink: "https://richagogde03.github.io/VenAi/"
    },
    {
        id: 2,
        title: "Perfect Planners",
        description: "Perfect Planners is an event planning website built using MERN stack. Users can book appointments to plan different types of events such as weddings, corporate events, and engagement etc.",
        image: perfect_planners,
        tags: ["ReactJS", "NodeJS", "MongoDB", "Express", "HTML", "CSS", "Javascript", "Vercel"],
        github: "https://github.com/Richagogde03/MERN_PROJECT_EVENT_PLANNER",
        liveLink: "https://mern-project-event-planner-v9sw-ec3m84scz-richa-gogdes-projects.vercel.app/"
    },
    {
        id: 3,
        title: "Tic-Tac-Toe",
        description: "A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Play against a friend on the same device with an intuitive UI and smooth gameplay.",
        image: tic_tac_toe,
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/Richagogde03/tic-tac-toe",
        liveLink: "https://richagogde03.github.io/tic-tac-toe/"
    },
    {
        id:4,
        title: "Weather-App",
        description: "Weather App is a simple and intuitive web application that allows users to check real-time weather conditions for any city. It displays temperature, humidity, and weather descriptions, offering a clean and responsive user interface.",
        image: weather_app,
        tags: ["HTML", "CSS", "Javascript", "ReactJS","API", "Vite"],
        github: "https://github.com/Richagogde03/Weather_App/tree/main/weather-app",
        liveLink: "https://richagogde03.github.io/Weather_App/"
    },
    {
        id:5,
        title: "Login-Signup-Page",
        description: "Login-Signup is a simple and user-friendly authentication interface that allows users to register and log in securely. It features a clean UI with basic form validations, ideal for integration into larger web applications.",
        image: login_signup,
        tags: ["HTML", "CSS", "Javascript", "ReactJS"],
        github: "https://github.com/Richagogde03/Login-Signup",
        liveLink: "https://richagogde03.github.io/Login-Signup/"
    },
    {
        id:6,
        title: "To-Do List",
        description: "Todo App is a task management tool that allows users to add, update, and delete tasks in an organized way. It offers a simple and intuitive interface to help users stay productive and manage their daily to-dos efficiently.",
        image: todo_list,
        tags: ["HTML", "CSS", "Javascript", "ReactJS", "Vite"],
        github: "https://github.com/Richagogde03/Todo-App",
        liveLink: "https://richagogde03.github.io/Todo-App/"
    },
    {
        id:7,
        title: "Rock-Paper-Scissor Game",
        description: "Rock Paper Scissors is a fun and interactive game where users can play against the computer. It features real-time result display, basic game logic, and an engaging UI to simulate the classic hand game digitally.",
        image: rock_paper_scissor,
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/Richagogde03/rock_paper_scissor",
        liveLink: "https://richagogde03.github.io/rock_paper_scissor/"
    }
]

export const education = [
    {
        id: 0,
        img: acropolis_logo,
        college: "Acropolis Institute of Technology and Research, indore",
        date: "Oct 2021 - June 2025",
        grade: "7.59 CGPA",
        desc: "I have Completed my Bachelor's degree (B.Tech) in Computer Science from AITR, Indore. During my time at AITR,  I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Object-Oriented Programming, Database Management Systems, Data Structure and Algorithm, Computer Networking and Software Engineering etc. My experience at AITR has been instrumental in shaping my technical abilities and professional growth. ",
        degree: "Bachelor of Technology - B.Tech",
    },
    {
        id: 1,
        img: school_logo,
        school: "Shri K.B. Patel Gujrati Girls H.Sc. School, Indore",
        date: "April 2019 - March 2020",
        grade: "79.6%",
        desc: "I completed my class 12 education from Gujrati Girls school, Indore. Where i studied physics, chemitry and Mathematics(PCM) with Computer Science.",
        degree: "XII - PCM"
    },
    {
        id: 2,
        img: school_logo,
        school: "Shri K.B. Patel Gujrati Girls H.Sc. School, Indore",
        date: "Apr 2017 - March 2018",
        grade: "81.8%",
        desc: "I completed my class 10 education from Gujrati Girls school",
        degree: "X"
    }
]
