function isValid(event) {
    if(event.key == "Enter") {
        return false;
    }
    return (!event.altKey && !event.ctrlKey && ((!event.shiftKey && event.keyCode>=48 && event.keyCode<=57) ||
    (event.keyCode>=65 && event.keyCode<=90) ||
    (event.keyCode>=97 && event.keyCode<=122) || event.keyCode == 32)
    && document.getElementById("search_input").value.length < 25) || 
    event.keyCode == 8;
}

