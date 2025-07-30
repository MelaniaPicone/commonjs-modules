const fullName = require("./module/names.js");
console.log(fullName);


const hobbies = require("./module/hobbies.js");
console.log(hobbies);

const people = () => {
return {
fullName: firstName('Melania'),
hobbies: firstHobby('Singing, Writing, Walking'),
}
}

const {fullName, hobbies} = people;
console.log(people());