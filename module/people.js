const fullName = require("./module/names.js");
console.log(fullName);

const getHobbies = require("./module/hobbies.js");
console.log(getHobbies);

const getInfo = () => {
return {
fullName: getFullName('Melania'),
hobbies: getHobbies('Videogames', 'Film', 'Serie Tv')
}
}

console.log(getInfo());