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
  var fillCommand4 = startButton.graphics.f("DeepSkyBlue").command;
  startButton.graphics.s("DeepSkyBlue").dc(50, 50, 30);
  stage.addChild(startButton);

  startButton.on("click", function(event) { // toggles start button on/off
   if(fillCommand4.style === "DeepSkyBlue") {fillCommand4.style = "red";}
    else if (fillCommand4.style === "red") {fillCommand4.style = "DeepSkyBlue";}

  });
  //~~~~~~~~~~~~~~~~~~~~~~~~~~ big circle Shape ~~~~~~~~~~
  var bigCircle = new createjs.Shape();
  var fillCommand = bigCircle.graphics.f("DeepSkyBlue").command;
  bigCircle.graphics.s("DeepSkyBlue").dc(50, 160, 50);
  stage.addChild(bigCircle);

  var bigCircle1 = new createjs.Shape();
  var fillCommand1 = bigCircle1.graphics.f("DeepSkyBlue").command;
  bigCircle1.graphics.s("DeepSkyBlue").dc(50, 270, 50);
  stage.addChild(bigCircle1);

  var bigCircle2 = new createjs.Shape();
  var fillCommand2 = bigCircle2.graphics.f("DeepSkyBlue").command;
  bigCircle2.graphics.s("DeepSkyBlue").dc(50, 380, 50);
  stage.addChild(bigCircle2);

  var bigCircle3 = new createjs.Shape();
  var fillCommand3 = bigCircle3.graphics.f("DeepSkyBlue").command;
  bigCircle3.graphics.s("DeepSkyBlue").dc(50, 490, 50);
  stage.addChild(bigCircle3);

// ~~~~~~Moouse over circle commands ~~~~~~~~~~~~~~~~~~
bigCircle.on("mousedown", function(event) {
   fillCommand.style = "#00e600";
 });
 bigCircle.on("click", function(event) {
   fillCommand.style = "DeepSkyBlue";
 });

 bigCircle1.on("mousedown", function(event) {
    fillCommand1.style = "#00e600";
  });
  bigCircle1.on("click", function(event) {
    fillCommand1.style = "DeepSkyBlue";
  });

  bigCircle2.on("mousedown", function(event) {
     fillCommand2.style = "#00e600";
   });
   bigCircle2.on("click", function(event) {
     fillCommand2.style = "DeepSkyBlue";
   });

   bigCircle3.on("mousedown", function(event) {
      fillCommand3.style = "#00e600";
    });
    bigCircle3.on("click", function(event) {
      fillCommand3.style = "DeepSkyBlue";
    });

// ~~~~~~~~~~~~  startButton text ~~~~~~~~~~~~~~~~~
    var press = new createjs.Text("Press", "bold 15px Arial", "black");
    var start = new createjs.Text("Start", "bold 15px Arial", "black");
      press.x = 30; press.y = 30;
      start.x = 32; start.y = 44;
      stage.addChild(start, press);


  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);

//end of drawing on canvas ~~~~~~~~~~~~~~~~
   function random(min, max) { //randomizer function
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
