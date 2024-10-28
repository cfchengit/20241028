let angle = 0
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER) //畫方形以中心點為座標點
  noFill()  //方形不填入顏色
  angleMode(DEGREES) //設定角度的單位為0~360
  frameRate(10)  //設定每秒進入draw()函數的次數
}

function draw() {
  background(0); //背景顏色為黑色
  stroke(255)  //線條顏色
  rotate(angle)  //把物件旋轉10度的角度，以原點(0,0)作為旋轉的基準點
  rect(width/2,height/2,600,600) //劃一個方形，在視窗的中間，寬與高都為600
  angle = angle +10
}