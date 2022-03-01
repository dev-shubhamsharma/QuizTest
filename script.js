

var totalQuestionsForTest = 10

var totalQuestionAddedInList = 10
var currentBtnIdNo = 0

var prevBtnId = ""


function loadQuestionBtns() {

    let indexList = []
    for(let i=0; i<totalQuestionsForTest; i++) {

        let index = generateRandomNumber(0,totalQuestionAddedInList)

        while(indexList.includes(index)) {
            index = generateRandomNumber(0, totalQuestionAddedInList)
        }

        indexList.push(index)
        console.log("indexList = "+indexList)

        let quesBtn = document.createElement("button")
        quesBtn.classList.add("question-btn")
        quesBtn.setAttribute("id","btn"+i)

        let btnText = document.createElement("span")
        btnText.classList.add("btn-text")
        btnText.innerHTML = (i+1).toString();

        let quesIndex = document.createElement("span")
        quesIndex.classList.add("ques-index")
        quesIndex.innerHTML = index.toString();

        let ansOption = document.createElement("span")
        ansOption.classList.add("ans-option")
        ansOption.innerHTML = NaN

        quesBtn.appendChild(btnText)
        quesBtn.appendChild(quesIndex)
        quesBtn.appendChild(ansOption)
        
        quesBtn.setAttribute("onclick","showQuestion(this.id)")

        document.querySelector(".grid-container").append(quesBtn)

    }

    // call first question clicked event to load first question
    showQuestion("btn"+currentBtnIdNo)

}



function generateRandomNumber(min, max) {
    let diff = max - min
    let rand = Math.random()
    rand = Math.floor(rand * diff)
    rand = rand + min
    return rand

}



function showQuestion(clickedId) {

    // console.log(clickedId.toString())
    // to change color current clicked btn and previous btn color
    document.querySelector("#"+clickedId).classList.add("current")
    // console.log(prevBtnId)
    if(prevBtnId != "")
    document.querySelector("#"+prevBtnId).classList.remove("current")
    
    clearMsg()
    // clearAnswer()
    // console.log(clickedId)

    currentBtnIdNo = Number.parseInt(clickedId.substring(3))
    // currentBtnIdNo
    let btnIndex = document.querySelector("#"+clickedId+" .ques-index").innerHTML
    // console.log(btnIndex)
    document.querySelector(".question-container .en").innerHTML = questions[btnIndex][0].question.toString()
    document.querySelector(".question-container .hi").innerHTML = questions[btnIndex][1].question.toString()

    document.querySelector("#option1 .en").innerHTML = questions[btnIndex][0].optionA.toString()
    document.querySelector("#option2 .en").innerHTML = questions[btnIndex][0].optionB.toString()
    document.querySelector("#option3 .en").innerHTML = questions[btnIndex][0].optionC.toString()
    document.querySelector("#option4 .en").innerHTML = questions[btnIndex][0].optionD.toString()

    document.querySelector("#option1 .hi").innerHTML = questions[btnIndex][1].optionA.toString()
    document.querySelector("#option2 .hi").innerHTML = questions[btnIndex][1].optionB.toString()
    document.querySelector("#option3 .hi").innerHTML = questions[btnIndex][1].optionC.toString()
    document.querySelector("#option4 .hi").innerHTML = questions[btnIndex][1].optionD.toString()


    let savedAnswer = document.querySelector("#"+clickedId+" .ans-option").innerHTML
    // console.log("saved :"+savedAnswer)
    
    switch(savedAnswer) {
        case "A": document.querySelector("#radio-btn1").checked = true; break;
        case "B": document.querySelector("#radio-btn2").checked = true; break;
        case "C": document.querySelector("#radio-btn3").checked = true; break;
        case "D": document.querySelector("#radio-btn4").checked = true; break;
        default : clearAnswer()
    }
    

    // save current btn id into variable for future
    prevBtnId = clickedId 
    

    // if last button is clicked then only save answer
    let nextBtn = document.querySelector("#next-btn")
    if(clickedId == "btn"+(totalQuestionsForTest-1)) {
        
        // .classList.add("disabled")
        nextBtn.innerHTML = "Save"
    }
    else {
        nextBtn.innerHTML = "Save & Next"
    }


    let prevBtn = document.querySelector("#prev-btn")
    if(clickedId == "btn0") {
        prevBtn.classList.add("disabled")
        prevBtn.disabled = true

    }
    else {
        prevBtn.disabled = false
        prevBtn.classList.remove("disabled")
    }
    
    
}


function clearAnswer() {

    let radioBtns = document.querySelectorAll(".radio-btn")
    for(let i=0; i<radioBtns.length; i++) {
        radioBtns[i].checked = false
    }
    // console.log("answer cleared")

}

function saveAnswer() {
    
    let radioBtns = document.querySelectorAll(".radio-btn")

    // if no option is selected then show the message

    if(radioBtns[0].checked == false && radioBtns[1].checked == false && radioBtns[2].checked == false && radioBtns[3].checked == false) {
        document.querySelector("#msg").style.visibility = "visible"
    }
    // if any option is selected then save the answer and goto next
    else {

        for(let i = 0; i<radioBtns.length; i++) {
            if(radioBtns[i].checked == true) {
                document.querySelector("#btn"+currentBtnIdNo+" .ans-option").innerHTML = radioBtns[i].value.toString()

                document.querySelector("#btn"+currentBtnIdNo).classList.add("answered")
            }
        }

        if(currentBtnIdNo != totalQuestionsForTest - 1) {
            goToNext()
        }
    }
    
}




function clearMsg() {
    document.querySelector("#msg").style.visibility = "hidden"
}




function goToNext() {
    if(currentBtnIdNo <= totalQuestionsForTest - 1) {
        showQuestion("btn"+(currentBtnIdNo+1))
    }
        
}


function goToPrev() {
    if(currentBtnIdNo >= 0) {
        showQuestion("btn"+(currentBtnIdNo-1))
    }
        
}

