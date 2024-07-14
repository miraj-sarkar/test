// ExampleComponent.js
import { fetchAllExamAnswerScripts } from "@/firebase/firestoreUtility";
import React, { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAllExamAnswerScripts();
        setScripts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>All Exam Answer Scripts</h1>
      <ul>
        {scripts.map((script, index) => (
          <li key={index}>{JSON.stringify(script)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
