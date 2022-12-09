function isValid(event) {
    if(event.key == "Enter") {
        document.getElementsByClassName("button")[0].click();
        return false;
    }
    return (!event.altKey && !event.ctrlKey && ((!event.shiftKey && event.keyCode>=48 && event.keyCode<=57) ||
    (event.keyCode>=65 && event.keyCode<=90) ||
    (event.keyCode>=97 && event.keyCode<=122)) 
    && document.getElementsByClassName("input")[0].value.length < 25) || 
    event.keyCode == 8;
}

function formSubmit(event) {
    var username = document.getElementsByClassName("input")[0].value;
    if(username.length < 3) {
        document.getElementById("error_text").style.opacity = 1;
        return false;
    }
    document.getElementById("error_text").style.opacity = 0;
    return true;
}