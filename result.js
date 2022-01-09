


function displayResult() {
    
    document.getElementById("name").innerHTML = window.localStorage.getItem("name")+" "+window.localStorage.getItem("surname")

    console.log(window.localStorage.getItem("secondsTaken"))
    let secondsTaken = Number(window.localStorage.getItem("secondsTaken"))
    let m = parseInt(secondsTaken / 60)
    let s = parseInt(secondsTaken % 60)
    document.getElementById("time-taken").innerHTML = m+" : "+s

    


    document.getElementById("score").innerHTML = score;
    
    

    let totalScore = 10   // total no of questions
    calculatedPercent = score*100/totalScore
    
    if(calculatedPercent >= 85) { calculatedGrade = "S" }
    else if(calculatedPercent >= 75) { calculatedGrade = "A" }
    else if(calculatedPercent >= 65) { calculatedGrade = "B" }
    else if(calculatedPercent >= 55) { calculatedGrade = "C" } 
    else if(calculatedPercent >= 50) { calculatedGrade = "D" }
    else { calculatedGrade = "F" }

    document.getElementById("grade").innerHTML = calculatedGrade

    let secondsPerQuestion = Math.round(secondsTaken / totalScore)
    console.log(secondsPerQuestion)
    let mm = parseInt(secondsPerQuestion / 60)
    let ss = parseInt(secondsPerQuestion % 60)

    document.getElementById("average-time").innerHTML = mm+" : "+ss

    document.getElementById("wrong").innerHTML = totalScore- score;
}