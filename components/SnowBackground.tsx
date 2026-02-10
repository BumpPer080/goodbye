import React, { useEffect, useRef } from 'react';

const SnowBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SNOW_COUNT = 300;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Helper functions
    const clamp = (number: number, min: number, max: number) => {
      return Math.max(min, Math.min(number, max));
    };

    const random = (factor = 1) => {
      return Math.random() * factor;
    };

    class Circle {
      radius = 0;
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      ctx: CanvasRenderingContext2D;

      constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.reset();
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(255,255,255,${0.8})`;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
      }

      reset() {
        this.radius = random(2.5);
        this.x = random(canvas!.width);
        this.y = this.y ? 0 : random(canvas!.height); // Use current y check to see if it's first run or reset
        this.vx = clamp((Math.random() - 0.5) * 0.4, -0.4, 0.4);
        this.vy = clamp(random(1.5), 0.1, 0.8) * this.radius * 0.5;
      }
    }

    const circles: Circle[] = [];
    for (let i = 0; i < SNOW_COUNT; i++) {
        circles.push(new Circle(ctx));
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Use current dimensions

      circles.forEach((e) => {
        // Check bounds
        if (
          e.x <= 0 ||
          e.x >= canvas.width ||
          e.y <= 0 ||
          e.y >= canvas.height
        ) {
          e.reset();
        }

        e.x = e.x + e.vx;
        e.y = e.y + e.vy;
        e.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};

export default SnowBackground;
