import React from 'react';
import './Home.css'
import StressCards from './StressCards';
import Header from './Header';
import ContactForm from './ContactForm';

const Stress = [
    {
        id:1,
        topic:'Financial Problems',
        imageUrl:'finance-image.jpg',
        description:'Financial problems encompass challenges such as debt, insufficient savings, and budgeting difficulties, leading to stress and insecurity. They often stem from unexpected expenses, job loss, or inadequate financial planning, requiring proactive measures like budgeting and seeking financial assistance. Addressing these issues is crucial for financial stability and well-being.',

    },
    {
        id:2,
        topic:'Exam Stress',
        imageUrl:'exam-image.jpg',
        description:'Exam problems entail stress, anxiety, and academic challenges, affecting students performance and well-being. Common issues include lack of preparation, test anxiety, and difficulty managing time effectively. Strategies for overcoming exam problems include effective study techniques, stress management, and seeking academic support.'
        
    },
    {
        id:3,
        topic:'family Problems',
        imageUrl:'family-image.jpg',
        description:'Family problems involve conflicts, communication breakdowns, and emotional strain within familial relationships. Common issues include disagreements, financial stressors, and parenting challenges. Resolving family problems often requires effective communication, empathy, and seeking professional guidance when necessary.',
        
    },
    {
        id:4,
        topic:'Career Problems',
        imageUrl:'career-image.jpg',
        description:'Job problems encompass challenges such as unemployment, dissatisfaction, and difficulty finding suitable employment. Factors contributing to job problems include economic downturns, lack of skills matching, and workplace conflicts.Coping strategies for managing career stress include setting boundaries, practicing self-care, and seeking support from colleagues or professionals.',
        
    }
    
]

const Home=()=>{
   

    return(
        <>
            <Header/>
         <div className='home-container'>
             <section className='data-container'>
                <h1 className='welcome'>Welcome to Remedy ChatBot</h1>
                <img src='yoga.jpg' alt="yoga" className='yoga-img'/>
             </section>
             <section className='section-2'>
                 <h1 className='section-2-head'>How Remedy ChatBot Helpful?</h1>
                 <p className='section-2-para'>
                 Remedy chatbots serve as indispensable allies for individuals contending with an array of challenges encompassing family problems, exam stress, financial hurdles, and career dilemmas. 
                 In the realm of family issues, these chatbots provide a confidential and non-judgmental platform where individuals can articulate their concerns and receive tailored advice on fostering better communication, resolving conflicts, and nurturing healthier relationships within their families. 
                 Amidst the pressures of academic life, remedy chatbots offer a lifeline to students grappling with exam stress, extending support through relaxation techniques, study strategies, and motivational encouragement to help them navigate their academic pursuits with greater resilience and confidence.
                  Moreover, in the domain of financial struggles, these chatbots offer invaluable assistance by furnishing users with budgeting tools, debt management guidance, and financial literacy resources, empowering them to chart a path toward financial stability and well-being. Lastly, in the realm of career challenges,
                   remedy chatbots serve as invaluable career coaches, offering career exploration resources, job search assistance, and professional development insights to individuals seeking guidance on career direction, job opportunities, and skill enhancement. Through personalized interactions and empathetic support,
                    remedy chatbots play a pivotal role in empowering individuals to surmount obstacles, attain personal growth, and achieve holistic well-being in various facets of their lives.

                 </p>
             </section>
             <section className='section-3'>
                <h1 className='section-2-head'> Services</h1>
            <ul className='list-container'>
                {Stress.map(eachItem=>
                    <StressCards key={eachItem.id} eachItem={eachItem}/>)}
            </ul>
             </section>
             <section className='section-4'>
             
                <div className='contact-description-1'>
                <h1 className='contact-head'>Contact Us</h1>
                 <p className='para-1'>
                 "If you haven't found the answers you're looking for in Remedy ChatBot for family problems, 
                 exam stress, career problems, or financial stress, don't worry. Our team is here to help you further. 
                 Please feel free to contact us directly, and we'll provide personalized assistance to address your concerns and guide you towards solutions that best suit your needs."

                 </p>
                
                 <p className='para-2'>"Don't hesitate to reach out to us via email, phone, or our support portal. 
                    Your well-being is our priority, and we're dedicated to supporting you every step of the way. 
                    Together, we'll work towards resolving your challenges and achieving positive outcomes"
                    </p>
                  
                    <p className='para-3'>
                    "Remember, you're not alone in facing these difficulties. 
                    Our team is here to lend a helping hand and provide the support you need to overcome obstacles and thrive. 
                    Reach out to us today, and let's embark on this journey towards greater well-being together."
                    </p>
                </div>
                <div className='contact-form-container'>
                <ContactForm/>
                </div>
         
             </section>
         </div>
        </>
    )

}

export default Home