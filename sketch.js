var clicks=0;
var locationA;
var screenShake=0;
var multi=1;
var auto=1;
var value=1;
var screen=0;
var clock=0;
var sprites=[
[0,0,0,0,0,[0,0,0]],[200,200,50,50,"ClickingBox",[0,255,0]],[350,50,50,50,"shopButton",[255,125,50]],[10,20,20,"3DS","text",[0,0,0]],[332,50,15,"Shop","text",[0,0,0]]]
var moveUp=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(25)
  fill(0,0,0);
  rectMode(CENTER)
  noStroke();
  sprites=changeText(sprites,10,20,20,"Clicks: "+clicks)
  if(screen=="shop"){
sprites=changeText(sprites,35,100,8,"Cost: "+multi*multi*25)
    sprites=changeText(sprites,35,200,8,"Cost: "+auto*auto*50)
    sprites=changeText(sprites,35,300,8,"Cost: "+value*value*25)
  }
  renderSprites(sprites)
if(screenShake>0){
screenShake--
}
if(screen!=="shop"){
if(clock>60&&auto!==1){
clicks+=Math.round((value*multi*auto)/3);
screenShake=cap(screenShake+=5,10)
clock=0;
}
clock++}
}

function mousePressed(){
locationA=findBox(sprites,"ClickingBox");
if(mouseX>sprites[locationA][0]-sprites[locationA][2]/2&&mouseX<sprites[locationA][0]+sprites[locationA][2]/2&&mouseY>sprites[locationA][1]-sprites[locationA][3]/2&&mouseY<sprites[locationA][1]+sprites[locationA][3]/2){
clicks+=value*multi
screenShake=cap(screenShake+=5,10)
}else{
locationA=findBox(sprites,"shopButton");
if(mouseX>sprites[locationA][0]-sprites[locationA][2]/2&&mouseX<sprites[locationA][0]+sprites[locationA][2]/2&&mouseY>sprites[locationA][1]-sprites[locationA][3]/2&&mouseY<sprites[locationA][1]+sprites[locationA][3]/2){
if(screen!=="shop"){
screen="shop"
sprites=[[0,0,0,0,0,[0,0,0]],[75,300,0,0,"ClickingBox",[0,255,0]],[350,50,50,50,"shopButton",[255,125,50]],[10,20,20,"3DS","text",[0,0,0]],[327,50,15,"Return","text",[0,0,0]],[50,100,50,50,"Upgrade1",[255,100,255]],[50,200,50,50,"Upgrade2",[255,100,255]],[50,300,50,50,"Upgrade3",[255,100,255]],
[100,100,10,"(Upgrade 1) Multiplies your click value","text",[0,0,255]],[100,200,10,"(Upgrade 2) Buys and Upgrades the auto-clicker","text",[0,0,255]],[100,300,10,"(Upgrade 3) Upgrades click value","text",[0,0,255]],
[35,100,8,"Cost: 1","text",[0,0,0]],[35,200,8,"Cost: 1","text",[0,0,0]],[35,300,8,"Cost: 1","text",[0,0,0]]]
}else{
screen="home";
sprites=[
[0,0,0,0,0,[0,0,0]],[200,200,50,50,"ClickingBox",[0,255,0]],[350,50,50,50,"shopButton",[255,125,50]],[10,20,20,"3DS","text",[0,0,0]],[332,50,15,"Shop","text",[0,0,0]]]
}
}else{
if(screen=="shop"){
locationA=findBox(sprites,"Upgrade1");
if(mouseX>sprites[locationA][0]-sprites[locationA][2]/2&&mouseX<sprites[locationA][0]+sprites[locationA][2]/2&&mouseY>sprites[locationA][1]-sprites[locationA][3]/2&&mouseY<sprites[locationA][1]+sprites[locationA][3]/2){
if(multi*multi*25<=clicks){
clicks-=multi*multi*25
multi++;
}
}else{
locationA=findBox(sprites,"Upgrade2");
if(mouseX>sprites[locationA][0]-sprites[locationA][2]/2&&mouseX<sprites[locationA][0]+sprites[locationA][2]/2&&mouseY>sprites[locationA][1]-sprites[locationA][3]/2&&mouseY<sprites[locationA][1]+sprites[locationA][3]/2){
if(auto*auto*50<=clicks){
clicks-=auto*auto*50
auto++;
}
}else{
locationA=findBox(sprites,"Upgrade3");
if(mouseX>sprites[locationA][0]-sprites[locationA][2]/2&&mouseX<sprites[locationA][0]+sprites[locationA][2]/2&&mouseY>sprites[locationA][1]-sprites[locationA][3]/2&&mouseY<sprites[locationA][1]+sprites[locationA][3]/2){
if(value*value*25<=clicks){
clicks-=value*value*25
value++;
}
}
}
}
}
}
}
}

function cap(cappednumber, cap){
if(cappednumber>cap){
return cap
}else{
return cappednumber}
}

function renderSprites(table,g){
g=0;
while(table[g]!==undefined){
fill(table[g][5][0],table[g][5][1],table[g][5][2])
strokeWeight(5)
stroke(0,0,0)
if(table[g][4]!=="text"){
if(table[g][4]=="ClickingBox"){
rect(table[g][0],table[g][1]-screenShake,table[g][2],table[g][3]);}else{
rect(table[g][0],table[g][1],table[g][2],table[g][3]);
}}else{
noStroke();
textSize(table[g][2])
text(str(table[g][3]),table[g][0],table[g][1]);
}
g++;
}
}

function findBox(table,thing,g){
g=0;
while(table[g][4]!==thing&&table[g]!==undefined){
g++;
}
return g
}

function changeText(table,x,y,textsize,textInsert,textLocation){
textLocation=findText(table,x,y,textsize)
table[textLocation][3]=textInsert;
return table;
}

function findText(table,x,y,textsize,g){
g=0;
while(table[g][0]!==x||table[g][1]!==y||table[g][2]!==textsize||table[g][4]!=="text"&&table[g]!==undefined){
g++;
}
return g;
}

function keyPressed(){
if(screen!=="shop"){
clicks+=value*multi
screenShake=cap(screenShake+=5,10)}}
