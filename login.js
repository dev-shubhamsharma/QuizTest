// after click on start exam btn click
function validateUser() {

    var name = document.getElementById("name").value
    var password = document.getElementById("password").value

    // console.log(name)
    // console.log(password)
    if(password == students[name]) {
        // alert("matched")
        document.getElementsByClassName("preloader")[0].style.display = "flex"
        window.localStorage.setItem("name",name);
        window.localStorage.setItem("surname",password);

        const timeout = setTimeout(function() {
            window.open("ExamWindow.html","_self")
            clearTimeout(timeout)
        },5000)
    }
    else {
        // alert("not matched")
        document.getElementById("login-msg").style.display = "block"
    }
    
}

function clearLoginMsg() {
    document.getElementById("login-msg").style.display = "none"
}