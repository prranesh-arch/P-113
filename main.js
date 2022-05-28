function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video,220,120,220,220);
  fill(255,0,0);
  circle(70, 70, 80);
  fill(255,0,0);
  circle(70, 360, 80);
  fill(255,0,0);
  circle(500, 70, 80);
  fill(255,0,0);
  circle(500, 360, 80);
  fill(0,255,0)
  rect(100, 55, 370, 25);
  fill(0,255,0)
  rect(100, 350, 370, 25);
  fill(0,255,0)
  rect(60, 100, 25, 230);
  fill(0,255,0)
  rect(490, 100, 25, 230);
}


function take_snapshot() {
 save('student_name.png');
}
