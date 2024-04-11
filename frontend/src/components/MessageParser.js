class MessageParser {
  constructor(actionProvider,state) {
    this.actionProvider = actionProvider;
    this.state=state;
  }
  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    const careerKeywords = "jobs" || "job" || "career" || "career problems" || "career struggles"
    const familykeywords = "Family stress" || "family problems" || "family struggles" || "family depression";
    const earnkeywords = "earn" && "more money" && "short time"
    const expenseKeywords = "expenses" || "decrease"
    const saveMoney = "save" || "money"
    const debts = "decrease debts" && "debts" 
    const reduceStress = "reduce" || "financial stress"
    const increaseSalary = 'increase' && "salary"
    const incomePlan = 'plan' || "monthly income"
    const lowIncomePlan = 'survive' || "suffering" || 'low budget' || 'survive with low income' || 'budget' || "manage" || "home" || "low income" || "low expenses" 
    const businessPlan = 'suggest' || 'ideas' || ('give' || 'business ideas') || ('business' || 'earn money') || 'give business ideas'
    const recoverFinancial = "best ways" && "recover financial" && "financial" && "best way"

    if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("helo") || lowercase.includes("hii") ||
    lowercase.includes("hey")
    ) {
      this.actionProvider.greet();
    }
    else if (lowercase.indexOf(careerKeywords)!==-1){
       this.actionProvider.handleCareerProblems()
    }
    else if (lowercase.indexOf(familykeywords)!==-1){
      this.actionProvider.handleFamilyProblems()
   }
   else if(lowercase.indexOf(earnkeywords)!==-1){
          this.actionProvider.earnMoneyAction()
   }
   else if(lowercase.indexOf(expenseKeywords)!==-1){
    this.actionProvider.expensesAction()
}

else if(lowercase.indexOf(saveMoney)!==-1){
  this.actionProvider.saveMoneyAction()
}

else if(lowercase.indexOf(debts)!==-1){
  this.actionProvider.debtsAction()
}
else if(lowercase.indexOf(reduceStress)!==-1){
  this.actionProvider.reduceStressAction()
}

else if(lowercase.indexOf(increaseSalary)!==-1){
  this.actionProvider.increaseSalaryAction()
}
else if(lowercase.indexOf(incomePlan)!==-1){
  this.actionProvider.incomePlanAction()
}
else if(lowercase.indexOf(lowIncomePlan)!==-1){
  this.actionProvider.lowIncomePlanAction()
}
else if(lowercase.indexOf(businessPlan)!==-1){
  this.actionProvider.businessPlanAction()
}
else if(lowercase.indexOf(recoverFinancial)!==-1){
  this.actionProvider.recoverFinancialAction()
}



    else if (lowercase.includes("good afternoon")|| lowercase.includes("goodafternoon")){
        this.actionProvider.afternoon();

  }
  else if (lowercase.includes("good morning")|| lowercase.includes("goodmorning")){
        this.actionProvider.morning();

  }
  else if (lowercase.includes("good evening")|| lowercase.includes("goodevening")){
        this.actionProvider.evening();

  }
  else if (lowercase.includes("hru")|| lowercase.includes("howru")|| lowercase.includes("how are u")|| lowercase.includes("how are you")||lowercase.includes("how are you?")|| lowercase.includes("how r u?")|| lowercase.includes("hru?")|| lowercase.includes("howru?")){
    this.actionProvider.hru();

}
else if (lowercase.includes("good")|| lowercase.includes("fine") || lowercase.includes("superb")){
  this.actionProvider.fine();

}
else if (lowercase.includes("finance")|| lowercase.includes("finance problems") || lowercase.includes("financeproblems") ||lowercase.includes("financial")|| lowercase.includes("financial problems") || lowercase.includes("money")|| lowercase.includes("money problems") ){
  this.actionProvider.handleFinancialProblems();
}
else if (lowercase.includes("who are you?")|| lowercase.includes("wru?") || lowercase.includes("wru") || lowercase.includes("whoareyou?") || lowercase.includes("who are you")){
  this.actionProvider.wru();

}

else if (lowercase.includes("help")|| lowercase.includes("can you help me?") || lowercase.includes("will you do me a favour?") || lowercase.includes("could you do me a favour?") || lowercase.includes("will you do me a favour?")){
  this.actionProvider.help();

}
else if (lowercase.includes("exam")|| lowercase.includes("examstress") || lowercase.includes("exam stress") ||lowercase.includes("exam problem")|| lowercase.includes("examfear") || lowercase.includes("exam fear")|| lowercase.includes("fear of exam") ){
  this.actionProvider.handleExamStress();
}
else if (lowercase.includes("family problems")|| lowercase.includes("family stress") || lowercase.includes("familyproblem") ||lowercase.includes("family issue")|| lowercase.includes("family issue") || lowercase.includes("family")|| lowercase.includes("family problem") ){
  this.actionProvider.handleFamilyProblems();
}
else if (lowercase.includes("career")|| lowercase.includes("career problems") || lowercase.includes("careerproblem") ||lowercase.includes("career")|| lowercase.includes("job problem") || lowercase.includes("job")|| lowercase.includes("career problem") ){
  this.actionProvider.handleCareerProblems();
}

else if(lowercase.includes('')){
  this.actionProvider.spell()
}




}
}
export default MessageParser;