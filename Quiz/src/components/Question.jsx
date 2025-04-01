import "./Question.css"
import { data } from "../data.js"
import { useState} from "react";
function Question (){
    const [setQuestion, isSetQuestion] = useState(0);
    const [optionSelected, setOptionSelected] =useState(null);
    const [result, setResult] = useState(null);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    
    const handleNext = ()=>{
        if(setQuestion < data.length-1){
            isSetQuestion(setQuestion+1);
            setOptionSelected(null);
            setResult(null);
        }
        else{
           setIsQuizCompleted(true);
        }
    };
    const handlePrevious = ()=>{
        if (setQuestion>=0){
            isSetQuestion(setQuestion-1);
        }
    }
    const handleChange = (event)=>{
        setOptionSelected(parseInt(event.target.value));
    }
    const handleSubmit = () =>{
        if (optionSelected === data[setQuestion].ans){
            setResult("Correct Answer! ✅ ");
            setCorrectAnswer(correctAnswer+1);
            
        }else{
            setResult("❌ Incorrect Answer");
        }
    }
    let currentQues = setQuestion+1;
    const question = data[setQuestion]
    const questionData = question.question;

    if (isQuizCompleted){
        return (
            <div className="quiz-complete">
                <h2>🎉 Quiz Completed!</h2>
                <p>SCORE : {correctAnswer}/5 </p>
            </div>
        );
    }
    return(
        <>
            <div className = "question">
                <h3> Q) {questionData}</h3>

                    <div className="options">
                        <ul>
                           {[question.option1, question.option2, question.option3, question.option4].map((option, i) =>(
                            <li key = {i}>
                                <input type = "radio" id = {`option${i}`} name = "answer" value = {i+1} checked = {optionSelected === i+1} onChange = {handleChange} />
                                <label htmlFor = {`option${i}`}>{option}</label>
                            </li>
                           ))}
                        </ul>
                    </div>
                    <div className = "btns">
                        <button onClick = {handlePrevious} disabled = {setQuestion === 0}>Previous</button>
                        <button onClick = {handleSubmit} disabled = {optionSelected === null}>Submit</button>
                        <button onClick = {handleNext} >{setQuestion === data.length-1?"Finish" : "Next"}</button>
                        
                    </div>
                    {result &&<p>{result}</p>}
                <p> Question: {currentQues}/5</p>
            </div>
                
        </>
    )
}

export default Question