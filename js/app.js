'use strict'
alert('welcome to my page , you will spent fun time here');
console.log('welcome to my page');
alert('what is your name?');
let name = prompt('please enter your name');
let familyname = prompt('please enter your family name ');
console.log('welcome ' + name + ' ' + familyname);
alert(' here are group of yes or no questions game');
alert('lets start the game')
alert('are you new graduatied person?')
let answ1 = prompt('enter your answer ').toLowerCase();
if (answ1 === 'yes' || answ1 === 'y') {
    alert('are you search for job now?')
    let jobnow = prompt('enter your answer').toLowerCase()
    if (jobnow === 'yes' || jobnow === 'y') {
        alert('do you have a good cv?');
        let cv = prompt('enter your answer').toLowerCase()
        if (cv === 'yes' || cv === 'y') { console.log('i have good cv') } else { alert('i do not have a good one , i will work on it'); console.log('i do not have a good one , i will work on it'); }
        alert('do you have a driving license?')
        let drive = prompt('enter your answer').toLowerCase();
        if (drive === 'yes' || drive === 'y') { console.log('yes i have driving license.'); } else { alert('i should take driving license soon.'); console.log('i should take driving license soon.'); }
        alert('do you have a linkedin account?')
        let linkedin = prompt('enter your answer').toLowerCase();
        if (linkedin === 'yes' || linkedin === 'y') { console.log('yes i have alinkedin account.'); } else { alert('try to sign up and have a account'); console.log('try to sign up and have a account'); }
        console.log('good luck');
    }
    else { console.log('try think in your future'); alert('try think in your future'); }
}
else {
    alert('do you have job now?');
    let jobnow = prompt('enter your answer').toLowerCase();
    if (jobnow === 'yes' || jobnow === 'y') { console.log('i am happy for this news ,good luck'); }
    else {
        alert('do you have a good cv?');
        let cv = prompt('enter your answer').toLowerCase()
        if (cv === 'yes' || cv === 'y') { alert('i have good cv') } else { alert('i do not have a good one , i will work on it'); console.log('i do not have a good one , i will work on it'); }
        alert('do you have a driving license?')
        let drive = prompt('enter your answer').toLowerCase();
        if (drive === 'yes' || drive === 'y') { console.log('yes i have driving license.'); } else { alert('i should take driving license'); console.log('i should take driving license soon.'); }
        alert('do you have a linkedin account?')
        let linkedin = prompt('enter your answer').toLowerCase();
        if (linkedin === 'yes' || linkedin === 'y') { console.log('yes i have alinkedin account.'); }
        else { alert('try to sign up and have a account'); console.log('try to sign up and have a account'); }
    }
    { console.log('try think in your future') }
}
alert('now lets start with second part');
alert('there is question takes a numerical answer');
console.log('here is question takes a numerical answer');

for (let i = 1; i <= 4; i++) {
    alert('what is my lucky number');
    let luckynum = prompt('enter my lucky number');
    if (luckynum > 5) { alert(luckynum + ' is too high'); }
    else if (luckynum < 5) { alert(luckynum + ' is too low'); }
    else if (luckynum === 5) { alert('my lucky number is 5'); }
} console.log('my lucky number is 5');
alert('ok what is about bad number for me , lets start');
for (let i = 1; i <= 4; i++) {
    alert('what is my bad number');
    let badnum = prompt('enter my bad number');
    if (badnum > 13) { alert(badnum + ' is too high'); }
    else if (badnum < 13) { alert(badnum + ' is too low'); }
    else if (badnum === 13) { alert('my bad number is 13'); }
} console.log('my bad number is 13');
// for (let i = 1; i <= 4; i++) {
//     alert('what is the month which i was born in?');
//     let bornmon = prompt('enter my month as number');
//     if (bornmon > 11) { console.log(bornmon + ' is too high'); }
//     else if (bornmon < 3) { console.log(bornmon + ' is too low'); }
//     else if (bornmon === 5) { console.log(' i born in may'); }
// } console.log(' i born in may');
// for (let i = 1; i <= 4; i++) {
//     alert('what is the day which i was born in?');
//     let bornday = prompt('enter my day as number');
//     if (bornday > 18) { console.log(bornday + ' is too high'); }
//     else if (bornday < 3) { console.log(bornday + ' is too low'); }
//     else if (bornday === 16) { console.log(' 16 is my born day'); }
// } console.log(' 16 is my born day')
// alert('i will ask about my family now');
// for (let i = 1; i <= 4; i++) {
//     alert('how many my brothers?');
//     let bronum = prompt('enter my brothers number');
//     if (bronum > 6) { console.log(bronum + ' is too high'); }
//     else if (bronum < 1) { console.log(bronum + ' is too low'); }
//     else if (bronum === 2) { console.log(' i have two brothers'); }
// } console.log(' i have two brothers');
// for (let i = 1; i <= 4; i++) {
//     alert('how many my sisters?');
//     let sisnum = prompt('enter my sisters number');
//     if (sisnum > 6) { console.log(sisnum + ' is too high'); }
//     else if (sisnum < 1) { console.log(sisnum + ' is too low'); }
//     else if (sisnum === 2) { console.log(' i have two sisters'); }
// }
// console.log(' i have two sisters');
alert('this is thired part of our game');
alert('please guess the answer to have good score');
let letters = ['a', 'g', 's', 'r', 'b', 'm', 'd'];

let flag = false;
let score = 0;
for (let i = 0; i < letters.length; i++) {
    let useans = prompt('what is my fav letter').toLowerCase();
    let x= letters.indexOf(useans)
        if (x> -1) {
        flag = true;
        score++;
    }
}
alert('the correct answer must be one of a, g,s,r,b,m,d');
console.log('your score is ' + score + ' /7');
alert('your score is ' + score + '/7');

alert('thank you ' + name);
alert('thank you for your visit');