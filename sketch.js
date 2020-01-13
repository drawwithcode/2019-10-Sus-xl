let img;
let theta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('addons/map.jpg');
}

function draw() {
  background(250);
  translate(0, 0, 0);


  push();

  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(img);
  sphere(150);
  noStroke();
  pop();
  translate(440, 0, 0);
  theta += 0.005;
}
