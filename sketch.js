
function setup() {
  createCanvas(400,400);
  redButton = createButton("RED");
  redButton.position(100, 50);
  redButton.mouseClicked(red_bg)

  greenButton = createButton("GREEN");
  greenButton.position(200, 50);
  greenButton.mouseClicked(green_bg);

}

function draw() 
{
  //background(30);

}

function red_bg()
{
  background("red")
}
function green_bg() {
  background("green")
}




