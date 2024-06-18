const questions=[
    {
        question:"for i __ range(10):",
        answers: [
            {text:"not in",correct:false},
            {text:"in",correct:true},
            {text:"is",correct:false},
            {text:"is not",correct:false},  
        ]
},
{
    question:"What is used to give command lines in python?",
    answers: [
        {text:"#",correct:true},
        {text:"//",correct:false},
        {text:"/*.......*/",correct:false},
        {text:"&&",correct:false},  
    ]
},
{
    question:"x=\"Hello world\" print the Statement: ",
    answers: [
        {text:"print('x')",correct:false},
        {text:"(print(x))",correct:false},
        {text:"print(x)",correct:true},
        {text:"print.x",correct:false},  
    ]
},
{
    question:"x=5 and x=_____(x) convert the type integer into float?",
    answers: [
        {text:"x=f(x)",correct:false},
        {text:"x=(float(x))",correct:false},
        {text:"x=float(x)",correct:true},
        {text:"x=x.float()",correct:false},  
    ]
 },
 {
    question:"Choose the correct method to assign the variable python:",
    answers: [
        {text:"var x=10;",correct:false},
        {text:"x=10;",correct:false},
        {text:"int x=10;",correct:false},
        {text:"x=10",correct:true},  
    ]
 },
 {
    question:"x=5 ,Print the data type of the variable:",
    answers: [
        {text:"print(x.type())",correct:false},
        {text:"print(type(x))",correct:true},
        {text:"print.type(x)",correct:false},
        {text:"print(type.x)",correct:false},  
    ]
 },
 {
    question:"How to find the length of the string?",
    answers: [
        {text:"print(len(x))",correct:true},
        {text:"print(length(x))",correct:false},
        {text:"print(count(x))",correct:false},
        {text:"print(x.len())",correct:false},  
    ]
 },
 {
    question:"x=\"hello world\" using slice method [2:5] what would be a answer:",
    answers: [
        {text:"hel",correct:false},
        {text:"llo",correct:true},
        {text:"owo",correct:false},
        {text:"rld",correct:false},  
    ]
 },
 {
    question:"list=['apple','banana','orenge'] this is the list print the banana in the list:?",
    answers: [
        {text:"print(\"banana\")",correct:false},
        {text:"list.print(\"banana\")",correct:false},
        {text:"print(list[2])",correct:false},
        {text:"print(list[1])",correct:true},  
    ]
 }, {
    question:"What is the function to convet the first letter to upper case in strings?",
    answers: [
        {text:"casefold()",correct:false},
        {text:"center()",correct:false},
        {text:"format_map()",correct:false},
        {text:"capitalize()",correct:true},  
    ]
 },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currenQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currenQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currenQuestionIndex];
    let questionNo = currenQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
            nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display="block";
}


function handleNextButton(){
    currenQuestionIndex++;
    if(currenQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}




nextButton.addEventListener("click",()=>{
    if(currenQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});



startQuiz();