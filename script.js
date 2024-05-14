

let textInput = document.getElementById("text-input");
let resultEl = document.getElementById("result-el");


function check() { 

    let inputCharacter = textInput.value.replace(/[^A-Za-z0-9]/g, "")

    if (inputCharacter === "") {
        alert("Please input a value");
        resultEl.textContent = `${textInput.value} is not a Palindrome` 
    } else if (inputCharacter === inputCharacter.split("").reverse().join("")){
        resultEl.textContent = `${textInput.value} is a Palindrome`
    } else { 
        resultEl.textContent = `${textInput.value} is not a Palindrome`
    }
    textInput.value = ""
}


// How did you do this? 
// Created Html and CSS of this site 
// declaring variable and function 
// inside the function, declaring conditional statement while reversing the string. also considering the characters.


