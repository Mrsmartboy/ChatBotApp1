import './Exam.css'


const ExamStress = (props) => {

    const questions = props.questions
    // const data = questions.map(eachItem=>(eachItem.question))
   
     return (
       <ol className="list-container-exam">
         {questions.map(eachItem=>(
           <li key={eachItem.id} className="exam-list-items">{eachItem.answer}</li>
         ))}
       </ol>
   
   
     )
    
    };
    
    export default ExamStress;