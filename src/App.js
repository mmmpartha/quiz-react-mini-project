import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from "react"
import question from './question';

function App() {
  const [quesindex, setQuesindex] = useState(0)
  const [marks, setMarks] = useState(0)
  const [showmarks, setShowmarks] = useState(false)
  const ctquestion = question[quesindex]

  const compare = (index) => {
    if (ctquestion.answer === index) {
      setMarks(marks + 1)
    }
    const next = quesindex + 1;
    if (next < question.length) {
      setQuesindex(quesindex + 1)
    } else {
      setShowmarks(true)
    }
  }
  return (
    <div className="container">
      {
        showmarks ? <><h1>Finally Your Mark is :{marks}</h1></> :
          <>
            <div className="question">
              <h1>{ctquestion.question}</h1>
              <div className="option">
                <ul className="ullist">
                  {
                    ctquestion.option.map((el, index) => {
                      return (
                        <>
                        <Button variant="contained" color="success" onClick={() => compare(index)}>{el}</Button>
                        </>
                      )
                    })}
                </ul>
              </div>
            </div>
          </>
      }

    </div>
  );
}

export default App;