

const ExamStress = (props) => {

    const questions = props.questions
    // const data = questions.map(eachItem=>(eachItem.question))
   
     return (
       <ul>
         {questions.map(eachItem=>(
           <li key={eachItem.id}>{eachItem.question}</li>
         ))}
       </ul>
   
   
     )
    
    };
    
    export default ExamStress;