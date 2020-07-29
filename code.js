/* 

	Tarun Haridasan, Brian Ly, Alex Sun

	2019-05-28

	Hollywood Tic Tac Toe

	Code.js file, where all the code essential for the game is stored

*/

//Variable Declaration

let box=[

["~","~","~"],

["~","~","~"],

["~","~","~"]

];

let symbolSelected="";

let aiSymbol="";

let symbol="";

let questionNumber=0;

let aiCorrect="";

let choiceAChecked;

let choiceBChecked;

let choiceCChecked;

let choiceDChecked;

let requestBox="";

let boxClicked="";

let questionType="";

let correctChances=4;

let questionsCorrect=0;

let questionsTotal=0;

let boxWin1="";

let boxWin2="";

let boxWin3="";

let writtenAnswer;

let startDate;

let endDate;

let questionRange=58;

let name="";

let aiNames=["John", "Bob", "Brian", "Tarun", "Alex", "Raj", "Tim", "Jimmy", "Schmo", "Scotch"];

//Questions, choices and answer bank

let questionBank=[

	//Multi choice Questions

	{

		question:"Which of the following is a Canadian invention?",

		choiceA:"Television",

		choiceB:"Computer",

		choiceC:"Dental Floss",

		choiceD:"Gun",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"Why does a man sitting in a moving bus suddenly move forward when the bus stops?",

		choiceA:"Brakes",

		choiceB:"Inertia",

		choiceC:"Negative acceleration",

		choiceD:"Air pushing against you",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"Who was the first scientist that explained gravity and motion?",

		choiceA:"Isaac Newton",

		choiceB:"Albert Einstein",

		choiceC:"Ben Franklin",

		choiceD:"Thomas Edison",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"How long is one day on planet Earth?",

		choiceA:"24 hours",

		choiceB:"23 hours and 57 minutes",

		choiceC:"23 hours and 56 minutes",

		choiceD:"24 hours and 2 minutes",

		correctAnswer: "c",

		type:"multiChoice"

	},

	{

		question:"A man pushed his car past a hotel, only to realize he was bankrupt. How did he figure this out? (He did not have his wallet on him, or in the car)",

		choiceA:"He was mugged as drove into the parking lot",

		choiceB:"He was playing a board game",

		choiceC:"His pockets were empty",

		choiceD:"There was a text alert",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"The dead bodies of Bob and Ann are lying on the floor. They are naked and wet. Their bodies have absolutely no cuts, and the windows are open to the house they live in. How did they die?",

		choiceA:"Struck by lightning",

		choiceB:"Poisoned",

		choiceC:"Natural Death",

		choiceD:"They aren't human",

		correctAnswer: "d",

		type:"multiChoice"

	},

	{

		question:"A man is going to a party. Along the way, he finds seven cats. Each of the cats have seven kittens. Each of the kittens have seven toys. How many people are going to the party?",

		choiceA:"1",

		choiceB:"0",

		choiceC:"16,807",

		choiceD:"9",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"If there are 1,000,000,000 bricks on a plane, and one falls off, how many are left?",

		choiceA:"999,999,999",

		choiceB:"1,000,000,000",

		choiceC:"3749875",

		choiceD:"1",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"Ray's mom has 10 children. Their names are One, Two, Three, Four, Five, Six, Seven, Eight, and Nine. Who is the tenth child?",

		choiceA:"Ten",

		choiceB:"Tenth",

		choiceC:"Billy",

		choiceD:"Ray",

		correctAnswer: "d",

		type:"multiChoice"

	},

	{

		question:"Last night, Jeff was dead in his house. The suspects are his wife, his cook, and his maid. The wife said she was asleep, the cook said she was baking, and the maid said was cleaning. The wife also said she saw the cook kill Jeff. Who killed Jeff?",

		choiceA:"Cook",

		choiceB:"Wife",

		choiceC:"Maid",

		choiceD:"He suicided",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"Which word is spelled incorrectly?",

		choiceA:"Friendlily",

		choiceB:"Expedition",

		choiceC:"Mississipi",

		choiceD:"Incorrectly",

		correctAnswer: "c",

		type:"multiChoice"

	},

	{

		question:"Before Mt. Everest, the tallest mountain, was discovered, what was the tallest mountain in the world?",

		choiceA:"Mt. Everest",

		choiceB:"Mt. K2",

		choiceC:"Mt. Lhotse",

		choiceD:"Mt. Kilimanjaro",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"A hunter leaves his cabin early in the morning and walks one mile due south. Here he sees a bear and starts chasing it for one mile due east before he is able to shoot the bear. After shooting the bear, he drags it one mile due north back to his cabin where he started that morning. What color is the bear?",

		choiceA:"Black",

		choiceB:"Brown",

		choiceC:"White",

		choiceD:"Gray",

		correctAnswer: "c",

		type:"multiChoice"

	},

	{

		question:"Which gas is required for photosynthesis?",

		choiceA:"Oxygen",

		choiceB:"Carbon dioxide",

		choiceC:"Hydrogen",

		choiceD:"Carbon Monoxide",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"What type of energy is needed for photosynthesis to happen?",

		choiceA:"Light",

		choiceB:"Heat",

		choiceC:"Electrical",

		choiceD:"Sand",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"Currently, which political party takes up the most seats in the House of Commons?",

		choiceA:"Liberals",

		choiceB:"NDP",

		choiceC:"Green Party",

		choiceD:"Conservatives",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"What is the name for elements that lie on the left side of the periodic table?",

		choiceA:"Non-metals",

		choiceB:"Metals",

		choiceC:"Noble gas",

		choiceD:"Transition metals",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"Which property is described by the statement: Aluminum can be bent into various shapes?",

		choiceA:"Density",

		choiceB:"Malleability",

		choiceC:"Hardness",

		choiceD:"Viscosity",

		correctAnswer: "b",

		type:"multiChoice"

	},

	{

		question:"Which of the following describes a chemical property?",

		choiceA:"Mercury is a liquid at room temperature.",

		choiceB:"You slide across the side walk as you step on an earthworm.",

		choiceC:"Aluminum is malleable.",

		choiceD:"Water is clear.",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"Which of the following properties of sugar is not a physical property?",

		choiceA:"Sugar turns black when it is heated.",

		choiceB:"Sugar dissolves readily in water.",

		choiceC:"Sugar has a sweet taste.",

		choiceD:"Sugar is a white solid at room temperature.",

		correctAnswer: "a",

		type:"multiChoice"

	},

	{

		question:"How many teeth do normal adults have?",

		choiceA:"30",

		choiceB:"31",

		choiceC:"32",

		choiceD:"33",

		correctAnswer: "c",

		type:"multiChoice"

	},

	{

		question:"What is 2 divided by 0",

		choiceA:"2",

		choiceB:"0",

		choiceC:"-2",

		choiceD:"Not possible",

		correctAnswer: "d",

		type:"multiChoice"

	},

	/* Note to Mr. Krnic: We chose not to use select boxes because we cannot change the colors of specific options, which means we cannot show the user which option was correct (green) and which option was wrong (red). Instead of select boxes, we used input fields as they have a variety of styling options */

	//Input Field Questions

	{

		question:" The average of first 50 natural numbers is ____",

		correctAnswer: '25.5',

		type:"inputField"

	},

	{

		question:"50% of 6 is equal to ______",

		correctAnswer: '3',

		type:"inputField"

	},

	{

		question:"Abhay has 6 apples and Dhruv has 10 Apples. How much apples will Tarun have if Abhay gives Dhurv 33% of his apples, and the remaining to Tarun?",

		correctAnswer: '4',

		type:"inputField"

	},

	{

		question:"800 is 10 times as much as",

		correctAnswer: '80',

		type:"inputField"

	},

	{

		question:"How many days are in February",

		correctAnswer: '28',

		type:"inputField"

	},

	{

		question:"What is 666+66+6",

		correctAnswer: '738',

		type:"inputField"

	},

	{

		question:"What is the cube root of 27",

		correctAnswer: '3',

		type:"inputField"

	},

	{

		question:"How many pairs of chromosomes does a human have",

		correctAnswer: '23',

		type:"inputField"

	},

	{

		question:"How many keys are on a full keyboard?",

		correctAnswer: "104",

		type:"inputField"

	},

	{

		question:"How many letters are there in the English alphabet",

		correctAnswer: "26",

		type:"inputField"

	},

	{

		question:"What is 6 - (-3)",

		correctAnswer: "9",

		type:"inputField"

	},

	{

		question:"What is 3 + (-3)",

		correctAnswer: "0",

		type:"inputField"

	},

	{

		question:"What is 13 X 13",

		correctAnswer: "169",

		type:"inputField"

	},

	{

		question:"What is 11 X 8",

		correctAnswer: "88",

		type:"inputField"

	},

	{

		question:"What is (7 X 8)/2",

		correctAnswer: "28",

		type:"inputField"

	},

	{

		question:"What is 3 to the power of 3",

		correctAnswer: "27",

		type:"inputField"

	},

	//Check box Questions

	{

		question:"Which of the following choices are countries?",

		choiceA:"Africa",

		choiceB:"Canada",

		choiceC:"United States",

		choiceD:"Asia",

		correctAnswer: "b,c",

		answerA: false,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Which of the following numbers are greater than -6?",

		choiceA:"7",

		choiceB:"-1",

		choiceC:"0",

		choiceD:"-7",

		correctAnswer: "a,b,c",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Which of the following options are false?",

		choiceA:"Donkey kill more people than airplanes.",

		choiceB:"The polar bear population is rapidly decreasing.",

		choiceC:"Donald Trump Jr. is the president of the USA.",

		choiceD:"The creator of Apple is the son of Bill Gates.",

		correctAnswer: "c,d",

		answerA: false,

		answerB: false,

		answerC: true,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Which of the following choice are square roots of 25?",

		choiceA:"-5",

		choiceB:"5",

		choiceC:"0",

		choiceD:"None of the above",

		correctAnswer: "a,b",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Which of the following choice are square roots of -25?",

		choiceA:"-5",

		choiceB:"5",

		choiceC:"0",

		choiceD:"None of the above",

		correctAnswer: "d",

		answerA: false,

		answerB: false,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Which of the are real words?",

		choiceA:"otorhinolaryngological",

		choiceB:"pneumoencephalographically",

		choiceC:"pseudopseudohypoparathyroidism",

		choiceD:"psuedonomantricphysicothyrodism",

		correctAnswer: "a,b,c",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Which of the following choices are evidences of chemical change?",

		choiceA:"Hard to reverse",

		choiceB:"Colour change",

		choiceC:"Production of heat, gas, or sound",

		choiceD:"A precipitate forms",

		correctAnswer: "a,b,c,d",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Select all that apply for the following statement: A person sitting in a moving car has __ energies.",

		choiceA:"Kinetic",

		choiceB:"Potential",

		choiceC:"Elastic",

		choiceD:"Gravitational",

		correctAnswer: "a,b,d",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Which of the following are true about the element HELIUM?",

		choiceA:"When inhaled, it makes your voice high pitched",

		choiceB:"Has an atomic number of 2",

		choiceC:"It's chemical symbol is 'H'",

		choiceD:"It has an atomic mass of around 4",

		correctAnswer: "a,b,d",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Select all that are true.",

		choiceA:"Butterflies taste with their hind feet",

		choiceB:"India has a Bill of Rights for cows",

		choiceC:"40,000 Americans are injured by toilets each year",

		choiceD:"Blood is red mainly because of the various chemicals in your blood",

		correctAnswer: "a,b,c",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Select the organs that are part of the digestive system.",

		choiceA:"Mouth",

		choiceB:"Gallbladder",

		choiceC:"Diaphragm",

		choiceD:"Salivary Glands",

		correctAnswer: "a,b,d",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Select the organs that are part of the respiratory system.",

		choiceA:"Bronchus",

		choiceB:"Ribs",

		choiceC:"Diaphragm",

		choiceD:"Liver",

		correctAnswer: "a,b,c",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Select all that is true about the human heart",

		choiceA:"Consists of 4 chambers",

		choiceB:"The heart's only job is to send blood to other body parts",

		choiceC:"Has 2 ventricles and 2 atrium",

		choiceD:"Consists of 2 chambers",

		correctAnswer: "a,c",

		answerA: true,

		answerB: false,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Select all that is true about the human brain",

		choiceA:"It comprises 60% of fat and is one of the fattest organs in the human body.",

		choiceB:"Human brain has the capacity to generate approximately 23 watts of power when awake.",

		choiceC:"Of the total blood and oxygen that is produced in our body, the brain gets 5% of it",

		choiceD:"There is 1 billion neurons present in the brain.",

		correctAnswer: "a,b",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: false,

		type: "checkBox"

	},

	{

		question:"Select the factors that make 30.",

		choiceA:"15, 2",

		choiceB:"5, 6",

		choiceC:"10, 20",

		choiceD:"1, 30",

		correctAnswer: "a,b,d",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},

	{

		question:"Select all the prime numbers.",

		choiceA:"2",

		choiceB:"5",

		choiceC:"7",

		choiceD:"9",

		correctAnswer: "a,b,c",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},	

	{

		question:"Select all the odd numbers.",

		choiceA:"0",

		choiceB:"2",

		choiceC:"3",

		choiceD:"4",

		correctAnswer: "c",

		answerA: false,

		answerB: false,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},	

	{

		question:"Select all the words that mean the same.",

		choiceA:"Hard",

		choiceB:"Pliant",

		choiceC:"Firm",

		choiceD:"Flexible",

		correctAnswer: "a,c",

		answerA: true,

		answerB: false,

		answerC: true,

		answerD: false,

		type: "checkBox"

	},	

	{

		question:"Which word CANNOT be used to fill in the blank: This is ____ blanket",

		choiceA:"There",

		choiceB:"They're",

		choiceC:"Their",

		choiceD:"Them",

		correctAnswer: "a,b,d",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: true,

		type: "checkBox"

	},	

	{

		question:"Select all Canadian inventions",

		choiceA:"Pablum",

		choiceB:"Television",

		choiceC:"Telephone",

		choiceD:"Basketball",

		correctAnswer: "a,b,c,d",

		answerA: true,

		answerB: true,

		answerC: true,

		answerD: true,

		type: "checkBox"

	},	

	{

		question:"Select all Chinese inventions",

		choiceA:"Gunpowder",

		choiceB:"Compass",

		choiceC:"Telephone",

		choiceD:"Computer",

		correctAnswer: "a,b",

		answerA: true,

		answerB: true,

		answerC: false,

		answerD: false,

		type: "checkBox"

	},	

];

//Below is the function used to check if answer entered is correct, by referring back to the question bank's .correctAnswer object

function checkAnswer(boxRequested) 

{

	//If question is multi choice, it will check if the box clicked matches the correct answer

	if (questionType=="multiChoice") 

	{	

		//Disabled buttons temporarily

		$("#radChoiceA").prop("disabled", 1);

		$("#radChoiceB").prop("disabled", 1);

		$("#radChoiceC").prop("disabled", 1);

		$("#radChoiceD").prop("disabled", 1);

		//Determine user inputs, and the correct answer

		answer=questionBank[questionNumber].correctAnswer;

		choiceAChecked=$("#radChoiceA").prop("checked");

		choiceBChecked=$("#radChoiceB").prop("checked");

		choiceCChecked=$("#radChoiceC").prop("checked");

		choiceDChecked=$("#radChoiceD").prop("checked");

		//Checks if correct answer is a

		if (answer=="a") 

		{	

			//Indicates which options were correct

			$("#choiceA").css({"background-color": "green"});

			$("#choiceB").css({"background-color": "red"});

			$("#choiceC").css({"background-color": "red"});

			$("#choiceD").css({"background-color": "red"});

			//If user also entered "a", the appropriate symbol will be placed and message will be displayed

			if (choiceAChecked==true) 

			{	

				questionsCorrect++;		

				$(boxRequested).replaceWith(symbolSelected);	

				update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");

				console.log(questionsCorrect);

				alert("You got the question correct!");

				return true;

			}

			else 

			{

				alert("You got the question wrong!");

				return false;

			}

		}

		//Checks if correct answer is b

		else if(answer=="b")

		{

			//Indicates which options were correct

			$("#choiceA").css({"background-color": "red"});

			$("#choiceB").css({"background-color": "green"});

			$("#choiceC").css({"background-color": "red"});

			$("#choiceD").css({"background-color": "red"});

			//If user also entered "b", the appropriate symbol will be placed

			if (choiceBChecked==true) 

			{	

				questionsCorrect++;				

				$(boxRequested).replaceWith(symbolSelected);

				update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");

				console.log(questionsCorrect);				

				alert("You got the question correct!");

				return true;

			}

			else 

			{

				alert("You got the question wrong!");

				return false;

			}

		}

		//Checks if correct answer is c

		else if(answer=="c")

		{

			//Indicates which options were correct

			$("#choiceA").css({"background-color": "red"});

			$("#choiceB").css({"background-color": "red"});

			$("#choiceC").css({"background-color": "green"});

			$("#choiceD").css({"background-color": "red"});

			//If user also entered "c", the appropriate symbol will be placed

			if (choiceCChecked==true) 

			{

				questionsCorrect++;		

				$(boxRequested).replaceWith(symbolSelected);		

				update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");

				console.log(questionsCorrect);			

				alert("You got the question correct!");	

				return true;

			}

			else 

			{

				alert("You got the question wrong!");

				return false;

			}

		}

		//Checks if correct answer is d

		else if(answer=="d")

		{

			//Indicates which options were correct

			$("#choiceA").css({"background-color": "red"});

			$("#choiceB").css({"background-color": "red"});

			$("#choiceC").css({"background-color": "red"});

			$("#choiceD").css({"background-color": "green"});

			//If user also entered "c", the appropriate symbol will be placed

			if (choiceDChecked==true) 

			{	

				questionsCorrect++;		

				$(boxRequested).replaceWith(symbolSelected);	

				update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");

				console.log(questionsCorrect);		

				alert("You got the question correct!");		

				return true;

			}

			else 

			{

				alert("You got the question wrong!");

				return false;

			}

		}

		//If nothing was correct, it will return false, and nothing will happen

		else 

		{

			alert("You got the question wrong!");

			return false;

		}

	}

	//If the question that is generated is an input field question, it will check if what you typed matches the answer

	else if(questionType=="inputField") 

	{

		$("#txtAnswer").prop("disabled", 1);

		answer=questionBank[questionNumber].correctAnswer;

		writtenAnswer=$("#txtAnswer").val();

		//If correct, symbol will be placed and box will appear green

		if (writtenAnswer==answer) 

		{

			$("#txtAnswer").css({"background-color": "green"});

			questionsCorrect++;

			$(boxRequested).replaceWith(symbolSelected);

			update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");

			console.log(questionsCorrect);			

			alert("You got the question correct!");

			return true;

		}

		//If incorrect, nothing no symbol will be placed and box will appear red

		else 

		{

			$("#txtAnswer").css({"background-color": "red"});

			alert("You got the question wrong!");

			return false;

		}

	}

	//If the questions that is generated consists of check boxes (Multiple Answers), it will check if ALL checked boxes checked matches the answer

	else if (questionType=="checkBox") 

	{

		//Checks which boxes are checked

		choiceAChecked=$("#chkCheckBoxA").prop("checked");

		choiceBChecked=$("#chkCheckBoxB").prop("checked");

		choiceCChecked=$("#chkCheckBoxC").prop("checked");

		choiceDChecked=$("#chkCheckBoxD").prop("checked");

		//Disable the check boxes to prevent changing of answers

		$("#chkCheckBoxA").prop("disabled", 1);

		$("#chkCheckBoxB").prop("disabled", 1);

		$("#chkCheckBoxC").prop("disabled", 1);

		$("#chkCheckBoxD").prop("disabled", 1);

		//Change the color of the correct and wrong answers

		if (questionBank[questionNumber].answerA==true) 

		{

			$("#checkBoxChoiceA").css({"background-color": "green"});

		}

		else 

		{

			$("#checkBoxChoiceA").css({"background-color": "red"});

		}

		if (questionBank[questionNumber].answerB==true) 

		{

			$("#checkBoxChoiceB").css({"background-color": "green"});

		}

		else 

		{

			$("#checkBoxChoiceB").css({"background-color": "red"});

		}

		if (questionBank[questionNumber].answerC==true) 

		{

			$("#checkBoxChoiceC").css({"background-color": "green"});

		}

		else 

		{

			$("#checkBoxChoiceC").css({"background-color": "red"});

		}

		if (questionBank[questionNumber].answerD==true) 

		{

			$("#checkBoxChoiceD").css({"background-color": "green"});

		}

		else 

		{

			$("#checkBoxChoiceD").css({"background-color": "red"});

		}

		//Check if check boxes checked matches with the answer

		if(choiceAChecked==questionBank[questionNumber].answerA && choiceBChecked==questionBank[questionNumber].answerB && choiceCChecked==questionBank[questionNumber].answerC && choiceDChecked==questionBank[questionNumber].answerD) 

		{

			questionsCorrect++;

			$(boxRequested).replaceWith(symbolSelected);

			update(getBoxCoords(requestBox)[0],getBoxCoords(requestBox)[1], "x");			

			console.log(questionsCorrect);			

			alert("You got the question correct!");

			return true;

		}

		else 

		{

			alert("You got the question wrong!");

			return false;

		}

	}

}//End of CheckAnswer function

//Below is the function that determines how long you took, how many questions you answered, got correct, wrong, etc

function gameSummary() 

{

	endDate = new Date();

	$("#gameSummary").css({"display":"block"});

	$("#lblTime").text("Time Elapsed: "+ (Math.round((endDate-startDate)/1000)) +" seconds");

	$("#lblQuestionsCorrect").text("Questions Correct: "+ questionsCorrect);

	$("#lblQuestionsWrong").text("Questions Wrong: "+ (questionsTotal-questionsCorrect));

	$("#lblQuestionsTotal").text("Total Questions: "+ questionsTotal);

} //End of gameSummary function

//Below is the function that picks a random question from the question bank, and displays it to the user

function requestQuestion ()

{

	questionsTotal++;

	//Reset all CSS properties when moving on to the next question

	$("#choiceA").css({'background-color': ''});

	$("#choiceB").css({'background-color': ''});

	$("#choiceC").css({'background-color': ''});

	$("#choiceD").css({'background-color': ''});

	$("#txtAnswer").css({"display": "none"});

	$("#choices").css({"dis play": "none"});

	$("#checkBoxQuestions").css({"display": "none"});

	//Chose a random question from the question bank array

	questionNumber=Math.round(Math.random()*questionRange);

	console.log(questionNumber);

	//Decide what type of question it is(multi choice, input field, check boxes)

	questionType=questionBank[questionNumber].type;

	//If the question is multi choice, it will display radio buttons.

	if(questionType=="multiChoice") 

	{

		$("#lblQuestion").text(questionBank[questionNumber].question);	

		$("#lblChoiceA").text(questionBank[questionNumber].choiceA);

		$("#lblChoiceB").text(questionBank[questionNumber].choiceB);

		$("#lblChoiceC").text(questionBank[questionNumber].choiceC);

		$("#lblChoiceD").text(questionBank[questionNumber].choiceD);

		$("#choices").fadeIn(1000);

		$("#choices").css({"display": "block"});		

	}

	//If question is an input field question, it will display the input field.

	else if(questionType=="inputField") 

	{

		$("#lblQuestion").text(questionBank[questionNumber].question);	

		$("#txtAnswer").slideDown("slow");

		$("#txtAnswer").css({"display": "block"});

	}

	//If question is a check box question, it will display the check boxes.

	else if(questionType=="checkBox") 

	{

		$("#lblQuestion").text(questionBank[questionNumber].question);	

		$("#lblCheckBoxChoiceA").text(questionBank[questionNumber].choiceA);

		$("#lblCheckBoxChoiceB").text(questionBank[questionNumber].choiceB);

		$("#lblCheckBoxChoiceC").text(questionBank[questionNumber].choiceC);

		$("#lblCheckBoxChoiceD").text(questionBank[questionNumber].choiceD);

		$("#checkBoxQuestions").slideDown("slow");

		$("#checkBoxQuestions").css({"display": "block"});

	}		

}//End of requestQuestion function

//Below is the function that updates the database of symbols placed , so that the user/AI cannot place multiple symbols on 1 box

function update(x,y,type)

{

	box[y][x]=type;

	$("#btnBox"+(y*3+x+1)).prop("disabled",true)

	$("#btnBox"+(y*3+x+1)).text(box[y][x]);

	checkWin(type);

}//End of update function

//Function that lets user know whether they win or lose

function displayWin() 

{

	//Tells computer first box to flash and change colors of, when the winning combination is achieved

	if (boxWin1=="0,0") 

	{

		boxWin1="#box1";

	}

	else if (boxWin1=="0,1") 

	{

		boxWin1="#box2";

	}

	else if (boxWin1=="0,2") 

	{

		boxWin1="#box3";

	}

	else if (boxWin1=="1,0") 

	{

		boxWin1="#box4";

	}

	else if (boxWin1=="1,1") 

	{

		boxWin1="#box5";

	}

	else if (boxWin1=="1,2") 

	{

		boxWin1="#box6";

	}

	else if (boxWin1=="2,0") 

	{

		boxWin1="#box7";

	}

	else if (boxWin1=="2,1") 

	{

		boxWin1="#box8";

	}

	else if (boxWin1=="2,2") 

	{	

		boxWin1="#box9";

	}

	//Tells computer second box to flash and change colors of, when the winning combination is achieved

	if (boxWin2=="0,0") 

	{

		boxWin2="#box1";

	}

	else if (boxWin2=="0,1") 

	{

		boxWin2="#box2";

	}

	else if (boxWin2=="0,2") 

	{

		boxWin2="#box3";

	}

	else if (boxWin2=="1,0") 

	{

		boxWin2="#box4";

	}

	else if (boxWin2=="1,1") 

	{

		boxWin2="#box5";

	}

	else if (boxWin2=="1,2") 

	{

		boxWin2="#box6";

	}

	else if (boxWin2=="2,0") 

	{

		boxWin2="#box7";

	}

	else if (boxWin2=="2,1") 

	{

		boxWin2="#box8";

	}

	else if (boxWin2=="2,2") 

	{	

		boxWin2="#box9";

	}

	//Tells computer third box to flash and change colors of, when the winning combination is achieved

	if (boxWin3=="0,0") 

	{

		boxWin3="#box1";

	}

	else if (boxWin3=="0,1") 

	{

		boxWin3="#box2";

	}

	else if (boxWin3=="0,2") 

	{

		boxWin3="#box3";

	}

	else if (boxWin3=="1,0") 

	{

		boxWin3="#box4";

	}

	else if (boxWin3=="1,1") 

	{

		boxWin3="#box5";

	}

	else if (boxWin3=="1,2") 

	{

		boxWin3="#box6";

	}

	else if (boxWin3=="2,0") 

	{

		boxWin3="#box7";

	}

	else if (boxWin3=="2,1") 

	{

		boxWin3="#box8";

	}

	else if (boxWin3=="2,2") 

	{	

		boxWin3="#box9";

	}

	//Add blinking and RGB animations to the winning combination

	$(boxWin1).addClass("blink");

	$(boxWin2).addClass("blink");

	$(boxWin3).addClass("blink");

	//Display which player wins by displaying the correct GIF (winner or loser) relative to what symbol you picked in the beginning

	if ($(boxWin2+' img').attr('src')=="images/oMark.png" && symbolSelected=="<img src='images/oMark.png' width='245px' height='245px'>") 

	{

		$("#questionBoard").replaceWith("<img id='endGameImage' src='animations/winner.gif'>");

		$("#instructions").remove();

	}

	else if ($(boxWin2+' img').attr('src')=="images/oMark.png" && symbolSelected=="<img src='images/xMark.png' width='245px' height='245px'>") 

	{

		$("#questionBoard").replaceWith("<img id='endGameImage' src='animations/loser.gif'>");

		$("#instructions").remove();

	} 

	else if ($(boxWin2+' img').attr('src')=="images/xMark.png" && symbolSelected=="<img src='images/xMark.png' width='245px' height='245px'>") 

	{

		$("#questionBoard").replaceWith("<img id='endGameImage' src='animations/winner.gif'>");

		$("#instructions").remove();

	}

	else if ($(boxWin2+' img').attr('src')=="images/xMark.png" && symbolSelected=="<img src='images/oMark.png' width='245px' height='245px'>") 

	{

		$("#questionBoard").replaceWith("<img id='endGameImage' src='animations/loser.gif'>");

		$("#instructions").remove();

	}	

	//Remove the buttons when game ends, so further moves cannot be played

	$("#btnBox1").remove();

	$("#btnBox2").remove();

	$("#btnBox3").remove();

	$("#btnBox4").remove();

	$("#btnBox5").remove();

	$("#btnBox6").remove();

	$("#btnBox7").remove();

	$("#btnBox8").remove();

	$("#btnBox9").remove();

	//Show game statistics and summary

	gameSummary();

}//End of displayWin function

//Below is the function that checks for 3 symbols in a row to know when someone has won

function checkWin(type)

{

	let tempReturn=[];

	//Checks for horizontal 3-in-a-rows

	for(x=0;x<3;x++)

	{

		for(y=0;y<3;y++)

		{

			if(box[y][x]==type)

			{

				tempReturn[y]=[y,x];

				if(y==2)

				{

					boxWin1=(tempReturn.toString()).substring(0,3);

					boxWin2=(tempReturn.toString()).substring(4,7);

					boxWin3=(tempReturn.toString()).substring(8,11);

					displayWin();

					return tempReturn;

				}

			}

			else

			{

				break;

			}

		}

	}

	//Checks for vertical 3-in-a-rows

	for(y=0;y<3;y++)

	{

		for(x=0;x<3;x++)

		{

			if(box[y][x]==type)

			{

				tempReturn[x]=[y,x];

				if(x==2)

				{

					boxWin1=(tempReturn.toString()).substring(0,3);

					boxWin2=(tempReturn.toString()).substring(4,7);

					boxWin3=(tempReturn.toString()).substring(8,11);

					displayWin();

					return tempReturn;					

				}

			}

			else

			{

				break;

			}

		}

	}

	//Checks for top-left to bottom-right 3-in-a-rows (diagonals)

	if(box[0][0]==type&&box[1][1]==type&&box[2][2]==type)

	{

		boxWin1="0,0";

		boxWin2="1,1";

		boxWin3="2,2";

		displayWin();

		return [[0,0],[1,1],[2,2]];	

	}

	//Checks for bottom-left to top-right 3-in-a-rows (diagonals)

	if(box[0][2]==type&&box[1][1]==type&&box[2][0]==type)

	{

		boxWin1="0,2";

		boxWin2="1,1";

		boxWin3="2,0";

		displayWin();

		return [[0,2],[1,1],[2,0]];

	}

	//Checks if all boxes on the board is taken, and indicates tie

	let tie=1;

	for(i=0; i<3; i++) 

	{

		for(n=0; n<3; n++) 

		{

			if (box[i][n]=="~") 

			{

				tie=0;

			}

		}

	}

	if (tie==1) 

	{

		$("#questionBoard").replaceWith("<img id='endGameImage' src='animations/tie.gif'>");

		gameSummary();

		return [-1];

	}

}//End of checkWin function

//The function below converts HTML box ids into arrays, which allows the location of boxes to be expressed as coordinates (easier for computer to process)

function getBoxCoords(box)

{

	let boxNumber = box.charAt(6);

	let returnCoords = [(boxNumber-1)%3,Math.floor((boxNumber-1)/3)];

	return returnCoords;

}//End of getBoxCoords Function

//Below is a random number generator to determine whether the AI gets the next question correct

function aiTurn () 

{

	if (Math.round(1+Math.random()*9)>correctChances) 

	{

		alert("AI "+aiName+" got the question correct!");

		return true

	}

	else

	{

		alert("AI "+aiName+" got the question wrong!");

		return false;

	}

}//End of aiTurn function

//Function that makes the AI 'smart' by blocking other players, rigging traps, and trying to win

function getPriority()

{

	let possibleSpot=[];

	let xtaken=0;

	let otaken=0;

	//Winning horizontally

	for(x=0;x<3;x++)

	{

		for(y=0;y<3;y++)

		{

			if(box[y][x]=="o")

			{

				otaken++;

			}

			else if(box[y][x]=="x")

			{

				xtaken++;

			}

			else if(box[y][x]=="~")

			{

				possibleSpot=[y,x];

			}

		}

		if(otaken==2&&xtaken==0)

		{

			return possibleSpot;

		}

		else if(xtaken==2&&otaken==0)

		{

			return possibleSpot;

		}

		otaken=0;

		xtaken=0;

	}

	//Winning vertically

	for(y=0;y<3;y++)

	{

		for(x=0;x<3;x++)

		{

			if(box[y][x]=="~")

			{

				possibleSpot=[y,x];

			}

			else if(box[y][x]=="o")

			{

				otaken++;

			}

			else if(box[y][x]=="x")

			{

				xtaken++;

			}

		}

		if(otaken==2&&xtaken==0)

		{

			return possibleSpot;

		}

		else if(xtaken==2&&otaken==0)

		{

			return possibleSpot;

		}

		otaken=0;

		xtaken=0;

	}

	//Winning bottom-left to top-right (diagonal)

	if(box[0][0]=="o")

	{

		otaken++;

	}

	else if(box[0][0]=="x")

	{

		xtaken++;

	}

	else if(box[0][0]=="~")

	{

		possibleSpot=[0,0];

	}

	if(box[1][1]=="o")

	{

		otaken++;

	}

	else if(box[1][1]=="x")

	{

		xtaken++;

	}

	else if(box[1][1]=="~")

	{

		possibleSpot=[1,1];

	}

	if(box[2][2]=="o")

	{

		otaken++;

	}

	else if(box[2][2]=="x")

	{

		xtaken++;

	}

	else if(box[2][2]=="~")

	{

		possibleSpot=[2,2];

	}

	if(otaken==2&&xtaken==0)

	{

		return possibleSpot;

	}

	else if(xtaken==2&&otaken==0)

	{

		return possibleSpot;

	}

	xtaken=0;

	otaken=0;

	//Winning top-left to bottom-right (diagonal)

	if(box[0][2]=="o")

	{

		otaken++;

	}

	else if(box[0][2]=="x")

	{

		xtaken++;

	}

	else if(box[0][2]=="~")

	{

		possibleSpot=[0,2];

	}

	if(box[1][1]=="o")

	{

		otaken++;

	}

	else if(box[1][1]=="x")

	{

		xtaken++;

	}

	else if(box[1][1]=="~")

	{

		possibleSpot=[1,1];

	}

	if(box[2][0]=="o")

	{

		otaken++;

	}

	else if(box[2][0]=="x")

	{

		xtaken++;

	}

	else if(box[2][0]=="~")

	{

		possibleSpot=[2,0];

	}

	if(otaken==2&&xtaken==0)

	{

		return possibleSpot;

	}

	else if(xtaken==2&&otaken==0)

	{

		return possibleSpot;

	}

	while(1<2)

	{

		possibleSpot=[Math.round(Math.random()*2),Math.round(Math.random()*2)];

		if(box[possibleSpot[0]][possibleSpot[1]]=="~")

		{

			break;

		}

	}

	return possibleSpot;

} //End of getPriority function

//This function converts coordinates into HTML box ids, so that an appropriate symbol (X / O) and CSS can be placed in the correct location in the table.

function aiBoxRequest(boxRequestedCoords) 

{

	//Conversion of first column coordinates to HTML ids

	if (boxRequestedCoords=="0,0") 

	{

		aiBoxRequested="#btnBox1";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="0,1") 

	{

		aiBoxRequested="#btnBox2";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="0,2") 

	{

		aiBoxRequested="#btnBox3";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	//Conversion of second column coordinates to HTML ids

	if (boxRequestedCoords=="1,0") 

	{

		aiBoxRequested="#btnBox4";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="1,1") 

	{

		aiBoxRequested="#btnBox5";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="1,2") 

	{

		aiBoxRequested="#btnBox6";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	//Conversion of third column coordinates to HTML ids

	if (boxRequestedCoords=="2,0") 

	{

		aiBoxRequested="#btnBox7";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="2,1") 

	{

		aiBoxRequested="#btnBox8";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

	else if (boxRequestedCoords=="2,2") 

	{

		aiBoxRequested="#btnBox9";

		$(aiBoxRequested).replaceWith(aiSymbol);

	}

}//End of aiBoxRequest function

$(document).ready(function($) 

{

	aiName=aiNames[Math.round(Math.random()*9)];

	//Checks for specific box clicks

	$("#btnBox1").click(function(event) 

	{

		boxClicked="#btnBox1";

	});

	$("#btnBox2").click(function(event) 

	{

		boxClicked="#btnBox2";

	});

	$("#btnBox3").click(function(event) 

	{

		boxClicked="#btnBox3";

	});

	$("#btnBox4").click(function(event) 

	{

		boxClicked="#btnBox4";

	});	

	$("#btnBox5").click(function(event) 

	{

		boxClicked="#btnBox5";

	});

	$("#btnBox6").click(function(event) 

	{

		boxClicked="#btnBox6";

	});	

	$("#btnBox7").click(function(event) 

	{

		boxClicked="#btnBox7";

	});	

	$("#btnBox8").click(function(event) 

	{

		boxClicked="#btnBox8";

	});	

	$("#btnBox9").click(function(event) 

	{

		boxClicked="#btnBox9";

	});	

	//When a box is clicked, it will request a question from the array and start the game

	$(".btn").click(function(event)

	{

		requestQuestion();

		requestBox=event.target.id;

		$("#btnCheckAnswers").prop("disabled",0);

		for(disabled=1;disabled<10;disabled++)

		{

			$("#btnBox"+disabled).prop("disabled",true);

		}

		$("#instructions").css({"display": "none"});

		$("#btnNextTurn").prop("disabled", true);

	});

	//Checks for the "Check Answer" button to be clicked, indicating answer submission

	$("#btnCheckAnswers").click(function(event) 

	{

		if(checkAnswer(boxClicked)!=true)

		{

			for(disabled=1;disabled<10;disabled++)

			{

				$("#btnBox"+disabled).prop("disabled",0);

			}

		}

		else

		{

			for(disabled=1;disabled<10;disabled++)

			{

				$("#btnBox"+disabled).prop("disabled",0);

			}

		}

		//Change disabled statuses of buttons

		$("#btnCheckAnswers").prop("disabled",true);

		$("#btnNextTurn").prop("disabled",false);

		$("#btnBox1").prop("disabled",true);

		$("#btnBox2").prop("disabled",true);

		$("#btnBox3").prop("disabled",true);

		$("#btnBox4").prop("disabled",true);

		$("#btnBox5").prop("disabled",true);

		$("#btnBox6").prop("disabled",true);

		$("#btnBox7").prop("disabled",true);

		$("#btnBox8").prop("disabled",true);

		$("#btnBox9").prop("disabled",true);

	});

	//Check for "Next Turn" button to be clicked, allowing the AI to go

	$("#btnNextTurn").click(function(event) 

	{

		$("#btnNextTurn").prop("disabled", 1);

		$("#questionBoard").css({"display":"none"});

		$("#aiDelay").css({"display": "block"});

		//AIs turn

		$("#aiThinkingStatus").text("AI "+aiName+" is thinking. Please wait!");

		questionBank.splice(questionNumber, 1);

		questionRange=questionRange-1;

		setTimeout(function() 

		{

			if (aiTurn()==true) 

			{

				aiCorrect="The AI got the previous question CORRECT. ";

				priority=getPriority();

				aiBoxRequest(priority);

				update(priority[1],priority[0],"o");				

			}

			else 

			{

				aiCorrect="The AI got the previous question WRONG. ";

			}

			//Reset all CSS values back to original

			$("#questionBoard").css({"display":"block"});

			$("#aiDelay").css({"display": "none"});

			$("#btnNextTurn").prop("disabled", true);

			$("#btnCheckAnswers").prop("disabled",true);

			//Allow boxes to be clicked again

			$("#btnBox1").prop("disabled",false);

			$("#btnBox2").prop("disabled",false);

			$("#btnBox3").prop("disabled",false);

			$("#btnBox4").prop("disabled",false);

			$("#btnBox5").prop("disabled",false);

			$("#btnBox6").prop("disabled",false);

			$("#btnBox7").prop("disabled",false);

			$("#btnBox8").prop("disabled",false);

			$("#btnBox9").prop("disabled",false);

			//Reset multi choice boxes

			$("#radChoiceA").prop("disabled", false);

			$("#radChoiceB").prop("disabled", false);

			$("#radChoiceC").prop("disabled", false);

			$("#radChoiceD").prop("disabled", false);

			//Reset Input Field

			$("#txtAnswer").prop("disabled", false);

			//Reset Check boxes

			$("#chkCheckBoxA").prop("disabled", false);

			$("#chkCheckBoxB").prop("disabled", false);

			$("#chkCheckBoxC").prop("disabled", false);

			$("#chkCheckBoxD").prop("disabled", false);

			//Remove previous questions from the screen

			$("#txtAnswer").css({"display": "none"});

			$("#choices").css({"display": "none"});

			$("#checkBoxQuestions").css({"display": "none"});

			//Reset colours

			$("#choiceA").removeAttr("style");

			$("#choiceB").removeAttr("style");

			$("#choiceC").removeAttr("style");

			$("#choiceD").removeAttr("style");

			$("#txtAnswer").removeAttr("style");

			$("#checkBoxChoiceA").removeAttr("style");

			$("#checkBoxChoiceB").removeAttr("style");

			$("#checkBoxChoiceC").removeAttr("style");

			$("#checkBoxChoiceD").removeAttr("style");

			//Clear all previous values entered or boxes checked

			$("#radChoiceA").prop("checked", 0);

			$("#radChoiceB").prop("checked", 0);

			$("#radChoiceC").prop("checked", 0);

			$("#radChoiceD").prop("checked", 0);

			$("#txtAnswer").val("");

			$("#chkCheckBoxA").prop("checked", 0);

			$("#chkCheckBoxB").prop("checked", 0);

			$("#chkCheckBoxC").prop("checked", 0);

			$("#chkCheckBoxD").prop("checked", 0);	

			//Remove previous questions

			$("#lblQuestion").text("...");

			//Show more instruction

			$("#instructions").css({"display": "block"});

			$("#instructions").text(aiCorrect+"It is your turn again, "+name+". Click a Tic Tac Toe box!");

		}, 1000);	

	});

	//If easy button is pressed at start of game, difficulty of AI will be decreased

	$("#btnEasy").click(function(event)

	{

		//If not all questions are answered, tell them to enter again

		if ($("#txtName").val()=="" || $("#radChooseX").prop("checked")==false && $("#radChooseO").prop("checked")==false) 

		{

			alert("You haven't entered a name, or selected a symbol to play with. Try again!");

		}

		else 

		{

			//Chose which symbol you want (X or O)

			if ($("#radChooseX").prop("checked")==true) 

			{

				symbol="X"

				symbolSelected="<img src='images/xMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/oMark.png' width='245px' height='245px'>";

			}

			else if ($("#radChooseO").prop("checked")==true)

			{

				symbol="O"

				symbolSelected="<img src='images/oMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/xMark.png' width='245px' height='245px'>";

			}

			name=$("#txtName").val();

			alert("Welcome to Tic Tac Toe "+ name+". You are playing on easy mode, with the "+symbol+ " symbol. Good luck!");

			correctChances=4;

			$("#gameBlock").remove();

			$("#lblDisplayTurn").text("Hey "+name+". Get started by clicking any Tic Tac Toe box!");

			startDate = new Date();

		}	



	});

	//If medium button is pressed at start of game, difficulty of AI will be set to medium

	$("#btnMedium").click(function(event) 

	{

		//If not all questions are answered, tell them to enter again

		if ($("#txtName").val()=="" || $("#radChooseX").prop("checked")==false && $("#radChooseO").prop("checked")==false) 

		{

			alert("You haven't entered a name, or selected a symbol to play with. Try again!");

		}

		else 

		{

			//Chose which symbol you want (X or O)

			if ($("#radChooseX").prop("checked")==true) 

			{

				symbol="X"

				symbolSelected="<img src='images/xMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/oMark.png' width='245px' height='245px'>";

			}

			else if ($("#radChooseO").prop("checked")==true)

			{

				symbol="O"

				symbolSelected="<img src='images/oMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/xMark.png' width='245px' height='245px'>";

			}

			name=$("#txtName").val();

			alert("Welcome to Tic Tac Toe "+ name+". You are playing on medium mode, with the "+symbol+ " symbol. Good luck!");

			correctChances=3;

			$("#gameBlock").remove();

			$("#lblDisplayTurn").text("Hey "+name+". Get started by clicking any Tic Tac Toe box!");

			startDate= new Date();

		}			

	});

	//If hard button is pressed at start of game, difficulty of AI will be increased

	$("#btnHard").click(function(event) 

	{

		//If not all questions are answered, tell them to enter again

		if ($("#txtName").val()=="" || $("#radChooseX").prop("checked")==false && $("#radChooseO").prop("checked")==false) 

		{

			alert("You haven't entered a name, or selected a symbol to play with. Try again!");

		}

		else 

		{

			//Chose which symbol you want (X or O)

			if ($("#radChooseX").prop("checked")==true) 

			{

				symbol="X"

				symbolSelected="<img src='images/xMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/oMark.png' width='245px' height='245px'>";

			}

			else if ($("#radChooseO").prop("checked")==true)

			{

				symbol="O"

				symbolSelected="<img src='images/oMark.png' width='245px' height='245px'>";

				aiSymbol="<img src='images/xMark.png' width='245px' height='245px'>";

			}

			name=$("#txtName").val();

			alert("Welcome to Tic Tac Toe "+ name+". You are playing on hard mode, with the "+symbol+ " symbol. Good luck!");

			correctChances=2;

			$("#gameBlock").remove();

			$("#lblDisplayTurn").text("Hey "+name+". Get started by clicking any Tic Tac Toe box!");

			startDate= new Date();

		}	

	});

}); //End of document ready function