import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";

import { Question, Answer } from "./models/QAModels.js";
import NavHeader from "./components/NavHeader";
import QuestionDescription from "./components/Description";
import Answers from "./components/Answers";

const myQuestion = new Question(1, "Is Javascript better than Python?", "luigi.derussis@polito.it", 1, "2026-03-30");

myQuestion.answers = [
  new Answer(1, "Yes, it is!", "luca.scibetta@polito.it", 2, "2026-03-30", 5),
  new Answer(2, "No, it isn't!", "mario.rossi@mail.it"  , 3, "2026-03-30", -2),
  new Answer(3, "It depends on the use case.", "claudia.bianchi@mail.it", 4, "2026-03-30", 0)
];

function App() {
  const [question, setQuestion] = useState(myQuestion);
  const [answers, setAnswers] = useState(myQuestion.answers);

  return (
    <>
      <NavHeader questionNum={question.id} />
      <Container fluid className="mt-3">
        <QuestionDescription question={question} />
        <Answers answers={answers} setAnswers={setAnswers} />
      </Container>
    </>
  )

}

export default App;
