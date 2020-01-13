let img;
let theta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('addons/map.jpg');
}

function draw() {
  background('#97CBD5');
  translate(0, 0, 0);


  push();

  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);

  let locX = mouseX - width / 6;
  let locY = mouseY - height / 6;
  pointLight(250, 250, 250, locX, locY, 1500);

  texture(img);
  noStroke();
  sphere(200);

  pop();
  translate(440, 0, 0);
  theta += 0.005;
}
