let held = []

function rollDie() {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;
    let roll3 = Math.floor(Math.random() * 6) + 1;
    let roll4 = Math.floor(Math.random() * 6) + 1;
    let roll5 = Math.floor(Math.random() * 6) + 1;

    if ($(".dice-roll").hasClass("active")) {
        return roll1 = $('.die1').text(), roll2 = $('.die2').text(), roll3 = $('.die3').text(), roll4 = $('.die4').text(), roll5 = $('.die5').text()
    } else {
    return document.getElementById('die1').textContent = roll1, document.getElementById('die2').textContent = roll2, document.getElementById('die3').textContent = roll3, document.getElementById('die4').textContent = roll4, document.getElementById('die5').textContent = roll5
}}

function throwDice() {
    rollDie()   
}

$(document).ready(function () {

    //this will attach the class to every target 
    $(".dice-roll").on('click', function (event) {
        $target = $(event.target);   
           $target.toggleClass('active');
       });

   })
