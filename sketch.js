var myLoc;
var myMap;
var canvas;
var punto;


var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibWFyaWE5MDJlIiwiYSI6ImNqcDAwMWdxNDJ6ZnUzb3B0aXh6MGNweTEifQ.vb9GG2sGf3vQENmb2iOmTg');

var bolognaLat = 44.4990968;
var bolognaLng = 11.2616454;

var romaLat = 41.909986;
var romaLng = 12.3959128;

var firenzeLat = 43.7799368;
var firenzeLng = 11.1709278;

var napoliLat = 40.8539123;
var napoliLng = 14.1765621;

var cagliariLat = 39.225399;
var cagliariLng = 9.0933585;

var palermoLat = 38.1405228;
var palermoLng = 13.2872482;


var options = {
  lat:romaLat,
  lng: romaLng,
  zoom: 5,
  style: 'mapbox://styles/maria902e/cjp047tix9pm12snoyu8ng79q'
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();

}



function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  //console.log(myLoc);

  myMap = mappa.tileMap(options);
myMap.overlay(canvas);
}


function draw() {
  // put drawing code here
  clear();

var point0 = myMap.latLngToPixel(myLoc.latitude,myLoc.longitude);
var point1 = myMap.latLngToPixel(bolognaLat, bolognaLng);
var point2 = myMap.latLngToPixel(romaLat, romaLng);
var point3 = myMap.latLngToPixel(firenzeLat, firenzeLng);
var point4 = myMap.latLngToPixel(napoliLat, napoliLng);
var point5 = myMap.latLngToPixel(cagliariLat, cagliariLng);
var point6 = myMap.latLngToPixel(palermoLat, palermoLng);

var distance1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, bolognaLat, bolognaLng, "km");
var distance2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, romaLat, romaLng, "km");
var distance3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, firenzeLat, firenzeLng, "km");
var distance4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, napoliLat, napoliLng, "km");
var distance5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, cagliariLat, cagliariLng, "km");
var distance6 = calcGeoDistance(myLoc.latitude, myLoc.longitude, palermoLat, palermoLng, "km");

push();
      stroke('red');
      strokeWeight(3);
      noFill();

    ellipse(point1.x, point1.y, 20);
    ellipse(point2.x, point2.y, 20);
    ellipse(point3.x, point3.y, 20);
    ellipse(point4.x, point4.y, 20);
    ellipse(point5.x, point5.y, 20);
    ellipse(point6.x, point6.y, 20);
    ellipse(point0.x, point0.y, 20);
pop()
push()
     fill('red');
     noStroke();
     textSize(22);
     textStyle(NORMAL);
     text('Bologna',point1.x+10, point1.y);
     text('Roma',point2.x+10, point2.y);
     text('Firenze',point3.x+10, point3.y);
     text('Napoli',point4.x+10, point4.y);
     text('Cagliari',point5.x+10, point5.y);
     text('Palermo',point6.x+10, point6.y);
     text('you are here',point0.x+10, point0.y);
 pop()

push()
 if(mouseIsPressed === true){
   stroke('black');
   strokeWeight(3);
   var d1 = dist(mouseX, mouseY, point1.x, point1.y);
   var d2 = dist(mouseX, mouseY, point2.x, point2.y);
   var d3 = dist(mouseX, mouseY, point3.x, point3.y);
   var d4 = dist(mouseX, mouseY, point4.x, point4.y);
   var d5 = dist(mouseX, mouseY, point5.x, point5.y);
   var d6 = dist(mouseX, mouseY, point6.x, point6.y);


      if (d1 < 50/2){
    line(point0.x, point0.y, point1.x, point1.y);
          textSize(15);
          textStyle(BOLD);
          fill('black');
          noStroke();
    text(distance1 +'km',point1.x+10, point1.y+22);
  } else if (d2 < 50/2){
     line(point0.x, point0.y, point2.x, point2.y);
         textSize(15);
         textStyle(BOLD);
         fill('black');
         noStroke();
     text(distance2 +'km',point2.x+10, point2.y+22);
   } else if (d3 < 50/2){
      line(point0.x, point0.y, point3.x, point3.y);
          textSize(15);
          textStyle(BOLD);
          fill('black');
          noStroke();
      text(distance3 +'km',point3.x+10, point3.y+22);
    } else if (d4 < 50/2){
       line(point0.x, point0.y, point4.x, point4.y);
         textSize(15);
         textStyle(BOLD);
         fill('black');
         noStroke();
       text(distance4 +'km',point4.x+10, point4.y+22);
     } else if (d5 < 50/2){
        line(point0.x, point0.y, point5.x, point5.y);
          textSize(15);
          textStyle(BOLD);
          fill('black');
          noStroke();
        text(distance5 +'km',point5.x+10, point5.y+22);
      } else if (d6 < 50/2){
         line(point0.x, point0.y, point6.x, point6.y);
           textSize(15);
           textStyle(BOLD);
           fill('black');
           noStroke();
         text(distance6 +'km',point6.x+10, point6.y+22);
       }

  }
pop()
push()
textSize(22);
textStyle(BOLD);
fill('red');
text('How far you are from these cities', width/8,height/6)
pop()
push()
textSize(15);
textStyle(NORMAL);
fill('red');
text('press the mouse on the city to find out', width/8,height/5)
pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}
