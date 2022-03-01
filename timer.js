
let url = window.location.search.toString()
let i = url.indexOf("=")
console.log(url.substring(i+1))
testId = url.substring(i+1)
for(let index=0; index<tests.length; index++) {
    if(testId == tests[index].id) {
        var totalTiming = Number.parseInt(tests[index].timeInMinutes)
    }
    
}

// time in minutes




var secondsCounter = 0

function startTimer() {

    
    disable()

    var startMinutes = totalTiming
    var startSeconds = 60  // also change on update time 


    var minutes = startMinutes
    var seconds = startSeconds
    
    minutes-=1
    document.getElementById("minutes").innerHTML = minutes
    // document.getElementById("seconds").innerHTML = seconds - 1

    loadNext(0)
    document.getElementById("total-question").innerHTML = totalQuestions.toString()

    let interval = setInterval(() => {

        
        if((minutes == 0 && seconds == 0)) {

            alert("Redirecting to Next section...")
            clearInterval(interval)
            // alert("timer ends")
            submitExam("TimeEnd")
            
        }
        if(seconds == 0) {
            //************************************************** */

            seconds = 60       // update seconds here also

            //**************************************************** */
            minutes-=1     
            if(minutes <= 9)
                document.getElementById("minutes").innerHTML = "0"+minutes
            else
                document.getElementById("minutes").innerHTML = minutes

            
        }
        

        seconds-=1      
        if(seconds <= 9)
            document.getElementById("seconds").innerHTML = "0"+seconds
        else 
            document.getElementById("seconds").innerHTML = seconds
        

            // console.log("seconds",secondsCounter)
            secondsCounter+=1
        // console.log(secondsCounter)

    }, 1000);
}

