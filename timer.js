

function startTimer() {

    var startMinutes = 5
    var startSeconds = 60  // also change on update time 

    var minutes = startMinutes
    var seconds = startSeconds
    var secondsCounter = 0

    minutes-=1
    document.getElementById("minutes").innerHTML = minutes
    // document.getElementById("seconds").innerHTML = seconds - 1

    loadNext(0)

    let interval = setInterval(() => {

        
        if(minutes == 0 && seconds == 0) {
            clearInterval(interval)
            // alert("timer ends")
            submitExam()
            window.localStorage.setItem("secondsTaken",secondsCounter.toString());
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
        
        secondsCounter+=1
        // console.log(secondsCounter)

    }, 1000);
}

