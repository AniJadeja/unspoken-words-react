import {ref, onValue, set} from "firebase/database";
import { getCurrentPage, setCurrentPage } from "../utils/CommonPrefs.mjs";
import { database } from "./firebaseConfig.js";



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


// // ************* AvocationsModel  ************* //


// const imagesObj = {
//   img1: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg1.png?alt=media",
//     alt: 'showcase img-1',
//     style: {
//       objectFit: 'cover',
//       width: '552px',
//       height: '189px'
//     }
//   },
//   img2: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg2.png?alt=media",
//     alt: 'showcase img-2',
//     style: {
//       objectFit: 'cover',
//       width: '374px',
//       height: '189px'
//     }
//   },
//   img3: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg3.png?alt=media",
//     alt: 'showcase img-3',
//     style: {
//       objectFit: 'cover',
//       width: '129px',
//       height: '189px '
//     }
//   },
//   img4: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg4.png?alt=media",
//     alt: 'showcase img-4',
//     style: {
//       objectFit: 'cover',
//       width: '374px',
//       height: '189px'
//     }
//   },
//   img5: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg5.png?alt=media",
//     alt: 'showcase img-5',
//     style: {
//       objectFit: 'cover',
//       width: '420px',
//       height: '189px'
//     }
//   },
//   img6: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fphotography%20photos%2Fimg6.png?alt=media",
//     alt: 'showcase img-6',
//     style: {
//       objectFit: 'cover',
//       width: '250px',
//       height: '189px'
//     }
//   }
// }


// const imagesObj2 = {

//   img1: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-1.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-1',
//     style: {
//       width: '335px',
//       height: '189px'
//     }
//   },
//   img2: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-2.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-2',
//     style: {
//       width: '287px',
//       height: '189px'
//     }
//   },
//   img3: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-3.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-3',
//     style: {
//       width: '336px',
//       height: '189px'
//     }
//   },
//   img4: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-4.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-4',
//     style: {
//       width: '348px',
//       height: '189px' 
//     }
//   },
//   img5: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-5.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-5',
//     style: {
//       width: '337px',
//       height: '189px'
//     }
//   },
//   img6: {
//     src: "https://firebasestorage.googleapis.com/v0/b/unspoken-words-r.appspot.com/o/avocations%2Fpoetry%20photos%2Flines-6.png?alt=media&token=ad6d98c9-8e5d-40a2-a9c7-241053735ad0",
//     alt: 'showcase img-6',
//     style: {
//       width: '336px',
//       height: '189px'
//     }
//   }
// }




// const avocations = {
//   name: 'avocations',
//   introParagraph: 'A person’s interests can change drastically with time and it can affect his/her personality as well. One thing remains the same. No matter the person’s situation is, they always have some dreams and that dreams provides the backbone for developing different hobbies. Here are my hobbies which I am proud to have.',
//   photographyPara: "Photography is one of the key factor in my life. Photos are the illustration or the combination of the colors which explains the same thing to everyone without needing to explain it. A saying 'A picture is worth a thousand words' is the best example for this comes to my mind.",
//   photographyImages: imagesObj,
//   poetryPara: "Poetry is one of those arts which is very hard to understand. Understanding words and carefully arranging them is an art. Sometimes some lines conveys deepest meaning of life and that is a true art. I am not a poet but I love to read and write poetry. So, this work is a collection of my favorite lines which I have written or have collected from different sources.",
//   poetryImages: imagesObj2
// }



//   setCurrentPage("avocations");

//   const projectsModel = new AvocationsModel(avocations);

//   console.log("manageRealtimeDatabase => Writing current page data " + getCurrentPageDatabaseReference());
//   writeCurrentPageData(projectsModel);

