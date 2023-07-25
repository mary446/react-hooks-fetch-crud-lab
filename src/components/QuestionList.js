import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
function QuestionList() {
    const [questions, setQuestionsItem] = useState([]);
  
      // Update state by passing the array of items to setItems  
    useEffect(() => {
      fetch("http://localhost:4000/questions")
        .then((r) => r.json())
        .then((questions) => setQuestionsItem(questions));
    }, []);
    function handleAddQuestion(newQuestion){
      setQuestionsItem([...questions, newQuestion])
    }
  
  return (
    <section>
       <QuestionForm onAddQuestion={handleAddQuestion} />
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
         <li key={question.id}>{question.prompt}</li>
        ))}</ul>
    </section>
  );
}

export default QuestionList;
