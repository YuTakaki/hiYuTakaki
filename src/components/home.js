import React, {useRef, useEffect} from 'react';
const Home = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    let width;
    let height;
    canvas.width = width= document.querySelector('.home').getBoundingClientRect().width;
    canvas.height = height= document.querySelector('.home').getBoundingClientRect().height;
    const ctx = canvas.getContext('2d');

    window.addEventListener('resize', function(){
      canvas.width = width = document.querySelector('.home').getBoundingClientRect().width;
      canvas.height = height = document.querySelector('.home').getBoundingClientRect().height;
      ctx.clearRect(0, 0, width, height);
      circles = [];
      create();
  
  })

    class Circle{
      constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color
      }
      draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color
        ctx.fill();

      }
      update(){
        if(this.x > width  || this.x < 0){
          this.dx = -this.dx;
        }
        if(this.y > height || this.y < 0){
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();

      }
    }
    let circles = [];
    let colors = ['rgba(72, 72, 72, 0.5)', 'rgba(44, 44, 44, 0.5)', 'rgba(15, 15, 15, 0.5)', 'rgba(242,207,25, 0.5)']

    const create = () => {
      for(let i = 0; i < 10; i++){
        var radius = width * .15;
        var x = Math.random() * width;
        var y =   Math.random() * height;
        
        var dx = Math.random() * 0.5 + 1;
        var dy = Math.random() * 0.5 + 1;
        var color = colors[Math.floor(Math.random() * colors.length)];
  
        circles.push(new Circle(x, y, radius, dx, dy, color));
      };

    };

    

    const animation = () => {
      ctx.clearRect(0, 0, width, height);
      
      requestAnimationFrame(animation);
      circles.map(c => c.update());
    };

    animation();
    create();

  }, [])


    
    return ( 
        <section className='home' id='home'>
          <canvas ref={canvasRef}></canvas>
          <div className='home-content'>
            <div className='my-info'>
              <h1 className='first'>Yu</h1>
              <h1 className='second'>Takaki</h1>
              <h1 className='third'>Software Engineer</h1>
            </div>
            <div className='my-slogan'>
              <h1 className='fourth'>Lets Work Together As A Team</h1>
              <ul>
                <a href='https://www.facebook.com/yuyu.takaks/' target='_blank'><li className='fa fa-facebook'></li></a>
                <a href='https://twitter.com/takakiyuuu' target='_blank'><li className='fa fa-twitter'></li></a>
                <a href='https://github.com/YuTakaki' target='_blank'><li className='fa fa-github'></li></a>
                <a href='https://www.linkedin.com/in/yu-takaki-1236331a4/' target='_blank'><li className='fa fa-linkedin'></li></a>
              </ul>
            </div>

          </div>
          
        </section>
     );
}
 
export default Home;