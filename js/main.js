// DOMContentLoaded is triggered by the browser when the DOM has been completely loaded:
document.addEventListener('DOMContentLoaded', function() {
  var lightSwitch = document.querySelector('button')
  lightSwitch.addEventListener('click', function(){
      lightSwitch.classList.toggle('off');

  });

});
