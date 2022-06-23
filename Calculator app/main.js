const themeOneBtn = document.querySelector("#one");
const themeTwoBtn = document.querySelector("#two");
const themeThreeBtn = document.querySelector("#three");

const themeBtn = document.querySelectorAll(".btn-choose");

const selectedNumbers = document.querySelectorAll("#value");
const display = document.querySelector("#display");
const resetBtn = document.querySelector("#reset-btn");
const delBtn = document.querySelector("#del-btn");
const operatorBtn = document.querySelectorAll("#operators");
const equalBtn = document.querySelector('#equal');

const themesForBody = document.querySelector(".body");
const themesForDisplay = document.querySelector(".display");
const themesForHeader = document.querySelector(".header");
const themesForCalculator = document.querySelector(".calculator");
const themesForBtn = document.querySelectorAll(".btn")
const themesForDeleteBtn = document.querySelector(".btn-del");
const themesForResetBtn = document.querySelector(".btn-reset");
const themesForEqualBtn = document.querySelector(".btn-equal");

themeBtn.forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.id==='one'){
      themeOneBtn.classList.remove('non-selected-btn');
      themeTwoBtn.classList.add('non-selected-btn');
      themeThreeBtn.classList.add('non-selected-btn');
      themesOne();
    }
    if(button.id==='two'){
      themeTwoBtn.classList.remove('non-selected-btn');
      themeTwoBtn.classList.add('selected-btn');
      themeOneBtn.classList.add('non-selected-btn');
      themeThreeBtn.classList.add('non-selected-btn');
      themesTwo();
    }
    if(button.id==='three'){
      themeThreeBtn.classList.remove('non-selected-btn');
      themeThreeBtn.classList.add('selected-btn');
      themeOneBtn.classList.add('non-selected-btn');
      themeTwoBtn.classList.add('non-selected-btn');
      themesThree();
    }
  })
});




function theme1() {
  header = document.getElementById("header");
  header.style.color = 'black';
  document.getElementById("body").innerHTML = document.body.style.backgroundImage = "url('/images/WallpaperDog-5549716.jpg')";
  document.getElementById("body").innerHTML = document.body.style.backgroundRepeat = "no-repeat";
  document.getElementById("body").innerHTML = document.body.style.backgroundSize = "cover";
}

function theme2() {
  header = document.getElementById("header");
  header.style.color = 'white';
  document.getElementById("body").innerHTML = document.body.style.backgroundImage = "url('/images/background2.jpg')";
  document.getElementById("body").innerHTML = document.body.style.backgroundRepeat = "no-repeat";
  document.getElementById("body").innerHTML = document.body.style.backgroundSize = "cover";
 
}

function theme3() {
  header = document.getElementById("header");
  header.style.color = 'black';
  document.getElementById("body").innerHTML = document.body.style.backgroundImage = "url('/images/background3.webp')";
  document.getElementById("body").innerHTML = document.body.style.backgroundRepeat = "no-repeat";
  document.getElementById("body").innerHTML = document.body.style.backgroundSize = "cover";
}


/* ---------------------------------------------------------------------------- */

var variables = ['' , ''];
var operator = '';
var id = 0;

function reset(){
  variables = ['',''];
  operator = '';
  id = 0;
  updateScreen();
}

function updateScreen(){
  if(variables[id]=== ''){
    display.innerText = 0;
  } else {
    display.innerText = variables[id];
  }
}

function del(){
  if(variables[id].length > 0){
    variables[id] = variables[id].substr(0, variables[id].length-1);
    updateScreen();
  }
}

function calculate(){
  var res = eval(variables[0]+operator+variables[1]);
  operator = '';
  variables[1] = '';
  variables[0] = res;
  id = 0;
  updateScreen();
}

selectedNumbers.forEach(button => {
  button.addEventListener('click', ()=>{

    const regexp = /^[+-]?[0-9]*([.][0-9]*)?$/;

    if( regexp.test(variables[id]+button.innerText) ){
      variables[id] += button.innerText;
      updateScreen();

    }
  })
})

operatorBtn.forEach(button=>{
  button.addEventListener('click',()=>{
    if(variables[0]==='' && display.innerText !== '0'){
      variables[0] = display.innerText;
    }
    id++;
    switch(button.innerText){
      case '+':
      case '-':
        if(variables[0]===''){
          id--;
          variables[0]+= '-';
        }
        //handling for -1-1 = -2;
      case '/':
        operator = button.innerText;
        break;
      case 'x':
        operator = "*";
    }
  })
})

resetBtn.addEventListener('click',reset);
delBtn.addEventListener('click',del);
equalBtn.addEventListener('click',calculate);