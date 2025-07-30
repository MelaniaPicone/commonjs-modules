const getFullName = require("./module/names.js");

const getHobbies = require("./module/hobbies.js");

const getInfo = () => {
return {
fullName: getFullName('Melania'),
hobbies: getHobbies('Videogames', 'Film', 'Serie Tv')
}
}

console.log(getInfo());