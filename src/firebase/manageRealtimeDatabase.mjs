import {ref, onValue, set} from "firebase/database";
import { getCurrentPage, setCurrentPage } from "../utils/CommonPrefs.mjs";
import { database } from "./firebaseConfig.js";
import ProjectModel from "../models/ProjectModel.js";

function getCurrentPageDatabaseReference() {
  return ref(database, getCurrentPage()+'/');
}

function writeCurrentPageData(data) {
  console.log("data.name => " + data.name);
  
  if ( getCurrentPage() === data.name ){
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


// // ************* ProjectsModel  ************* //


// const project1 = {
//   name: 'Unspoken Words',
//   description: 'Project “Unspoken Words” is a portfolio website that represents my self to the best without meeting me. This website is a combination of my thoughts and ideology I follow, while keeping the information as minimal as possile. I designed this website to be a full scale project where this could have been a product itself. This project is connected with Google Firebase Realtime database to support the dynamic nature of the data. As I like to work on UI Design, I have created a perfect blend of my belief and learning. The aim of this project is to lead users to focus on who I am and what I can do without any distractions. This project engages users by providing necessary information with subtle animations to make it interesting enough.',
//   images: [
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Funspoken%20words%2Fproject-image-1.png?alt=media", 
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Funspoken%20words%2Fproject-image-2.png?alt=media", 
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Funspoken%20words%2Fproject-image-3.png?alt=media"
//   ],
//  // images: [UnspokenWordsHome, UnspokenWordsAvocations, UnspokenWordsResume],
//   technologies :[{
//     icon : "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Funspoken%20words%2Fproject-technology-1.svg?alt=media",
//     name : 'Firebase'
//   },{
//     icon : "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Funspoken%20words%2Fproject-technology-2.svg?alt=media",
//     name : 'React JS'
//   }],
//   features : ["User Centric", "Responsive", "Dynamic", "Minimalistic"],
//   isDarken : true
// }
// const project2 = {
//   name: 'Trip Wiz',
//   description: "Project 'Trip Wiz' represents my most ambitious endeavor, constantly evolving with an intuitive UI and a robust programmed server—indeed, a full-scale product. While the current version may not be feature-packed, it is in capable hands for incremental improvements. Designed for scalability, it possesses dynamic capabilities to stand alone as a product. Supported by a database and a variety of APIs, the server is coded in Node.js, a favored choice among developers for its simplicity. The project's goal is to furnish users with minimal data-required itineraries for their desired destinations. Users input Place, Dates, and expectations, processed by OpenAI, resulting in personalized itineraries. The frontend utilizes ReactJS, Redux, and axios, while the backend relies on Node.js, Express.js, Firebase authentication, Firebase database, Firebase Firestore, and the OpenAI API to facilitate seamless project operations.",
//   images: [
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-image-1.png?alt=media",
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-image-2.png?alt=media",
//     "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-image-3.png?alt=media"
//   ],
//   technologies :[{
//     icon : "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-technology-1.svg?alt=media",
//     name : 'Node JS'
//   },{
//     icon : "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-technology-2.svg?alt=media",
//     name : 'Open AI'
//   },
//   {
//     icon : "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/projects%2Ftrip%20wiz%2Fproject-technology-3.svg?alt=media",
//     name : 'React JS'
//   }

// ],
//   features : ["Full Scale Project", "Responsive", "Dynamic", "Scalable","Data Integration"],
//   isDarken : false
// }


// const projectModel = new ProjectModel(project1); 

// const projectModel2 = new ProjectModel(project2);
// const projects = [projectModel, projectModel2];
// const projectsData = {
//   name: "projects",
//   projects: projects
// };

// setCurrentPage("projects");

// const projectsModel = new ProjectsModel(projectsData);

//  console.log("manageRealtimeDatabase => Writing current page data " + getCurrentPageDatabaseReference());
//  writeCurrentPageData(projectsModel);

