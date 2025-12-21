console.log("Selamın aleykum dünya");
let random = 0;
//zar yapıom
function randomize(){
    random = Math.random();
    let answer = Math.floor(random * 6) +1;
    document.getElementById("dice").src = "diceImg/" + answer + ".png";
    console.log("The chosen one: " + answer);
}