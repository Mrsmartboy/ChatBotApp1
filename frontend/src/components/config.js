import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from './LearningOptions'
import Finance from "./Finance";
import ExamStress from './ExamStress'
import FamilyProblems from './FamilyProblems'
import CareerProblems from  './CareerProblems'
const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. How can I help You`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "financeProblems",
      widgetFunc: (props) => <Finance {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "ExamStress",
      widgetFunc: (props) => <ExamStress {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "FamilyProblems",
      widgetFunc: (props) => <FamilyProblems {...props} />,
      props: {
        questions: [
          
          {
            answer:"Communication: Try to communicate openly and honestly with your family members about the issues you're facing. Express your thoughts, feelings, and concerns in a calm and respectful manner.",
            id:1,
          },
          {
            answer:"Listen: Be willing to listen to the perspectives and feelings of other family members. Practice active listening and try to understand their point of view, even if you disagree.",
            id:2,

          },
          {
            answer:"Seek Support: Consider seeking support from trusted friends, relatives, or a therapist who can offer guidance, perspective, and emotional support during difficult times.",
            id:3,
          },
          {
            answer:"Seek Professional Help: If the family issues are complex or deeply rooted, consider seeking help from a family therapist or counselor who can facilitate constructive communication and provide guidance on resolving conflicts.",
            id:4,
          },
          {
            answer:" Focus on Self-Care: Take care of yourself physically, emotionally, and mentally. Engage in activities that bring you joy, relaxation, and fulfillment. Prioritize self-care to maintain your resilience and well-being during challenging times.",
            id:5,
          },
          {
            answer:" Seek Resolution: Work together with your family members to find solutions to the issues at hand. Be open to compromise and negotiation, and focus on finding mutually beneficial outcomes.",
            id:6,
          },
          {
            answer:"Practice Forgiveness: Forgiveness can be a powerful tool for healing and moving forward in family relationships. Practice forgiveness, both for yourself and for others, to release resentment and foster healing.",
            id:7,
          }
         
        ],
      },
    },
    {
      widgetName: "CareerProblems",
      widgetFunc: (props) => <CareerProblems {...props} />,
      props: {
        questions: [
          
          {
            answer:"Identify the Problem: Reflect on what aspect of your career is causing you difficulty. Is it dissatisfaction with your current job, uncertainty about your career path, lack of opportunities for growth, or something else.",
            id:1,
          },
          {
            answer:"Assess Your Skills and Interests Take some time to evaluate your skills, strengths, and interests. Consider what you enjoy doing, what youre good at, and what you value in a career. ",
            id:2,

          },
          {
            answer:"Set Clear Goals: Define specific, achievable goals for your career. Where do you see yourself in the short term (1-2 years) and the long term (5-10 years)? Having clear goals can provide direction and motivation.",
            id:3,
          },
          {
            answer:"Explore Options: Research different career paths, industries, and job opportunities that align with your skills, interests, and goals. Networking with professionals in your desired field can also provide valuable insights and connections.",
            id:4,
          },
          {
            answer:"Upskill or Re-skill: Consider acquiring new skills or further developing existing ones to enhance your competitiveness in the job market. This could involve taking courses, obtaining certifications, or pursuing advanced degrees.",
            id:5,
          },
          {
            answer:"Seek Guidance: Dont hesitate to seek advice and support from career counselors, mentors, or trusted colleagues. They can offer valuable perspectives, guidance, and resources to help you navigate your career challenges.",
            id:6,
          },
          {
            answer:"Stay Flexible and Open-Minded: Be willing to adapt and explore alternative paths if necessary. Sometimes unexpected opportunities or changes in circumstances can lead to new and fulfilling career directions. 8.Take Action: Once you've identified potential solutions, take proactive steps towards implementing them. This might involve updating your resume, applying for new jobs, scheduling informational interviews, or making other strategic moves to advance your career. Remember that navigating career challenges often requires patience, persistence, and resilience. Be kind to yourself during this process and celebrate small victories along the way.",
            id:7,
          }
         
        ],
      },
    }
  ],
};

export default config;