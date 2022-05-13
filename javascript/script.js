let held = []

function rollDie() {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;
    let roll3 = Math.floor(Math.random() * 6) + 1;
    let roll4 = Math.floor(Math.random() * 6) + 1;
    let roll5 = Math.floor(Math.random() * 6) + 1;
    
    console.log(roll1, roll2, roll3, roll4, roll5)
    return document.getElementById('die1').textContent = roll1, document.getElementById('die2').textContent = roll2, document.getElementById('die3').textContent = roll3, document.getElementById('die4').textContent = roll4, document.getElementById('die5').textContent = roll5
}

function throwDice() {
    rollDie()   
}

// function addClass() {
//     let elem = document.getElementById("die2");

//     if (elem.classList.contains("active")) {
//         elem.classList.remove("active")
//     } else {   
//     elem.classList.add("active");
// }}