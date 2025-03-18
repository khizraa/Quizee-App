import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mathslist from "./courses/Maths";
import physicslist from "./courses/Physics";
import chemistrylist from "./courses/Chemistry";
import "../styles/common.css";

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [marks, setMarks] = useState(0);
  const location = useLocation();
  const navigate = useNavigate(); 

  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    switch (category) {
      case "maths":
        setQuizData(mathslist);
        break;
      case "physics":
        setQuizData(physicslist);
        break;
      case "chemistry":
        setQuizData(chemistrylist);
        break;
      default:
        setQuizData([]);
    }
  }, [category]);

  function HandleValue(event, index) {
    setAnswers({
      ...answers,
      [index]: event.target.value,
    });
  }

  function marksHandling() {
    let score = 0;
    quizData.forEach((item, index) => {
      if (item.answer.toLowerCase() === (answers[index]?.toLowerCase() || "")) {
        score++;
      }
    });
  
    setMarks(score); 
    
    navigate(`/result?score=${score}&total=${quizData.length}`);
  }
  

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          style={{
            width: "900px",
            background: "rgba(223, 208, 234, 0.67)",
            boxShadow: "0px 0px 7px 6px rgba(199, 179, 215, 0.67)",
            borderRadius: "20px",
          }}
          className="m-5 p-5"
        >
          <h1 className="text-center text-purple" style={{ fontSize: "50px" }}>
            Start QUIZ
          </h1>
          {quizData.length > 0 ? (
            quizData.map((item, index) => (
              <div key={index}>
                <p style={{ fontSize: "25px" }}>{item.question}</p>
                <ul style={{ fontSize: "25px" }}>
                  <li>{item.option1}</li>
                  <li>{item.option2}</li>
                  <li>{item.option3}</li>
                </ul>
                <input
                  className="custom-input"
                  type="text"
                  value={answers[index] || ""}
                  onChange={(event) => HandleValue(event, index)}
                />
              </div>
            ))
          ) : (
            <p>No quiz available for this category.</p>
          )}
          {quizData.length >0 ? (
            <button className="btn bg-purple-blue mt-4" type="submit" onClick={marksHandling}>
            Submit
          </button>):
          (<button onClick={()=> navigate("/")}>Go to Home page</button>)}
          
        </div>
      </div>
    </>
  );
}

export default Quiz;
