import { ref, onValue, set, get } from "firebase/database";
import { getCurrentPage, setCurrentPage } from "../utils/CommonPrefs.mjs";
import { database } from "./firebaseConfig.js";


function getCurrentPageDatabaseReference() {
  return ref(database, getCurrentPage() + '/');
}

function getMessagesDatabaseReference(email) {
  return ref(database, getCurrentPage() + '/messages/' + email);
}

function writeCurrentPageData(data) {

  if (getCurrentPage() === data.name) {
    const currentPageRef = getCurrentPageDatabaseReference();
    set(currentPageRef, {
      ...data
    });
  }
  else {
    throw new Error("Invalid page name");
  }

}
function getCurrentPageData() {
  const currentPageRef = getCurrentPageDatabaseReference();

  return new Promise((resolve, reject) => {
    const onDataChange = (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    };

    const onError = (error) => {
      reject(error);
    };

    // Attach the listeners
    onValue(currentPageRef, onDataChange, onError);
  });
}

function updateCurrentPageData(data) {
  const currentPageRef = getCurrentPageDatabaseReference();
  const currentPage = getCurrentPageData();

  return new Promise((resolve, reject) => {
    set(currentPageRef, {
      ...currentPage,
      ...data,
    })
      .then(() => { resolve(); })
      .catch((error) => {
        reject(error);;
      })
  });


}


function sendMessage(data) {
  try {
    const messagesRef = getMessagesDatabaseReference(data.email.replace(/\./g, '_'));
    return(new Promise((resolve,reject)=>{
      set(messagesRef, {
        ...data
      }).then(() => {
        resolve("success");
      }).catch((error) => {
        reject(error);
      });
    }))
  } catch (error) {
    console.error("Error sending message:", error);
  }
}




export { writeCurrentPageData, getCurrentPageData, updateCurrentPageData,sendMessage };
