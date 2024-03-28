import './FamilyProblems.css'

const FamilyProblems=(props)=>{
    const questions = props.questions
  
    // const data = questions.map(eachItem=>(eachItem.question))
     return (
       <ol className="list-container">
         {questions.map(eachItem=>(
           <li key={eachItem.id} className="family-list-items">{eachItem.answer}</li>
         ))}
       </ol>
   
   
     )

}

export default FamilyProblems