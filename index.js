//check dob leap year?
console.log('check whether your dob is leap year?')
var readlineSync = require('readline-sync');
var userAns = readlineSync.question('enter your dob? ');
var leapData=userAns%4
if (leapData===0){console.log('your dob is leap year')}
else(console.log('your dob is not leap year'))

