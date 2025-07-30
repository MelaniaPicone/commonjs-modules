const fullName = require("./module/names.js");
console.log(fullName);


const hobbies = require("./module/hobbies.js");
console.log(hobbies);


const people = () => {
return {
fullName: firstName('Melania'),
hobbies: hobbies('Singing, Writing, Walking'),
}
}