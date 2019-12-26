$(document).ready(function() {
  
  setInterval(function(){
    getTime();
  }, 50);
  
  function getTime() {
    var d = new Date();
    
    var s = d.getSeconds() + (d.getMilliseconds()/1000);
    var m = d.getMinutes();
    var h = hour12();
    
    $(".seconds").css("transform", "translate(-50%, -100%) rotate(" + s*6 + "deg)");
    $(".minutes").css("transform", "translate(-50%, -100%) rotate(" + m*6 + "deg)");
    $(".hours").css("transform", "translate(-50%, -100%) rotate(" + (h*30 + m*0.5) + "deg)");
    
    function hour12() {
      var hour = d.getHours();

      if(hour >= 12) {
        hour = hour-12;
      }

      if(hour == 0) {
        h = 12;
      }
      return hour;
    }
  }
});


// var hoursHand = document.getElementById('hours'),
//     minutesHand = document.getElementById('minutes'),
//     secondsHand = document.getElementById('seconds'),
//     date,
//     hours,
//     minutes,
//     seconds;

// function updateHands() {
//   date = new Date();
//   hours = date.getHours();
//   minutes = date.getMinutes();
//   seconds = date.getSeconds();

//   if (hours > 12) {
//     hoursHand.style.transform = 'translate(50%, 100%) rotate(' + ((hours - 12) * 30 + minutes * 0.5) + 'deg)';
//   } else if (hours <= 12) {
//     hoursHand.style.transform = 'translate(50%, 100%) rotate(' + ((hours * 30) + minutes * 0.5) + 'deg)';
//   }

//   minutesHand.style.transform = 'translate(50%, 100%) rotate(' + (minutes) * 6 + 'deg)';

//   secondsHand.style.transform = 'translate(50%, 100%) rotate(' + (seconds) * 6 + 'deg)';
// }
// updateHands();

// window.setInterval(function() {
//   updateHands();
// }, 1000);