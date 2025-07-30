// Particle Background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
const colors = ['#00f5ff','#ff007f','#ffffff'];

class Particle {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.r = Math.random()*2+1;
    this.dx = (Math.random()-0.5)*1;
    this.dy = (Math.random()-0.5)*1;
    this.color = colors[Math.floor(Math.random()*colors.length)];
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
  update(){
    this.x+=this.dx; this.y+=this.dy;
    if(this.x<0||this.x>canvas.width) this.dx=-this.dx;
    if(this.y<0||this.y>canvas.height) this.dy=-this.dy;
    this.draw();
  }
}

function init(){
  particles=[];
  for(let i=0;i<70;i++){particles.push(new Particle());}
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>p.update());
}

init();
animate();

window.addEventListener('resize',()=>{
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  init();
});
