let score = 0
let currentQuestion = 0
let wrongAnswers = 0
let indexNumber = 0
var indexList = [0];






function fullScreenBrowser() {
    document.getElementById("header").addEventListener("dblclick",()=>{
        document.documentElement.requestFullscreen();
    });
}







// clear error message when an option is selected
function clearMsg() {
    document.getElementById("msg").innerHTML = ""
}

document.getElementById("header").addEventListener("dblclick",()=>{
    document.documentElement.requestFullscreen();
    document.addEventListener("keydown",e=>{
        console.log(e.key);
        if(e.key == "Escape") e.preventDefault();
        // if(e.key == "F11") e.preventDefault();
        
    });
});


function loadNext(index) {

    

    clearSelection()
    
    // alert(window.localStorage.getItem("name")+" "+window.localStorage.getItem("surname")+"is logged in");

//     to display score and question no on page load
    document.getElementById("score").innerHTML = score
    // alert("hello")
    
    document.getElementById("question").innerHTML = questions[indexNumber].question
    document.getElementById("option1").innerHTML = questions[indexNumber].optionA
    document.getElementById("option2").innerHTML = questions[indexNumber].optionB
    document.getElementById("option3").innerHTML = questions[indexNumber].optionC
    document.getElementById("option4").innerHTML = questions[indexNumber].optionD
    
    
//     if question reaches its limit then stop the quiz
    if(document.getElementById("current-question").innerHTML == "9") {
        document.getElementById("next-btn").innerHTML = "Submit"
    }
    
//     increament question number 
    currentQuestion++
    document.getElementById("current-question").innerHTML = currentQuestion
    
}


//  to clear all the selected radio buttons
function clearSelection() {
    var ele = document.getElementsByName("question1");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
}


// to check the answer on click on save
function checkAnswerAndNext() {
    
    var elements = document.getElementsByName("question1")
//     to check if any radio button is not selected
    
    if(elements[0].checked == false && elements[1].checked == false && elements[2].checked == false && elements[3].checked == false) {
        // alert("hello")
        document.getElementById("msg").innerHTML = "Please select an option"
    }
    else {
        var selectedAnswer = "";
        var elements = document.getElementsByName("question1");
        
        if(elements[0].checked==true)
            selectedAnswer = document.querySelector("#opt1 ~ span").innerHTML
        else if(elements[1].checked==true)
            selectedAnswer = document.querySelector("#opt2 ~ span").innerHTML
        else if(elements[2].checked==true)
            selectedAnswer = document.querySelector("#opt3 ~ span").innerHTML
        else if(elements[3].checked==true)
            selectedAnswer = document.querySelector("#opt4 ~ span").innerHTML
    
        if(selectedAnswer === questions[indexNumber].correctAnswer) {
            score++
            console.log(score)
            // document.getElementById("score").innerHTML = score
        }
        if(currentQuestion == 10) {

            
            submitExam()
            
        }
        else {
//             submit the paper and display result

            // indexNumber++
            let index = generateRandomNumber(0,24);
            
            while(indexList.includes(index) == true) {
                index = generateRandomNumber(0,25);
            }
            
            indexList.push(index)
            console.log(indexList);
            indexNumber = index

            // console.log(indexNumber)
            loadNext(indexNumber)
        }
    }    
    
}





//  submit exam after time ends and onclick of submit button

function submitExam() {
    document.getElementById("overlay").style.display = "flex"
    displayResult();
}


function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}

document.addEventListener("load",()=>{
    window.location.href = "index.html"
    window.location.replace("index.html")
})