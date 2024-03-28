import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Financial Problems", handler: props.actionProvider.handleFinancialProblems, id: 1 },
    { text: "Exam stress", handler: props.actionProvider.handleExamStress, id: 2 },
    { text: "Family Problems", handler:props.actionProvider.handleFamilyProblems, id: 3 },
    { text: "Career Problems", handler:props.actionProvider.handleCareerProblems, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}
  </div>;
};

export default LearningOptions;