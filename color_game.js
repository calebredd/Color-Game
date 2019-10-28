function reset(){
  gray();
  var i=0; 
  while(i<6){
    color[i].style.backgroundColor="rgb("+random()+","+random()+","+random()+")";
    i++;
  };
  answer=color[parseInt(Math.random()*6)].style.backgroundColor;
  title.innerHTML=answer;
  advice.innerHTML="Choose One";
}
function random(){
  return parseInt(Math.random()*255);}
function correct(){
  var i=0;
  while(i<6){
    color[i].style.backgroundColor=answer;
    i++;
  };
  var j=0;
  while(j<2){
    titlebg[j].style.backgroundColor=answer;
    j++;
  }
}
function reset_easy(){
  gray();
  var i=3; 
  while(i<6){
    color[i].style.backgroundColor=white;
    i++;
  }
  for(j=0;j<=2;j++){
    color[j].style.backgroundColor="rgb("+random()+","+random()+","+random()+")";
  }
  answer=color[parseInt(Math.random()*3)].style.backgroundColor;
  title.innerHTML=answer;
  advice.innerHTML="Choose One";
}
function gray(){
  var i=0;
  while(i<2){
    titlebg[i].style.backgroundColor="rgb(155,155,155)";
    i++;
  }
  return;
}

//declare variables:
let answer;
const color=document.querySelectorAll(".color");
const title=document.querySelector("#answer");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const white="rgb(0,0,0)";
const fresh=document.querySelector("#fresh");
const advice=document.querySelector("#advice");
const easy=document.querySelector("#easy");
const hard=document.querySelector("#hard");
const titlebg=document.querySelectorAll(".title");

//initialize page:
reset();
fresh.addEventListener("click",function(){
  reset();
});

//Events:
easy.addEventListener("click",function(){
  easy.style.backgroundColor="rgb(150,150,150)";
  hard.style.backgroundColor="rgb(255,255,255)";
  reset_easy();
  fresh.addEventListener("click",function(){
    reset_easy();
  });
  return;
});
hard.addEventListener("click",function(){
  reset();
  easy.style.backgroundColor="rgb(255,255,255)";
  hard.style.backgroundColor="rgb(150,150,150)";
  fresh.addEventListener("click",function(){
    reset();
  });
  return;
});
one.addEventListener("click",function(){
  if(one.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else{  
    advice.innerHTML="Try Again";
    return one.style.backgroundColor=white;
  }
});
two.addEventListener("click",function(){
  if(two.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else
    advice.innerHTML="Try Again";
    return two.style.backgroundColor=white;
});
three.addEventListener("click",function(){
  if(three.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else
    advice.innerHTML="Try Again";
    return three.style.backgroundColor=white;
});
four.addEventListener("click",function(){
  if(four.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else 
    advice.innerHTML="Try Again";
    return four.style.backgroundColor=white;
});
five.addEventListener("click",function(){
  if(five.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else 
    advice.innerHTML="Try Again";
    return five.style.backgroundColor=white;
});
six.addEventListener("click",function(){
  if(six.style.backgroundColor==answer){
    advice.innerHTML="You Win!";
    return correct();
  }
  else 
    advice.innerHTML="Try Again";
    return six.style.backgroundColor=white;
});

