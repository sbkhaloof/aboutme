'use strict'
alert('welcome to my page , you will spent fun time here');
console.log('welcome to my page');
alert('what is your name?');
let name = prompt('please enter your name');
let familyname = prompt('please enter your family name ');
console.log('welcome ' + name + ' ' + familyname);
alert(' here are group of yes or no questions game');
alert('lets start the game')
function question1(){
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
};}
question1();

alert('now lets start with second part');
alert('there is question takes a numerical answer');
console.log('here is question takes a numerical answer');
function question2 (){
let mynum=5;
for (let i = 1; i <= 4; i++) {
    alert('what is my lucky number');
    let luckynum = parseInt(prompt('please enter my luck number')); 
    if (luckynum ===mynum) { alert( ' correct'); }
    else if (luckynum < mynum) { alert(luckynum + ' is too low'); }
    else if (luckynum > mynum) { alert(luckynum + ' is too high'); }
} console.log('my lucky number is 5');
};
question2();

alert('ok what is about bad number for me , lets start');
function question3(){
let mynum2=13;
for (let i = 1; i <= 4; i++) {
    alert('what is my bad number');
    let badnum =parseInt( prompt('enter my bad number'));
    if (badnum > mynum2) { alert(badnum + ' is too high'); }
    else if (badnum < mynum2) { alert(badnum + ' is too low'); }
    else if (badnum === mynum2) { alert('my bad number is 13'); }
} console.log('my bad number is 13');
};
question3();
alert('this is thired part of our game');
alert('please guess the answer to have good score');
function question4(){
let letters = ['a', 'g', 's', 'r', 'b', 'm', 'd'];
let flag = false;
let score = 0;
for (let attemp=1; attemp < 6; attemp++) {
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
};
question4();
alert('the second question for this part');
function question5(){
let numbers = [7,3,6,10,12];
let flag1 = false;
let score1 = 0;
for (let attemp=1; attemp < 6; attemp++) {
    let useans1 = parseInt(prompt('please guss the number'));
    let y= numbers.indexOf(useans1)
        if (y> -1) {
        flag1= true;
        score1++;
    }
}
alert('the correct answer must be one of 7,3,6,10,12');
console.log('your score is ' + score1 + ' /7');
alert('your score is ' + score1 + '/7');
<<<<<<< HEAD

=======
};
question5();
>>>>>>> 2f1b3799f4edd17d274d060bd602728d87e8d415
alert('thank you ' + name);
alert('thank you for your visit');