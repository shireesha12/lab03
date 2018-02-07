/*eslint-env browser*/
// gobal variable
var score1;
var score2;
var score3;
var total = 0;
var average;

// prompt user for the test score
score1 = window.prompt("what is the first score?");
total += parseInt(score1, 10);

score2 = window.prompt("what is the second score?");
total += parseInt(score2, 10);

score3 = window.prompt("what is the third score?");
total += parseInt(score3, 10);

//calculate the average
average = total / 3;

//display the result
document.write("the first score is:" + score1 + "<br>");
document.write("the second score is:" + score2 + "<br>");
document.write("the third score is:" + score3 + "<br>");
document.write("the average score is:" + parseFloat(average));