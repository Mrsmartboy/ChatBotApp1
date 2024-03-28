class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

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
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "financeProblems",
      }
    );

    this.addMessageToState(message);
  };

  handleExamStress=()=>{
    const message = this.createChatBotMessage(
      "Are You Feeling Stress?",
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