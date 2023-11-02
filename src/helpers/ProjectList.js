import bagelwebsite from "../assets/bagelwebsite.png";
import javaGame from "../assets/javaGame.png";
import teamProject from "../assets/teamProject.png";
import footbalManager from "../assets/footballManager.png";
import aLevel from '../assets/aLevel.png';
import grades from '../assets/grades.png';

export const ProjectList = [
  {
    name: "Bagel Website",
    image: bagelwebsite,
    skills: "ReactJS,JavaScript,HTML,CSS",
    link: "https://github.com/jamieleegordon/bagel-website",
    webpage: "https://jamieleegordon.github.io/bagel-website/",
    webpageName: "Bagel Website",
    description: "(Currently not responsive on mobile) this is my first ReactJS project where I put all the fundamentals and basics which I have learnt together to create a food website. I used tools and library such as Router-DOM.",
  },
  {
    name: "Team Project - Air Ticket System",
    image: teamProject,
    skills: "Java, NetBeans, UML, SQL",
    link: "https://github.com/jamieleegordon/TeamProjectATS",
    description: "Worked as a project manager and lead software engineer in a university group project where we had to develop a system which manages tickets for an airline. Fully developed in Java and used Net Beans to design and generate the UI in Java Swing. SQL Database used for storing, reading and writing data into this application such as login and ticket stock data",
  },
  {
    name: "Java Game - Football heads",
    image: javaGame,
    skills: "Java, game engines",
    link: "https://github.com/jamieleegordon/JavaGame",
    description: "For my first year at university, I was tasked with creating a fully functional game using Java. I created a two-player football game with multiple levels and graphics such as powerups and stadiums etc. I also used a game engine which was provided by the university which allowed me to easily implement game physics such as the ball bouncing or players being able to move. (See mp4 video in GitHub repo to view a game demonstration)",
  },
  {
    name: "Student Grades Application",
    image: grades,
    skills: "C++",
    link: "https://github.com/jamieleegordon/gradesApp",
    description: "I have created a teacher - student grades application in C++ which uses file handling techniques to allow features such as login and reading and writing grades into the system. The grading system allows for teachers to assign grades to students including deleting and changing grades, and for students to be able to view any grades which their teacher has assigned to them.",
  },
  {
    name: "A Level Coursework - Diary/notes App",
    image: aLevel,
    skills: "Python",
    link: "https://github.com/jamieleegordon/aLevelCoursework",
    description: "For my A Levels, I developed a diary/notes application using Python and the Tkinter library to create the UI. This is my first ever programming project and has given me goof foresight into aspects of software development such as analysis, design, implementation and testing.",
  },
  {
    name: "Football Manager Simulation Game",
    image: footbalManager,
    skills: "C++",
    link: "https://github.com/jamieleegordon/footballManager",
    description: "I have created a football simulation text game using C++ where you can select a team and play in a tournament style competition against the computer by simulating results.",
  },
];