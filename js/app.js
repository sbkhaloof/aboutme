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
if (answ1 === 'yes' || answ1==='y') 
{
    alert('are you search for job now?')
    let jobnow = prompt('enter your answer').toLowerCase()
    if (jobnow === 'yes'|| jobnow==='y') {
        alert('do you have a good cv?');
        let cv = prompt('enter your answer').toLowerCase()
        if (cv === 'yes'||cv==='y') { console.log('i have good cv') }else {alert('i do not have a good one , i will work on it');console.log('i do not have a good one , i will work on it');}
        alert('do you have a driving license?')
        let drive = prompt('enter your answer').toLowerCase();
        if (drive === 'yes'|| drive==='y') { console.log('yes i have driving license.'); }else { alert('i should take driving license soon.');console.log('i should take driving license soon.'); }
        alert('do you have a linkedin account?')
        let linkedin = prompt('enter your answer').toLowerCase();
        if (linkedin === 'yes'||linkedin==='y') { console.log('yes i have alinkedin account.'); } else { alert('try to sign up and have a account');console.log('try to sign up and have a account'); }
    }
    else { console.log('try think in your future');alert('try think in your future'); }
}
else {
    alert('do you have job now?');
    let jobnow = prompt('enter your answer').toLowerCase();
    if (jobnow === 'yes'|| jobnow==='y') { console.log('i am happy for this news ,good luck'); }
    else {
        alert('do you have a good cv?');
        let cv = prompt('enter your answer').toLowerCase()
        if (cv === 'yes'||cv==='y') { alert('i have good cv') }else {alert('i do not have a good one , i will work on it');console.log('i do not have a good one , i will work on it');}
        alert('do you have a driving license?')
        let drive = prompt('enter your answer').toLowerCase();
        if (drive === 'yes'||drive==='y') { console.log('yes i have driving license.'); }else {alert('i should take driving license'); console.log('i should take driving license soon.') ;}
        alert('do you have a linkedin account?')
        let linkedin = prompt('enter your answer').toLowerCase();
        if (linkedin === 'yes'||linkedin==='y') { console.log('yes i have alinkedin account.'); }
        else {alert('try to sign up and have a account'); console.log('try to sign up and have a account'); }
    }
     { console.log('try think in your future') }
}
alert('thank you '+ name);

alert('thank you for your visit');