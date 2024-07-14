import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyBjUARFeqTd_SaVXHKVLGwpebsFAN5HS8Q",
  authDomain: "guinea-pig-react.firebaseapp.com",
  projectId: "guinea-pig-react",
  storageBucket: "guinea-pig-react.appspot.com",
  messagingSenderId: "221567595117",
  appId: "1:221567595117:web:64d236d0ee48d7a910c564",
};

if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

const firestore = firebase.firestore();

firestore.enablePersistence().catch((err) => {
  if (err.code === "failed-precondition") {
    console.log(err);
  } else {
    console.log(err);
  }
});

export default firebase;
export const fireStoreDB = firestore;

export const allExamAnswerScript = fireStoreDB
  .collection("ExamSystem")
  .doc("allExamAnswerScript")
  .collection("allExamAnswerScript");

export const fetchAllExamAnswerScripts = async () => {
  try {
    const snapshot = await allExamAnswerScript.get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.error("Error fetching exam answer scripts:", error);
    throw error;
  }
};
