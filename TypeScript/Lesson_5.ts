// Object to store survey answers
let surveyResponses: { [questionId: string]: any } = {}
// Function to record an answer
function recordAnswer(questionId: string, answer: any): void {
  surveyResponses[questionId] = answer
}

// Recording different types of answers
recordAnswer("Q1", "Yes");                     // string answer
recordAnswer("Q2", 5);                         // number answer
recordAnswer("Q3", ["Option A", "Option B"]);  // array answer

// Printing all recorded answers
console.log("Survey Responses:")

for (let questionId in surveyResponses) {
  console.log(questionId, "=>", surveyResponses[questionId]);
}
    