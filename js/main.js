// DOMContentLoaded is triggered by the browser when the DOM has been completely loaded:
document.addEventListener('DOMContentLoaded', function() {
  var lightSwitch = document.querySelector('button');
  var body        = document.querySelector('body');
  var status      = document.querySelector('h1');
  lightSwitch.addEventListener('click', function(){
      lightSwitch.classList.toggle('off');
      body.classList.toggle('dark');
      if (lightSwitch.classList.contains('off') ){
      status.innerHTML = "Hey, who turned off the lights?";
    } else {
      status.innerHTML = "It's so bright in here!";
    }
  });

});
