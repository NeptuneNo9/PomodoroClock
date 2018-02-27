$(document).ready(function(){
  
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var bcount = parseInt($("#breakNum").html());
  console.log(count);
  $("#reset").hide();
  
  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    count *= 60;
    bcount *= 60;
    
    function timer(){
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
      $("#timeType").show();
      $("#timeType").html("Session Time: ");
      count -= 1; //one second
      
      if(count===0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      
      if(count%60 >= 10){
         $("#num").html(Math.floor(count/60) + ":" + count%60);
      }
      else {
        $("#num").html(Math.floor(count/60) + ":" + "0" + count%60)
      }
      
    function breakTimer() {
      $("#timeType").html("Break Time: ");
      $("#breakNum").show();
      $("#timeType").show();
      bcount -= 1;
      
      if(bcount===0) {
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#breakNum").hide();
        $("#timeType").hide(); //강의에 없던 것
      }
      
      if(bcount%60 >= 10){
         $("#breakNum").html(Math.floor(bcount/60) + ":" + bcount%60);
      }
      else {
         $("#breakNum").html(Math.floor(bcount/60) + ":" + "0" + bcount%60);
      }
    }
    }
  });
  
  $("#reset").click(function(){
    count = 25;
    bcount = 25;
    $("#num").html(count);
    $("#breakNum").html(bcount);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add6Break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();
  });
  
  $("#minus5Clock").click(function(){
    if(count > 5) {
      count -= 5;
      $("#num").html(count);
    }
  });
  
  $("#add5Clock").click(function(){
    count += 5;
    $("#num").html(count);
  });
  
  $("#minus5Break").click(function(){
    if(bcount > 5) {
      bcount -= 5;
      $("#breakNum").html(bcount);
    }
  });
  
  $("#add5Break").click(function(){
    bcount += 5;
    $("#breakNum").html(bcount);
  });
  
});
