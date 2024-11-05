let inputString = "sveiki";

function reverseString(str) {
    const apgriezts =  str.split('').reverse().join('');
    return apgriezts;
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));



