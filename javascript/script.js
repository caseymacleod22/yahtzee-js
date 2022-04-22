const dice = []
const hold = []
let turn = 1  

function rollDice() {
    if (turn < 3) {
        for (i = 0; i < 6; i++) {
            if (hold[i] === 0) {
                dice[i] = Math.floor(Math.random() * 6) + 1;
                console.log(dice)
            }
        }
        turn = ++turn
    }
    else {
        console.log('aint work fam')
    }
}

// rollDice()


// function rollDie1() {
// const result1 = (Math.floor(Math.random() *7))
// return document.getElementById('die1').textContent = result1;
// }

// function rollDie2() {
// const result2 = (Math.floor(Math.random() *7))
// return document.getElementById('die2').textContent = result2;
// }
// function rollDie3() {
// const result3 = (Math.floor(Math.random() *7))
// return document.getElementById('die3').textContent = result3;
// }
// function rollDie4() {
// const result4 = (Math.floor(Math.random() *7))
// return document.getElementById('die4').textContent = result4;
// }
// function rollDie5() {
// const result5 = (Math.floor(Math.random() *7))
// return document.getElementById('die5').textContent = result5;
// }

// function rollDice () {
//     return rollDie1(), rollDie2(), rollDie3(), rollDie4(), rollDie5()
// }

// rollDie1()
// rollDie2()
// rollDie3()
// rollDie4()
// rollDie5()