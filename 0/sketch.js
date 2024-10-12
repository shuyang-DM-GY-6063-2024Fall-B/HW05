let backgroundC = 'black' 


function setup(){
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);

}

function sun(x,y,d,time){
  push()
  translate(x, y)
  rotate(time)
  let shine = abs(sin(time*10)*10)
  noStroke()
  fill('orange')
  for(let a = 0;a<360;a+=90){
    rotate(a)
    beginShape()
    vertex(0, 0)
    vertex(0, 1.5*d+shine)
    vertex(sin(20)*d*1.2,1.2*d*cos(20))
    vertex((1.5*d+shine)*sin(45),(1.5*d+shine)*sin(45))
    vertex(1.2*d*cos(20),sin(20)*d*1.2)
    vertex(1.5*d+shine,0)
    vertex(0, 0)
    endShape()
  } 
  fill('red')
  ellipse(0,0,2*d)
  pop()
}

function moon(x,y,d,time){
  push()
  noStroke()
  rotate(time)
  fill('yellow')
  ellipse(x, y, d)
  D = abs(sin(time)*d)
  fill(backgroundC)
  ellipse(x-D,y,d)
  pop()
}

function starclock(hour,time){
  push()
  translate(width/2,height/2)
  if(hour >= 6 && hour <= 18){
    rotate(hour*15)
    sun(-height/2,0,25,time)
  }
  else{
    rotate(hour*15)
    moon(-height/2,0,50,time)
  }
  pop()

}
function flowerclock(scale,hour,minute,second,time){
  // hour
  push()
  noStroke()
  translate(width/2,height/2)
  scaleH = 2*scale
  for(let a = 0; a < hour;a ++){
    fill(98-a*5, 41+a*5, 255)
    rotate(-15)
    movement = sin(time/100+a*50)*5
    quad(0,0,-(scaleH+movement)*sin(7.5),scaleH+movement,0,(scaleH+movement)*1.3,(scaleH+movement)*sin(7.5),(scaleH+movement))
  }
  rotate(-15)
  fill(98-hour*5, 41+hour*5, 255)
  scaleLastHour = map(hour,0,60,1.5*scale,scaleH ) 
  movement = sin(time/10+hour*50)*5
  quad(0,0,-(scaleLastHour+  movement)*sin(7.5),scaleLastHour+movement,0,(scaleLastHour+movement)*1.3,(scaleLastHour+movement)*sin(7.5),scaleLastHour+movement)
  pop()

  // minute
  push()
  noStroke()
  translate(width/2,height/2)
  scaleM = 1.5*scale
  for(let a = 0; a < minute/5-1;a ++){
    fill(255-20*a, 0+a*20, 212)
    rotate(-30)
    movement = sin(time/10+a*50)*5
    quad(0,0,-(scaleM+movement)*sin(15),scaleM+movement,0,(scaleM+movement)*1.3,(scaleM+movement)*sin(15),(scaleM+movement))
  }
  rotate(-30)
  fill(255-20*minute/5, 0+minute/5*20, 212)
  secondsInLast = second+minute%5*60
  scaleLastMinute = map(secondsInLast,0,300,scale*0.8,scaleM) 
  movement = sin(time/10+(minute/5)*50)*5
  quad(0,0,-(scaleLastMinute +  movement)*sin(15),scaleLastMinute+movement,0,(scaleLastMinute+movement)*1.3,(scaleLastMinute+movement)*sin(15),scaleLastMinute+movement)
  pop()

  // second
  push()
  noStroke()
  translate(width/2,height/2)
  scaleS = scale*0.8
  for(let a = 0; a < (second)/5-1;a ++){
    fill(255, 255-a*20, 0)
    rotate(-30)
    movement = sin(time/10+a*50)*5
    quad(0,0,-(scaleS+movement)*sin(15),scaleS+movement,0,(scaleS+movement)*1.3,(scaleS+movement)*sin(15),(scaleS+movement))
  }
  rotate(-30)
  
  scaleLastSeconds = map(second%5,0,4,0,scaleS) 
  fill(255, 255-(second)/5*20, 0)
  movement = abs(sin(time/10+(second)/5*50))*5
  quad(0,0,-(scaleLastSeconds+movement)*sin(15),scaleLastSeconds+movement,0,(scaleLastSeconds+movement)*1.3,(scaleLastSeconds+movement)*sin(15),scaleLastSeconds+movement)
  pop()


}


function draw(){
  
  let varialT = millis()/100
  let millisT = millis()
  let hourT = hour()
  let minuteT = minute()
  let secondT = second()
  colormap = map(hourT, 0, 23, -90, 270)
  value = sin(colormap)
  bgR = map(value,-1,1,0,145)
  bgG = map(value,-1,1,0,250)
  bgB = map(value,-1,1,0,255)
  background(bgR,bgG,bgB)
  backgroundC = [bgR,bgG,bgB] 

  starclock(hourT,varialT)
  flowerclock(60,hourT,minuteT,secondT,millisT)

  // if(hour)


  // moon(300,300,50,varialT)
  // sun(400,400,50,varialT)




}


 

