let personName = "sarfarAz aHmed";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let titleCase = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
console.log(titleCase);
