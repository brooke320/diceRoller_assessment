let rollDiceInput = document.querySelector("#roll-number");
let rollButton = document.querySelector("#roll-dice");
let showAllRolls = document.querySelector("#show-all-rolls");
let rollResults = document.querySelector("#roll-results");
let total = document.querySelector("#total");
let resetButton = document.querySelector("reset");
let dieRolls = [];

//function randomNumber() {
// return Math.floor(Math.random() * 6) + 1;
//}

rollButton.addEventListener("click", function () {
    let maxRolls = Number(rollDiceInput.value);
    let count = 0;
    rollDiceInput.value = "";

    while (count < maxRolls) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(randomNumber);
        count++;
    }
    //TOTAL
    function getSum(total, dieRolls) {
        return total + dieRolls
    }
    total.innerHTML += dieRolls.reduce(getSum);


    //total.innerHTML = dieRolls.reduce((accumulator, ) => accumulator + currentValue
    //);

    //total.innerHTML += dieRolls.reduce((total, count) => total + count);
})



showAllRolls.addEventListener("click", function () {
    let count = 0;
    rollResults.innerHTML += "";

    while (count < dieRolls.length) {
        rollResults.innerHTML += "<li>" + dieRolls[count] + "</li>";
        count++;
    }
})



/*resetButton.addEventListener("click", function () {
    function reset() {
        rollDiceInput.value = 0;
        rollResults.innerHTML = 0;
        total.innerHTML = 0;
        showAllRolls.innerHTML = 0;
        rollButton.innerHTML = 0;

        dieRolls = [];
    }
})*/




