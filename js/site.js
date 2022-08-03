document.getElementById("btnSubmit").addEventListener("click", getStringFromPage);

function getStringFromPage(){
    document.getElementById("alert").classList.add("invisible");

    let inputString = document.getElementById("userString").value;
    let reversedString = reverseString(inputString);
    displayReversedString(reversedString);
}

function reverseString(stringToReverse){
    let reversedString = [];

    for(index = (stringToReverse.length - 1); index >= 0; index--){
        reversedString += stringToReverse[index];
    }

    return reversedString.toString();
}

function displayReversedString(stringToDisplay){

    document.getElementById("msg").innerHTML = `Your U-Turned string is: ${stringToDisplay}`;
    document.getElementById("alert").classList.remove("invisible");
}