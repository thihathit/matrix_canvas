$(document).ready(function(){
  var s = window.screen;
  var width = zmt.width = s.width;
  var height = zmt.height = s.height;
  var letters = Array(256).join(1).split('');

  var draw = function () {

    zmt.getContext('2d').fillStyle='rgba(0,0,0,.1)';
    zmt.getContext('2d').fillRect(0,0,width,height);

    var gradient=zmt.getContext('2d').createLinearGradient(0,0,zmt.width,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");

    // matrix color CHANGE COLOR HERE
      // var mcolor = '#FFFF00';
      // var mcolor = '#FFFF5E';
      var mcolor = gradient;
    // matrix color

    zmt.getContext('2d').fillStyle=mcolor;
    letters.map(function(y_pos, index){
      text = String.fromCharCode(80+Math.random()*33);
      x_pos = index * 10;
      zmt.getContext('2d').fillText(text, x_pos, y_pos);
      letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
  };

  function timeOut(time,func) {
    setTimeout(function(){ func(); }, time);
  }

  setInterval(draw, 18);
  timeOut(1800, function(){
    $('canvas, img').addClass('active');
  });

  var myTimer = 0;
  $(window).resize(function() {
    clearTimeout(myTimer);
    myTimer = window.setTimeout(function() {
      window.location.href = window.location.href;
      window.location.reload();
    }, 300);
  });
});
