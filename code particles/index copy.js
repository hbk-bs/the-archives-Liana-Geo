class Particle{
  x = 0;
  y = 0;

  
  constructor(_x,_y){
    this.x=_x;
    this.y=_y;
  }
  display(){
    circle(this.x,this.y,10);
  }
  update(){
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
}

const particles=[]



function setup(){
  const canvas = createCanvas(550,550);
  canvas.parent("sketch");
  background("white");
}
function draw(){
  for(let i=0;i< particles.length;i++){
    const p= particles[i];
    p.display();
    p.update();
  }
}

function mouseDragged(){
  const oneParticle=new Particle(mouseX,mouseY);
  particles.push(oneParticle);

}
