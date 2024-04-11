class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  earnMoneyAction=()=>{
    const message = this.createChatBotMessage("Do you want to earn more money in short time there are manys ways like Bussiness, Job, Freelancing, or seeking opportunities for career adavancement or additional training.");
    this.addMessageToState(message);
  }

  expensesAction = () => {
    const message = this.createChatBotMessage(" To decrease the expenses first create budget plan,consider the only necessary purchase and aviod unecessary things to purchase.what ever you are using like electricity, water use limited.");
    this.addMessageToState(message);
  };

  saveMoneyAction = () => {
    const message = this.createChatBotMessage("There are so many ways to save money.First see where your money going and stop buying unnecessary things. Give someportion of house to rent for additional income.Save the money in bank. Give the money for debts to gain the interest.");
    this.addMessageToState(message);
  };

  
  debtsAction = () => {
    const message = this.createChatBotMessage(" To decrease the debts keep some amount of money aside to use for emergency purpose. Decrease the unnecessary expenses. Aviod taking debts.");
    this.addMessageToState(message);
  };

  reduceStressAction = () => {
    const message = this.createChatBotMessage("We cannot feel stress when there is sufficent money in the hands.so try to save money. Try to Earn more income. Try to maintain emergency fund for unexpected expenses then you can relax when there is the need.    ");
    this.addMessageToState(message);
  };

  increaseSalaryAction = () => {
    const message = this.createChatBotMessage(" To increase your salary try to develop your standard of thinking level,gain more knowledge, improve the skills.Be more active in work. Try to finish the office work in the time.    ");
    this.addMessageToState(message);
  };

  incomePlanAction  = () => {
    const message = this.createChatBotMessage(" For the best budget plan first calculate your montly icome divide the income into 2 basis first part for fixed expenses and second part for savings.");
    this.addMessageToState(message);
  };

  lowIncomePlanAction= () => {
    const message = this.createChatBotMessage("Create a detailed budget plan to the expenses and prioitize essential needs like rent, utilities, and groceries.stop the unnecessary things to purchase.    ");
    this.addMessageToState(message);
  };

  businessPlanAction = () => {
    const message = this.createChatBotMessage(" There are many types of business to earn money they are online reselling, freelancing services, tutoring,pet services, preparing handmade crafts,set up Teashops, Bookstalls etc...    ");
    this.addMessageToState(message);
  };
  
  recoverFinancialAction= () => {
    const message = this.createChatBotMessage(" To recover financially reduce the expenses, Try to increase income, Try to gain addittional income by setting up small bussiness or give some portion of house for rent.");
    this.addMessageToState(message);
  };


  greet = () => {
    const message = this.createChatBotMessage("Hello friend. How are you?");
    this.addMessageToState(message);
  };



  morning=()=>{
    const message = this.createChatBotMessage("Hello,Good Morning");
    this.addMessageToState(message);
  }
  afternoon=()=>{
    const message = this.createChatBotMessage("Hello,Good Afternoon");
    this.addMessageToState(message);
  }
  evening=()=>{
    const message = this.createChatBotMessage("Hello,Good Evening");
    this.addMessageToState(message);
  }
  
  hru=()=>{
    const message = this.createChatBotMessage("I am chatbot? I don't have Feelings! What about You?");
    this.addMessageToState(message);
  }

  fine=()=>{
    const message = this.createChatBotMessage("That's Good to Know");
    this.addMessageToState(message);
  }

  wru=()=>{
    const message = this.createChatBotMessage(`Hello. I am remedy Chatbot,select one of the fields`, {
      widget: "options",
    })
    this.addMessageToState(message);
  }

  help=()=>{
    const message = this.createChatBotMessage(`Sure, can I know what you are facing`, {
      widget: "options",
    })
    this.addMessageToState(message);
  }

  spell =()=>{
    const message = this.createChatBotMessage(`Ask Related Query,Based on Options`, {
      widget: "options",
    })
    this.addMessageToState(message);

  }



  handleFinancialProblems = () => {
    const message = this.createChatBotMessage(
      "To recover financially reduce the expenses, Try to increase income, Try to gain addittional income by setting up small bussiness or give some portion of house for rent",
      {
        widget: "financeProblems",
      }
    );

    this.addMessageToState(message);
  };

  handleExamStress=()=>{
    const message = this.createChatBotMessage(
      "Sure, here are some brief suggestions for managing exam stress:",
      {
        widget: "ExamStress",
      }
    );

    this.addMessageToState(message);
  }

  handleFamilyProblems=()=>{
    const message = this.createChatBotMessage(
      "I'm sorry to hear that you're facing family problems.here are a few steps to consider it.",
      {
        widget: "FamilyProblems",
      }
    );

    this.addMessageToState(message);
  }

  handleCareerProblems=()=>{
    const message = this.createChatBotMessage(
      "If you're facing a career problem, here are a few steps you could consider to address it",
      {
        widget: "CareerProblems",
      }
    );

    this.addMessageToState(message);
  }



  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;