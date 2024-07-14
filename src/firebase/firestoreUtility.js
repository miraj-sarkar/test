// firestoreUtils.js
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

const allExamAnswerScriptCollection = collection(
  firestore,
  "ExamSystem/allExamAnswerScript/allExamAnswerScript"
);

export const fetchAllExamAnswerScripts = async () => {
  try {
    const snapshot = await getDocs(allExamAnswerScriptCollection);
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.error("Error fetching exam answer scripts:", error);
    throw error;
  }
};
