const frontEnd = document.getElementById("frontEnd");
const backEnd = document.getElementById("backEnd");
const android =document.getElementById("android");
const ios = document.getElementById("ios");
const devops = document.getElementById("devops");
const design = document.getElementById("design");
const Ai = document.getElementById("ai");

let FE = false;
let BE = false;
let AND = false;
let IOS = false;
let DEV = false;
let DS = false;
let AI = false;



function selectMajorFE() {
  FE = !FE;
  if(FE){
  frontEnd.style.backgroundColor = '#FFDC5F';
  frontEnd.style.color = 'blue';
  }
  else{
    frontEnd.style.backgroundColor = 'gainsboro';
    frontEnd.style.color = 'black';
  }
}
function selectMajorBE() {
  BE = !BE;
  if(BE){
  backEnd.style.backgroundColor = '#FFDC5F';
  backEnd.style.color = 'rgb(255, 255, 255)';
  } else{
    backEnd.style.backgroundColor = 'gainsboro';
    backEnd.style.color = 'black';
  }
}
function selectMajorAND() {
  AND = !AND;
  if(AND){
  android.style.backgroundColor = '#FFDC5F';
  android.style.color = 'rgb(255, 255, 255)';
  } else{
    android.style.backgroundColor = 'gainsboro';
    android.style.color = 'black';
  }
}
function selectMajorIOS() {
  IOS = !IOS;
  if(IOS){
  ios.style.backgroundColor = '#FFDC5F';
  ios.style.color = 'rgb(255, 255, 255)';
  } else{
    ios.style.backgroundColor = 'gainsboro';
    ios.style.color = 'black';
  }
}
function selectMajorDEV() {
  DEV = !DEV;
  if(DEV){
  devops.style.backgroundColor = '#FFDC5F';
  devops.style.color = 'rgb(255, 255, 255)';
  } else{
    devops.style.backgroundColor = 'gainsboro';
    devops.style.color = 'black';
  }
}
function selectMajorDS() {
  DS = !DS;
  if(DS){
  design.style.backgroundColor = '#FFDC5F';
  design.style.color = 'rgb(255, 255, 255)';
  } else{
    design.style.backgroundColor = 'gainsboro';
    design.style.color = 'black';
  }
}
function selectMajorAI() {
  AI = !AI;
  if(AI){
  Ai.style.backgroundColor = '#FFDC5F';
  Ai.style.color = 'rgb(255, 255, 255)';
  } else{
    Ai.style.backgroundColor = 'gainsboro';
    Ai.style.color = 'black';
  }
}

function printText() {
  const name = document.getElementById('text').value;
  result.innerHTML+= name;
  result.innerHTML+= '<br>';
}

/*const major = document.getElementById('major');
  major.addEventListener('mouseover', (event) => { 
  document.getElementById('frontEnd').style.display='block';
  document.getElementById('backEnd').style.display='block';
  document.getElementById('android').style.display='block';
  document.getElementById('ios').style.display='block';
  document.getElementById('devops').style.display='block';
  document.getElementById('design').style.display='block';
  }
);

const majorBox = document.getElementById('major-box');
  majorBox.addEventListener('mouseout', (event) => { 
  document.getElementById('frontEnd').style.display='none';
  document.getElementById('backEnd').style.display='none';
  document.getElementById('android').style.display='none';
  document.getElementById('ios').style.display='none';
  document.getElementById('devops').style.display='none';
  document.getElementById('design').style.display='none';
  }
);*/
