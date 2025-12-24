// Particle background setup
document.addEventListener('DOMContentLoaded', function() {
  // Create canvas element for particles
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
      // Randomly assign color: 60% white, 40% blue
      this.color = Math.random() > 0.4 ? 'white' : 'blue';
      // Glow animation phase
      this.glowPhase = Math.random() * Math.PI * 2;
      this.glowSpeed = 0.02 + Math.random() * 0.03;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
      
      // Update glow phase for animation
      this.glowPhase += this.glowSpeed;
    }

    draw() {
      // Dynamic glow effect using sine wave
      const glowIntensity = 0.3 + Math.sin(this.glowPhase) * 0.2;
      const glowSize = this.size * (1.5 + Math.sin(this.glowPhase) * 0.5);
      
      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, glowSize
      );
      
      if (this.color === 'blue') {
        // Blue particles with blue glow
        gradient.addColorStop(0, `rgba(100, 181, 246, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 181, 246, ${this.opacity * glowIntensity})`);
        gradient.addColorStop(1, `rgba(100, 181, 246, 0)`);
        ctx.fillStyle = gradient;
      } else {
        // White particles with white glow
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * glowIntensity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = gradient;
      }
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw the core particle
      if (this.color === 'blue') {
        ctx.fillStyle = `rgba(100, 181, 246, ${this.opacity})`;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particles
  function initParticles() {
    particles = [];
    // More concentrated particles - increased density (changed from 15000 to 8000)
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // Draw connections between nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          // Use appropriate color based on particle colors
          let connectionColor;
          if (particles[i].color === 'blue' || particles[j].color === 'blue') {
            // If either particle is blue, use blue-tinted connection
            connectionColor = particles[i].color === 'blue' && particles[j].color === 'blue' 
              ? `rgba(100, 181, 246, ${0.15 * (1 - distance / 120)})`
              : `rgba(200, 220, 255, ${0.15 * (1 - distance / 120)})`;
          } else {
            // Both white particles
            connectionColor = `rgba(255, 255, 255, ${0.2 * (1 - distance / 120)})`;
          }
          
          ctx.strokeStyle = connectionColor;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    drawConnections();

    animationId = requestAnimationFrame(animate);
  }

  // Initialize and start
  initParticles();
  animate();

  // Reinitialize particles on resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
});

