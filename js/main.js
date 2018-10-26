var startBtn = document.getElementById('start');
var veStart = false; // verification start
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;
var spotList = [];

spotList = ['a','b','c','d','e'

];

function clickedStart(){
  'use strict';
  veStart = true;
  startBtn.disabled = true;
  intervalID = setInterval(function(){
    if(veStart === true){
      place = spotList[Math.floor(Math.random() * spotList.length)];
      roulette.className = 'name';
      document.getElementById('isPlace').innerHTML = place;
    }
  }, 100);
}

function clickedStop(){
  'use strict';
  clearTimeout(intervalID);
  startBtn.disabled = "";
  veStart = false;
  if(place === ''){
    alert("スタートボタンを押してないよ！");
  }else {
    roulette.className = 'name';
    document.getElementById('isPlace').innerHTML = place;
  }
}
