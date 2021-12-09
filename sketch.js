var runner, runner_running;
var pistaImage, pista
var sprite1, sprite2;
function preload(){
  //imagens pré-carregadas
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pistaImage = loadImage("path.png");
}

function setup(){
  //crie os sprites aqui
  createCanvas(400,600);
  pista = createSprite(198,300,200,200);
  pista.addImage("pathImage", pistaImage)
  runner = createSprite(80,500,400,200);
  runner.addAnimation("runner", runner_running);
  sprite1 = createSprite(390,300,10,600);
  sprite2 = createSprite(10,300,10,600);
  
  sprite1.visible = false;
  sprite2.visible = false
   
  pista.scale = 1.2;
  runner.scale = 0.05;

  pista.velocityY = 10;
}

function draw() {
  background("black");
  drawSprites();
  if(pista.y > 400){
    pista.y = pista.height/4
  }
  if(runner.x < 350){
    runner.x = 350;
  }
  if(runner.x > 50){
    runner.x = 50;
  }
    runner.x = World.mouseX;
  

  runner.collide(sprite1);
  runner.collide(sprite2);

}
