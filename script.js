numberbar.innerText = 0;

function num1() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 1;
  numberbar.innerText = result;
  } else if(numberinput < 999999999) 
  numberbar.append(1); 
}
function num2() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 2;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(2); 
}
function num3() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 3;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(3);
}
function num4() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 4;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(4);
}
function num5() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 5;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(5);
}
function num6() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 6;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(6);
}
function num7() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 7;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(7);
}
function num8() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 8;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(8);
}
function num9() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput == 0) {
  let result = numberinput + 9;
  numberbar.innerText = result;
  } else if(numberinput < 999999999)
  numberbar.append(9);
}
function num0() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput > 0 && numberinput < 999999999) 
  numberbar.append(0);
}
function num00() {
  let numberinput = document.querySelector("#numberbar").innerHTML;
  numberinput = parseFloat(numberinput);
  if(numberinput > 0 && numberinput < 99999999){
    numberinput = numberinput * 100;
    numberbar.innerText = numberinput; 
  }
}
function numback() {
    let numberinput = document.querySelector("#numberbar").innerHTML;
    numberinput = parseFloat(numberinput);
    if(numberinput > 0){
      numberinput = Math.floor(numberinput / 10);
      
      numberbar.innerText = numberinput; 
    }
}
function numdot() {
  numberbar.append(".");
}

function numclear() {
  numberbar.innerText = "0";
}

var firstnumber;
var operator;
var secondnumber;
var percent;
var result;

function numsum() {
  operator = "+";
  firstnumber = document.querySelector("#numberbar").innerHTML;
  firstnumber = parseFloat(firstnumber);
  numberbar.innerText = 0;
}
function numsub() {
  operator = "-";
  firstnumber = document.querySelector("#numberbar").innerHTML;
  firstnumber = parseFloat(firstnumber);
  numberbar.innerText = 0;
}
function nummult() {
  operator = "x";
  firstnumber = document.querySelector("#numberbar").innerHTML;
  firstnumber = parseFloat(firstnumber);
  numberbar.innerText = 0;
}
function numdiv() {
  operator = "&#247";
  firstnumber = document.querySelector("#numberbar").innerHTML;
  firstnumber = parseFloat(firstnumber);
  numberbar.innerText = 0;
}
function numper() {
  operator = "%";
  percent = document.querySelector("#numberbar").innerHTML;
  percent = parseFloat(percent);
  percent = percent / 100;
  numberbar.innerText = percent;
}

function numequal() {
  secondnumber = document.querySelector("#numberbar").innerHTML;
  secondnumber = parseFloat(secondnumber);
  if(operator == "+") {
    result = firstnumber + secondnumber;
  } else if(operator == "-") {
    result = firstnumber - secondnumber;
  } else if(operator == "x") {
    result = firstnumber * secondnumber;
  } else if(operator == "&#247") {
    result = firstnumber / secondnumber;
  } else if(operator == "%") {
    result = firstnumber * percent;
  } 
  if(result < 999999999) {
  numberbar.innerText = result;
  } else
  numberbar.innerText = "error";
}
