let animals: string[] = ["Lion", "Fox", "Hyena"];
for(let i = 0; i < animals.length; i++){
    if(animals[i] == "Lion"){
        console.log(animals[i] + "\nLion is the king of the jungle");
    }
    if(animals[i] == "Fox"){
        console.log(animals[i] + "\nFox is the cleverest among the other animals");
    }
    if(animals[i] == "Hyena"){
        console.log(animals[i] + "\nHyena always move in a flock");
    }
}
console.log("The common thing between a Lion, Fox and a Hyena is that they all are mamals")