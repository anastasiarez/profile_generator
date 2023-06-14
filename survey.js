/**
When all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.

Example: 

Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

 */

//USED CHATGPT TO LEARN HOW TO DO THIS EXERCISE. 

//This code sets up a basic interaction with the user using the readline module in Node.js
//The code starts by requiring the readline module, which provides an interface for reading input from the user.
//Next, an instance (object) of the readline.Interface is created by calling the createInterface method and providing it with the process.stdin stream as the input and process.stdout stream as the output.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//array of questions

const profileQuestions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

//object for user profile info

const userProfile = {};

//We define a function askQuestion that takes an index parameter representing the current question being asked. Inside the function, we check if we have asked all the questions by comparing the questionIndex with the length of profileQuestions.

//If we have asked all the questions, we generate the user's profile by accessing the stored answers from the userProfile object. We construct the profile string using template literals and display it to the user using console.log(). Then we close the readline.Interface by calling rl.close() to exit the program.

const askQuestion = (questionIndex) => {
  if (questionIndex >= profileQuestions.length) {

    const profile = `${userProfile.name} loves ${userProfile.activity}, listens to ${userProfile.music} while doing that, prefers ${userProfile.meal} for ${userProfile.mealTime}, enjoys eating ${userProfile.favoriteFood}, likes ${userProfile.favoriteSport}, and is amazing at ${userProfile.superpower}.`;

    console.log(profile);
    rl.close();
    return;
  }

  //If we haven't asked all the questions yet, we use rl.question() to ask the current question to the user. The question is retrieved from the profileQuestions array using the questionIndex.

  //When the user provides an answer, the callback function (answer) => { ... } is executed. Inside this callback, we store the user's answer in the userProfile object by accessing the appropriate field based on the questionIndex.

  //After storing the answer, we recursively call askQuestion() with the next question index (questionIndex + 1) to ask the next question.
  
  //We define a helper function getProfileField that maps the question index to the corresponding field name in the userProfile object. This function is used to access the appropriate field when storing the user's answer.

  rl.question(profileQuestions[questionIndex] + ' ', (answer) => {
    userProfile[getProfileField(questionIndex)] = answer;

    askQuestion(questionIndex + 1);
  });
};

const getProfileField = (index) => {
  switch (index) {
    case 0:
      return 'name';
    case 1:
      return 'activity';
    case 2:
      return 'music';
    case 3:
      return 'mealTime';
    case 4:
      return 'favoriteFood';
    case 5:
      return 'favoriteSport';
    case 6:
      return 'superpower';
    default:
      return '';
  }
};

askQuestion(0);

//Finally, we call askQuestion(0) to start the process of asking the questions. We pass 0 as the initial question index.