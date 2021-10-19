// Iteration 1: Names and Input

let hacker1 = 'Telma';
console.log("The driver's name is ", hacker1); 
let hacker2 = 'Pedro';
console.log("The navigator's name is ", hacker2); 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has', hacker1.length, ' characters')
} else if (hacker2.length > hacker1.length ){
    console.log('It seems that the navigator has the longest name, it has ', hacker2.length, ' characters')
} else if (hacker2.length === hacker1.length){
    console.log('Wow, you both have equally long names ', hacker1.length  ,' characters!')
}

// Iteration 3: Loops

let nameSeparated = "";

for (let i = 0; i < hacker1.length; i ++){
    nameSeparated += hacker1[i] + " ";

}

let capitalize = nameSeparated.toUpperCase();

 console.log(capitalize);

let reverseName = "";

for (let i = 0; i <= hacker2.length; i++){
    reverseName += hacker2.charAt(hacker2.length -[i]);
}

console.log(reverseName);

 // Exercice 3 with methods

let reverse = hacker2.split('').reverse().join('');
console.log(reverse)

let separateAndCapitalize = hacker1.toUpperCase().split('').join(' ');
console.log(separateAndCapitalize);
    
if (hacker1 < hacker2){
    console.log("The driver's name goes first");
}else if (hacker2 < hacker1){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?"); 
}

// Bonus 1

let paragraphs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

let count = 0;
let countEt = 0; 

for (let i = 0; i < paragraphs.length; i++){
    if (paragraphs[i] === " "){
        count += 1;
    }
   if ((paragraphs[i] === "e") && (paragraphs[i + 1] === "t")){
       countEt+= 1;
   }
}

console.log(count);
console.log(countEt);

// Bonus 2

let phraseToCheck = "Amor, Roma";


for (let i = 0; i <= phraseToCheck.length; i++){
    if (phraseToCheck[i] === (phraseToCheck.charAt(phraseToCheck.length -[i]))){
        console.log("You have a Palindrome")
    }
    
}

