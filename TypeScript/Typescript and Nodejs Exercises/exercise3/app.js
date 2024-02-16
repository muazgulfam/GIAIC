var personName = "sarfarAz aHmed";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
var titleCase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
console.log(titleCase);
