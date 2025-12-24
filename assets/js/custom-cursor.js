// Custom Cursor Implementation
(function() {
  // Only run on devices that support hover (desktop)
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;
    let isHovering = false;
    
    // Update mouse position
    function updateMousePosition(e) {
      if (e && e.clientX !== undefined && e.clientY !== undefined) {
        // Never accept (0,0) as valid coordinates - use last known position instead
        if (e.clientX === 0 && e.clientY === 0 && lastKnownMouseX > 0 && lastKnownMouseY > 0) {
          mouseX = lastKnownMouseX;
          mouseY = lastKnownMouseY;
        } else if (e.clientX > 0 && e.clientY > 0) {
          mouseX = e.clientX;
          mouseY = e.clientY;
        } else {
          // Invalid coordinates, don't update
          return;
        }
        
        // Update dot position immediately (no lag)
        cursorDotX = mouseX;
        cursorDotY = mouseY;
        cursorDot.style.left = cursorDotX + 'px';
        cursorDot.style.top = cursorDotY + 'px';
        
        // Also update cursor position immediately to prevent jump
        cursorX = mouseX;
        cursorY = mouseY;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      }
    }
    
    // Store last known mouse position
    let lastKnownMouseX = 0;
    let lastKnownMouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      lastKnownMouseX = e.clientX;
      lastKnownMouseY = e.clientY;
      updateMousePosition(e);
    });
    
    document.addEventListener('click', (e) => {
      // Prevent cursor from jumping to (0,0) on any click
      if (e.clientX !== undefined && e.clientY !== undefined) {
        // Never use (0,0) coordinates - use last known position instead
        if (e.clientX === 0 && e.clientY === 0 && lastKnownMouseX > 0 && lastKnownMouseY > 0) {
          // Click at origin, use last known position
          updateMousePosition({ clientX: lastKnownMouseX, clientY: lastKnownMouseY });
        } else if (e.clientX > 0 && e.clientY > 0) {
          // Valid coordinates
          updateMousePosition(e);
        }
        // If coordinates are invalid and we don't have last known, do nothing
      } else if (lastKnownMouseX > 0 && lastKnownMouseY > 0) {
        // No coordinates in event, use last known position
        updateMousePosition({ clientX: lastKnownMouseX, clientY: lastKnownMouseY });
      }
    }, true); // Use capture phase
    
    document.addEventListener('mousedown', (e) => {
      lastKnownMouseX = e.clientX;
      lastKnownMouseY = e.clientY;
      updateMousePosition(e);
    }, true); // Use capture phase
    
    // Also handle tab clicks specifically
    document.addEventListener('mouseup', (e) => {
      lastKnownMouseX = e.clientX;
      lastKnownMouseY = e.clientY;
      updateMousePosition(e);
    }, true);
    
    // Handle focus events that might trigger on tab clicks
    document.addEventListener('focusin', (e) => {
      // Update position if we have a recent mouse position (valid coordinates)
      if (mouseX > 0 && mouseY > 0) {
        cursorX = mouseX;
        cursorY = mouseY;
        cursorDotX = mouseX;
        cursorDotY = mouseY;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = cursorDotX + 'px';
        cursorDot.style.top = cursorDotY + 'px';
      } else {
        // Keep off-screen if no valid position
        cursor.style.left = '-1000px';
        cursor.style.top = '-1000px';
        cursorDot.style.left = '-1000px';
        cursorDot.style.top = '-1000px';
      }
    }, true);
    
    // Smooth cursor animation
    function animateCursor() {
      // Only animate if we have valid mouse coordinates (greater than 0, not default negative values)
      // Also never animate to (0,0) - always use last known position if mouseX/mouseY is 0
      if (mouseX > 10 && mouseY > 10) {
        // Valid coordinates - smooth follow for main cursor with different speeds based on hover state
        const speed = isHovering ? 0.2 : 0.12;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      } else if (mouseX === 0 && mouseY === 0 && lastKnownMouseX > 10 && lastKnownMouseY > 10) {
        // mouseX/Y is 0 but we have last known position - use that instead
        mouseX = lastKnownMouseX;
        mouseY = lastKnownMouseY;
        cursorX = lastKnownMouseX;
        cursorY = lastKnownMouseY;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      } else {
        // No valid position, keep cursor off-screen
        cursor.style.left = '-1000px';
        cursor.style.top = '-1000px';
      }
      
      requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .hoverable, .card, .nav-link, .navbar-brand, input, textarea, select, .btn, .social a, .contact-icons a, .tab > * > a');
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-dot-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-dot-hover');
      });
      
      // Ensure position is updated when clicking elements
      el.addEventListener('click', (e) => {
        // Prevent cursor from jumping to (0,0) on link clicks
        let clickX, clickY;
        
        if (e.clientX !== undefined && e.clientY !== undefined) {
          // Never use (0,0) - use last known position if click is at origin
          if (e.clientX === 0 && e.clientY === 0 && lastKnownMouseX > 0 && lastKnownMouseY > 0) {
            clickX = lastKnownMouseX;
            clickY = lastKnownMouseY;
          } else if (e.clientX > 0 && e.clientY > 0) {
            clickX = e.clientX;
            clickY = e.clientY;
          } else {
            // Invalid coordinates, use last known if available
            clickX = lastKnownMouseX > 0 ? lastKnownMouseX : null;
            clickY = lastKnownMouseY > 0 ? lastKnownMouseY : null;
          }
        } else {
          // No coordinates in event, use last known
          clickX = lastKnownMouseX > 0 ? lastKnownMouseX : null;
          clickY = lastKnownMouseY > 0 ? lastKnownMouseY : null;
        }
        
        if (clickX && clickY && clickX > 0 && clickY > 0) {
          lastKnownMouseX = clickX;
          lastKnownMouseY = clickY;
          mouseX = clickX;
          mouseY = clickY;
          cursorX = clickX;
          cursorY = clickY;
          cursorDotX = clickX;
          cursorDotY = clickY;
          
          // Update cursor position immediately and prevent animation from overriding
          cursor.style.left = cursorX + 'px';
          cursor.style.top = cursorY + 'px';
          cursorDot.style.left = cursorDotX + 'px';
          cursorDot.style.top = cursorDotY + 'px';
          
          // For links, keep cursor visible at click position
          if (el.tagName === 'A') {
            cursor.style.opacity = '0.85';
            cursorDot.style.opacity = '1';
          }
        }
      }, true);
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '0.85';
      cursorDot.style.opacity = '1';
    });
    
    // Hide cursor initially until mouse moves
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
    
    // Show cursor on first mouse move
    let hasMoved = false;
    document.addEventListener('mousemove', (e) => {
      if (!hasMoved && e.clientX > 0 && e.clientY > 0) {
        hasMoved = true;
        cursor.style.opacity = '0.85';
        cursorDot.style.opacity = '1';
      }
    });
    
    // Initial positioning - will be updated on first mouse move
    // Position off-screen and ensure opacity is 0 until mouse moves
    cursor.style.left = '-1000px';
    cursor.style.top = '-1000px';
    cursorDot.style.left = '-1000px';
    cursorDot.style.top = '-1000px';
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
    
    // Prevent cursor from appearing at default position (0,0) on page load/navigation
    mouseX = -1000;
    mouseY = -1000;
    cursorX = -1000;
    cursorY = -1000;
    cursorDotX = -1000;
    cursorDotY = -1000;
  });
})();

