const min=1;
const max=6;
const randomNum=Math.floor(Math.random()*6)+1;
// console.log(`You Roll a ${randomNum}`);

function roll(){
    const diceElement=document.getElementById("dice");
    const randomNum=Math.floor(Math.random()*6)+1;
    console.log(randomNum);
    diceElement.src = `./images/${randomNum}.png`;
}