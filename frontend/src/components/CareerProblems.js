import './CareerProblems.css'

const CareerProblems=(props)=>{

    const questions = props.questions
    //const data = questions.map(eachItem=>(eachItem.answer))

     return (
       <ol className='list-container-career'>
        {questions.map(eachItem=>(
          <li className="career-list-items">{eachItem.answer} <br/></li>
        ))}
       </ol>
   
   
     )

}

export default CareerProblems