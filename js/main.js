function init() {
//drawing on canvas
  var pCount = 0; //player count
  var playerArray = [];
  var myArray = ["blue", "green","yellow","red"];
  var aiArray = [];

  //using easeljs framework
  var canvas = document.getElementById("myCanvas");
  var stage = new createjs.Stage(canvas);

  var startButton = new createjs.Shape();
  startButton.graphics.f("DeepSkyBlue").dc(50, 50, 30);
  stage.addChild(startButton);
  var fillCommand4 = startButton.graphics.f("DeepSkyBlue").command;

  startButton.on("click", function(event) {
   if(fillCommand4.style === "DeepSkyBlue") {fillCommand4.style = "red";}
    else if (fillCommand4.style === "red") {fillCommand4.style = "DeepSkyBlue";}

  });
  //~~~~~~~~~~~~~~~~~~~~~~~~~~ big circle Shape ~~~~~~~~~~
  var bigCircle = new createjs.Shape();
  bigCircle.graphics.f("DeepSkyBlue").dc(50, 160, 50);
  stage.addChild(bigCircle);

  var bigCircle1 = new createjs.Shape();
  bigCircle1.graphics.f("DeepSkyBlue").dc(50, 270, 50);
  stage.addChild(bigCircle1);

  var bigCircle2 = new createjs.Shape();
  bigCircle2.graphics.f("DeepSkyBlue").dc(50, 380, 50);
  stage.addChild(bigCircle2);

  var bigCircle3 = new createjs.Shape();
  bigCircle3.graphics.f("DeepSkyBlue").dc(50, 490, 50);
  stage.addChild(bigCircle3);



  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);

//end of drawing on canvas ~~~~~~~~~~~~~~~~
   function random(min, max) { //randomizer function
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
