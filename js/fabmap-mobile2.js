//rockmodel
let train;
//aray of thignies
let pictures;

//choose random from array
var rand;
let rnd;

let picturesbrazil=[];
//canvas
let fabb;
//textre
var txtr;
// array
var mimoAmsterdam;
var amst;
var amsty;
var cameraZ = 100;
function preload() {
    //old arrays
    mimoAmsterdam = ["mimoTraces/	003.jpg	",
"mimoTraces/	004.jpg	",
"mimoTraces/	005.jpg	",
"mimoTraces/	025.png	",
"mimoTraces/	026.png	",
"mimoTraces/	027.png	",
"mimoTraces/	028.png	",
"mimoTraces/	029.png	",
"mimoTraces/	030.png	",
"mimoTraces/	031.png	",
"mimoTraces/	032.png	",
"mimoTraces/	033.png	",
"mimoTraces/	034.png	",
"mimoTraces/	035.png	",
"mimoTraces/	036.png	",
"mimoTraces/	037.png	",
"mimoTraces/	038.png	",
"mimoTraces/	102.jpg	",
"mimoTraces/	103.jpg	",
"mimoTraces/	104.jpg	",
"mimoTraces/	105.jpg	",
"mimoTraces/	106.jpg	",
"mimoTraces/	107.jpg	",
"mimoTraces/	108.jpg	",
"mimoTraces/	109.jpg	",
"mimoTraces/	110.jpg	",
"mimoTraces/	121.jpg	",
"mimoTraces/	122.jpg	",
"mimoTraces/	123.jpg	",
"mimoTraces/	124.jpg	",
"mimoTraces/	125.jpg	",
"mimoTraces/	126.jpg	",
"mimoTraces/	127.jpg	",
"mimoTraces/	128.jpg	",
"mimoTraces/	212.jpg	",
"mimoTraces/	213.jpg	",
"mimoTraces/	214.jpg	",
"mimoTraces/	215.jpg	",
"mimoTraces/	230.jpg	",
"mimoTraces/	231.jpg	",
"mimoTraces/	232.jpg	",
"mimoTraces/	233.jpg	",
"mimoTraces/	235.jpg	",
"mimoTraces/	236.jpg	",
"mimoTraces/	325.jpg	"];
    picturesbrazil = [];


     pictures = ['thingies/beige.png',
                  'thingies/pinkpatch.png',
                  'thingies/plantplastic.png',
                  'thingies/polkaslink.png',
                  'thingies/posterpatch.png',
                  'thingies/posters.png',
                  'thingies/prepillowcreature.png'
                ];
      rand = loadImage(random(pictures));
      amst = loadImage(random(mimoAmsterdam));

      train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
      // amsty = amst.txtr();

}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');
  txtr = texture(rand);
  amsty = texture(amst);
  button = createButton('+');
  button.position(19, 19);
  button.mousePressed(zoomOut);

  button2 = createButton('-');
  button2.position(19, 40);
  button2.mousePressed(zoomIn);
}

function thingies() {
  preload();
  setup();
}

var tr;
function draw() {
  camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  background(0, 0, 0, 0.2);
  noStroke();

  push();
  txtr;
  translate(0, 0, 800);
  box(50);
  pop();

  translate(0, 200, -400);
  push();
  txtr;
  box(50);
  pop();

  translate(0, 0, -400);
  push();
  amsty;
  plane(50);
  pop();
//
// //make 5 rocks
//   rotateY(frameCount * 0.01);
//   for (let j = 0; j < 5; j++) {
//    push();
//    for (let i = 0; i < 2; i++) {
//      translate(
//        sin(frameCount * 0.02 + j) * 100,
//        -cos(frameCount * 0.001 + j) * 100,
//        sin(frameCount * 0.001 + j) * 100,
//      );
//      i * 0.1
//      rotateZ(frameCount * 0.002);
//   push();
//   noStroke();
//   scale(100);
//   txtr;
//   // plane(50);
//   model(train);
//   pop();
//   tr = 0;
//   }
// }
// pop();

}

function texturefromArray(array, variab){
  let x = loadImage(random(array));
  variab = texture(x);
}

// function mousePressed(){
//   texturefromArray(pictures, txtr);
//   texturefromArray(pictures, amsty);
// }

function zoomOut() {
  cameraZ = cameraZ+100;
  console.log(cameraZ);
}
function zoomIn() {
  cameraZ = cameraZ-100;
  console.log(cameraZ);
}
//
// function TexturefromArray(array, varb) {
//   this.array = array;
//   this.varb = varb;
//   this.txtr = function(){
//     loadImage(random(this.array));
//   };
  // this.txtrr = function(){
  //   texture(this.txtr);
  //   // console.log(this.varb);
  // };
// }
//this function works if you do it all manually first and then call this function to modify it but not to create
function texturefromArray(array, variab){
  let x = loadImage(random(array));
  variab = texture(x);
}
