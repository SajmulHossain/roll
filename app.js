let upperValue = 6;
let lowerValue = 1;



function rollDice() {
    let result = Math.ceil(Math.random() * upperValue);
    let src = 'img/' + result + '.png' ;
    document.getElementById('img1').src = src;
}


