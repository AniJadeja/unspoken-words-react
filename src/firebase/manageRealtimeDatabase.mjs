// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage";
import { getCurrentPage, setCurrentPage } from "../utils/CommonPrefs.mjs";
import { HomePageModel } from "../models/HomeModel.js";
import AboutMeModel from "../models/AboutMeModel.js";

import { database, storage } from "./firebaseConfig.js";

function getCurrentPageDatabaseReference() {
  return ref(database, getCurrentPage()+'/');
}

function getCurrentPageStorageReference() {
  return storageRef(storage, getCurrentPage());
}

async function getDisplayPictureUrl() {
  const displayPictureStorageRef = getCurrentPageStorageReference() + "/displayPicture.png";

  return getDownloadURL(storageRef(storage, displayPictureStorageRef));
}

function writeCurrentPageData(data) {
  if ( getCurrentPage() === data.name ){
   // console.log("manageRealtimeDatabase => Writing current page data " + getCurrentPageDatabaseReference());
    const currentPageRef = getCurrentPageDatabaseReference();
    set(currentPageRef, {
      ...data
    });
  }
  else {
    throw new Error("Invalid page name");
  }
  
}

function  getCurrentPageData () {
  const currentPageRef = getCurrentPageDatabaseReference();

  return new Promise((resolve, reject) => {
    onValue(currentPageRef, (snapshot) => {
      const data = snapshot.val();
      if (data.name === "home") {
        getDisplayPictureUrl().then((url) => {
          data.displayPictureUrl = url;
        });
      }
      resolve(data);
    })
  });

}

function updateCurrentPageData(data) {
  const currentPageRef = getCurrentPageDatabaseReference();
  const currentPage = getCurrentPageData();
  set(currentPageRef, {
    ...currentPage,
    ...data,
  });
}


export { writeCurrentPageData, getCurrentPageData, updateCurrentPageData };











// const skills = {
//   androidSkills: [
//     "Java",
//     "Kotlin",
//     "Firebase",
//     "Retrofit",
//     "API calls"
//   ],
//   webDevelopmentSkills: [
//     "HTML5/CSS3",
//     "Java Script",
//     "React JS framework",
//     "Tailwind CSS",
//     "Material UI",
//     "Firebase",
//     "Mongo DB",
//     "Express JS",
//     "Node JS",
//     "API calls",
//     "API Building"
//   ],
//   uiuxSkills: [
//     "Figma",
//     "Adobe Xd",
//     "User Research",
//     "Mockup",
//     "Prototyping",
//     "Minimal Designs"
//   ],
//   otherSkills: [
//     "IOT",
//     "Machine Learning",
//     "Responsive Design",
//     "Code Management",
//     "MVC Architecture",
//     "Postman",
//     "Version Control",
//     "Git/GitHub",
//     "MVC/MVVM Architecture"
//   ],
//   personalSkills: [
//     "Teamwork",
//     "Communication",
//     "Critical Thinking",
//     "Time Management",
//     "Fast Learner",
//     "Adaptive"
//   ],
//   professionalSkills: [
//     "Team Leader",
//     "Collaboration",
//     "Problem Solving",
//     "Analyzing",
//     "Project Management",
//     "Decision Making"
//   ],
// };

// const education = {
//   primaryEducation: [
//     "Post Graduation Diploma(2023)",
//     "Mobile Solutions Development",
//     "Conestoga College Waterloo, Ontario"
//   ],
//   secondaryEducation: [
//     "Bachelor of Technology (2020)",
//     "Computer Science and Engineering",
//     "Parul University, Gujarat"
//   ],
// };

// const achievements = [
//   "Participant of Summer Camp in Programming at ITMO University, Russia.",
//   "Short listed for Innovation Challenge Covid-19 Final",
//   "Short listed for smart Gujarat hackathon",
//   "Nominated For Smart India Hackathon",
//   "Participant of Vadodara Hackathon",
//   "Participant of Gesture Control Robotics"
// ];
// const primaryInterests = "I am passionate about front-end web development, particularly UI/UX. With expertise in HTML, CSS, JavaScript, and front-end frameworks, I create visually appealing and user-friendly Websites and Android Applications. I stay updated on industry trends to contribute my skills to meaningful projects. My goal is to craft impactful digital solutions for positive user experiences.";
// const introParagraph = "Welcome to my digital playground, where pixels come to life and user experiences take center stage. A passionate front-end designer dedicated to crafting visually stunning and seamlessly functional websites. With a pixel-perfect eye for detail and a love for innovative design, I transform ideas into interactive digital journeys.";

// const AboutMeData = {
//   name: "aboutme",
//   introParagraph,
//   skills,
//   achievements,
//   primaryInterests,
//   education,
// };

// // setCurrentPage("aboutme");
// // const aboutMeModel = new AboutMeModel(AboutMeData);
// // console.log("manageRealtimeDatabase => Writing current page data " + getCurrentPageDatabaseReference());
// // writeCurrentPageData(aboutMeModel);


// // ************* HomePageModel  ************* //

// // setCurrentPage("aboutme");

// // const home = {
// //   displayPictureUrl: await getDisplayPictureUrl(),
// //   name: "home",
// //   role: "Web Developer",
// // };



// //const homePageModel = new HomePageModel(home);