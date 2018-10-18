var x = 0;
var timer1;
var timer2;
var counter = 0;

function createEl(textContent){
  var element = document.createElement('h3');
  var newContent = document.createTextNode(textContent);
  var div = document.getElementById('timer');
  element.appendChild(newContent);
  div.insertBefore(element, div.childNodes[0]);
  // console.log(element);
}

function setup(){
  timer1 = createEl('timer 1');
  timer2 = createEl('timer 2');
  makeTimer();
}

function makeTimer(){
  var counter = 0;
  setInterval(timeIt, 500);
}

function timeIt(){
  // timer1.html(counter);
  // document.body.innerHTML = counter;
  // createEl('timer1');
  counter++
}

setup();
