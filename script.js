// ========================================
// Typewriter Effect for Bio
// ========================================
function initTypewriter() {
  const bioEl = document.getElementById('bio-description');
  if (!bioEl) return;
  const bioText = bioEl.textContent.trim();
  bioEl.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  bioEl.appendChild(cursor);
  let i = 0;
  function typeChar() {
    if (i < bioText.length) {
      bioEl.insertBefore(document.createTextNode(bioText[i]), cursor);
      i++;
      setTimeout(typeChar, 18);
    } else {
      setTimeout(() => cursor.remove(), 2000);
    }
  }
  setTimeout(typeChar, 600);
}

// ========================================
// Enhanced Boot Sequence
// ========================================
function initBootSequence() {
  const bootElement = document.getElementById("boot");
  const bootText = document.getElementById("boot-text");
  const mainElement = document.getElementById("main");

  const bootLines = [
    { text: "user@ciro.dev:~$ open /portfolio", delay: 0 },
    { text: "", delay: 200 },
    { text: "[ SEGFAULT ] page not in memory", delay: 400, class: "boot-loading" },
    { text: "[ HANDLER ] mapping 0x7fff -> portfolio", delay: 600 },
    { text: "[ LOAD    ] allocating heap...", delay: 800, class: "boot-loading" },
    { text: "[ READY   ] process ready", delay: 1000, class: "boot-ok" }
  ];

  let currentLine = 0;

  function typeNextLine() {
    if (currentLine < bootLines.length) {
      const line = bootLines[currentLine];
      const lineElement = document.createElement("div");
      lineElement.className = `boot-line ${line.class || ""}`;
      lineElement.textContent = line.text;
      bootText.appendChild(lineElement);

      currentLine++;
      setTimeout(typeNextLine, line.delay);
    } else {
      // Boot complete, transition to main
      setTimeout(() => {
        bootElement.classList.add("fade-out");
      }, 300);

      setTimeout(() => {
        bootElement.style.display = "none";
        document.body.style.overflow = "auto";
        mainElement.style.display = "block";

        // Smooth main fade-in (GSAP if available, else instant)
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(mainElement, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' });
        }

        // Initialize all effects
        startUptime();
        initCursorGlow();
        initNavInteraction();
        initSystemMonitors();
        initNeuralNetwork();
        initGradientDescent();
        initBinaryRain();
        initCodeDecorations();
        initHexFloaters();
        initAsciiEasterEgg();
        initThreeBackground();
        initVanillaTilt();
      }, 1000);
    }
  }

  typeNextLine();
}

// ========================================
// Uptime Counter
// ========================================
function startUptime() {
  const start = Date.now();
  const uptimeElement = document.getElementById("uptime");

  if (!uptimeElement) return;

  function updateUptime() {
    const elapsed = Math.floor((Date.now() - start) / 1000);
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;

    if (hours > 0) {
      uptimeElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      uptimeElement.textContent = `${minutes}m ${seconds}s`;
    } else {
      uptimeElement.textContent = `${seconds}s`;
    }
  }

  updateUptime();
  setInterval(updateUptime, 1000);
}

// ========================================
// Cursor Glow Effect
// ========================================
function initCursorGlow() {
  // Create cursor glow element
  const cursorGlow = document.createElement("div");
  cursorGlow.className = "cursor-glow";
  cursorGlow.style.opacity = "0";
  document.body.appendChild(cursorGlow);

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let isVisible = false;

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      cursorGlow.style.opacity = "1";
    }
  });

  // Hide on mouse leave
  document.addEventListener("mouseleave", () => {
    isVisible = false;
    cursorGlow.style.opacity = "0";
  });

  // Smooth follow animation
  function animateGlow() {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;

    glowX += dx * 0.15;
    glowY += dy * 0.15;

    cursorGlow.style.left = glowX + "px";
    cursorGlow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// ========================================
// Navigation Interaction
// ========================================
function initNavInteraction() {
  const navItems = document.querySelectorAll("nav a");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // Add ripple effect
      createRipple(item);

      // Smooth scroll is already handled by initSmoothScroll
      // Visual feedback
      item.style.transform = "scale(0.95)";
      setTimeout(() => {
        item.style.transform = "";
      }, 150);
    });
  });
}

// ========================================
// Ripple Effect
// ========================================
function createRipple(element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();

  ripple.style.position = "absolute";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(139, 92, 246, 0.5)";
  ripple.style.width = "10px";
  ripple.style.height = "10px";
  ripple.style.pointerEvents = "none";
  ripple.style.transform = "translate(-50%, -50%) scale(0)";
  ripple.style.animation = "ripple 0.6s ease-out";

  element.style.position = "relative";
  element.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to CSS dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(8);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========================================
// Focus Block Interaction
// ========================================
function initFocusBlocks() {
  const blocks = document.querySelectorAll(".block");

  blocks.forEach((block) => {
    // Add tilt effect on mouse move
    block.addEventListener("mousemove", (e) => {
      const rect = block.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      block.style.transform = `
        translateY(-4px)
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    block.addEventListener("mouseleave", () => {
      block.style.transform = "";
    });
  });
}

// ========================================
// Konami Code Easter Egg
// ========================================
function initKonamiCode() {
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  let konamiIndex = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;

      if (konamiIndex === konamiCode.length) {
        activateMatrixMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateMatrixMode() {
  document.body.style.transition = "all 1s ease";
  document.body.style.filter = "hue-rotate(120deg) saturate(1.5)";

  // Create matrix rain effect
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  canvas.style.opacity = "0.3";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const matrixInterval = setInterval(drawMatrix, 50);

  // Reset after 10 seconds
  setTimeout(() => {
    clearInterval(matrixInterval);
    canvas.remove();
    document.body.style.filter = "";
  }, 10000);

  console.log("🎮 Matrix mode activated!");
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ========================================
// Particle Background with Neural Network Connections
// ========================================
function initParticles() {
  const particleCount = 30;
  const particles = [];
  const connectionDistance = 150; // Max distance to draw lines

  // Create canvas for drawing lines
  const canvas = document.createElement("canvas");
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: rgba(139, 92, 246, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      box-shadow: 0 0 4px rgba(139, 92, 246, 0.4);
    `;

    document.body.appendChild(particle);

    particles.push({
      element: particle,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  }

  function animateParticles() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen
      if (p.x < 0) p.x = window.innerWidth;
      if (p.x > window.innerWidth) p.x = 0;
      if (p.y < 0) p.y = window.innerHeight;
      if (p.y > window.innerHeight) p.y = 0;

      p.element.style.left = p.x + "px";
      p.element.style.top = p.y + "px";
    });

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          // Calculate opacity based on distance (closer = more opaque)
          const opacity = (1 - distance / connectionDistance) * 0.3;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}

// ========================================
// Theme Toggle
// ========================================
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  const html = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });

}

function updateThemeIcon(theme, iconElement) {
  iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTypewriter();
  initMobileNav();
  initBootSequence();
  initSmoothScroll();
  initKonamiCode();
  setTimeout(initFocusBlocks, 2000);
});

// ========================================
// System Monitors
// ========================================
function initSystemMonitors() {
  const gpuFill = document.getElementById("gpu-usage");
  const gpuText = document.getElementById("gpu-text");
  const memFill = document.getElementById("mem-usage");
  const memText = document.getElementById("mem-text");
  const tempFill = document.getElementById("temp-usage");
  const tempText = document.getElementById("temp-text");

  function updateMonitors() {
    // Simulate GPU usage (fluctuates between 40-85%)
    const gpu = 40 + Math.random() * 45;
    gpuFill.style.width = gpu + "%";
    gpuText.textContent = Math.floor(gpu) + "%";

    // Simulate memory usage (fluctuates between 60-80%)
    const mem = 60 + Math.random() * 20;
    memFill.style.width = mem + "%";
    memText.textContent = Math.floor(mem) + "%";

    // Simulate temperature (fluctuates between 45-75°C)
    const temp = 45 + Math.random() * 30;
    const tempPercent = ((temp - 45) / 30) * 100;
    tempFill.style.width = tempPercent + "%";
    tempText.textContent = Math.floor(temp) + "°C";
  }

  updateMonitors();
  setInterval(updateMonitors, 2000);
}

// ========================================
// Neural Network Visualization
// ========================================
function initNeuralNetwork() {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 150;

  const layers = [4, 6, 6, 3];
  const nodes = [];

  // Create node positions
  layers.forEach((nodeCount, layerIndex) => {
    const layerNodes = [];
    const x = (layerIndex / (layers.length - 1)) * (canvas.width - 40) + 20;

    for (let i = 0; i < nodeCount; i++) {
      const y = ((i + 1) / (nodeCount + 1)) * canvas.height;
      layerNodes.push({ x, y, activation: Math.random() });
    }

    nodes.push(layerNodes);
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
    ctx.lineWidth = 1;

    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].forEach((node1) => {
        nodes[i + 1].forEach((node2) => {
          ctx.beginPath();
          ctx.moveTo(node1.x, node1.y);
          ctx.lineTo(node2.x, node2.y);
          ctx.stroke();
        });
      });
    }

    // Draw nodes
    nodes.forEach((layer) => {
      layer.forEach((node) => {
        // Update activation
        node.activation += (Math.random() - 0.5) * 0.1;
        node.activation = Math.max(0, Math.min(1, node.activation));

        const radius = 4 + node.activation * 2;
        const alpha = 0.4 + node.activation * 0.4;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius + 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ========================================
// Gradient Descent Visualization
// ========================================
function initGradientDescent() {
  const canvas = document.getElementById("gradient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 150;

  let t = 0;
  const points = [];
  const maxPoints = 30;

  // Loss function visualization (simplified 3D surface projected to 2D)
  function lossFunction(x) {
    return 50 + 40 * Math.sin(x * 0.1) + 20 * Math.cos(x * 0.15);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw loss curve
    ctx.beginPath();
    ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
    ctx.lineWidth = 2;

    for (let x = 0; x < canvas.width; x += 2) {
      const y = lossFunction(x);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Current position on gradient descent
    const x = (t % canvas.width);
    const y = lossFunction(x);

    // Add current point to trail
    points.push({ x, y });
    if (points.length > maxPoints) {
      points.shift();
    }

    // Draw trail
    points.forEach((point, i) => {
      const alpha = (i / points.length) * 0.6;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
      ctx.fill();
    });

    // Draw current point
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(6, 182, 212, 0.9)";
    ctx.fill();

    // Glow
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(6, 182, 212, 0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add labels
    ctx.font = "10px 'JetBrains Mono'";
    ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
    ctx.fillText("loss", 5, 15);
    ctx.fillText("∇θ", canvas.width - 25, canvas.height - 5);

    t += 1.5;
    requestAnimationFrame(animate);
  }

  animate();
}

// ========================================
// Binary Rain Effect
// ========================================
function initBinaryRain() {
  const container = document.getElementById("binary-rain");
  if (!container) return;

  const chars = "01";
  const columnCount = 15;

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div");
    column.style.position = "absolute";
    column.style.left = (i / columnCount) * 100 + "%";
    column.style.top = "-100%";

    const length = 5 + Math.floor(Math.random() * 10);
    let text = "";

    for (let j = 0; j < length; j++) {
      text += chars[Math.floor(Math.random() * chars.length)] + "\n";
    }

    column.textContent = text;
    column.className = "binary-char";
    column.style.animationDuration = 10 + Math.random() * 15 + "s";
    column.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(column);
  }
}

// ========================================
// Code Decorations
// ========================================
function initCodeDecorations() {
  const topLeftCode = `// neural_net.h
#define LAYERS 4
#define NEURONS 128
typedef struct {
  float weights[NEURONS];
  float bias;
} Layer;

void forward_pass(
  Layer* layers,
  float* input,
  float* output
);`;

  const bottomRightCode = `def quantize_model(model):
  # INT8 quantization
  converter = tf.lite.TFLiteConverter
  converter.optimizations = [
    tf.lite.Optimize.DEFAULT
  ]
  return converter.convert()`;

  const topLeft = document.createElement("div");
  topLeft.className = "code-decoration top-left";
  topLeft.textContent = topLeftCode;

  const bottomRight = document.createElement("div");
  bottomRight.className = "code-decoration bottom-right";
  bottomRight.textContent = bottomRightCode;

  document.body.appendChild(topLeft);
  document.body.appendChild(bottomRight);
}

// ========================================
// Floating Hex Numbers
// ========================================
function initHexFloaters() {
  const hexCount = 8;
  const hexValues = [
    "0xDEADBEEF", "0xCAFEBABE", "0x8BADF00D",
    "0xFEEDFACE", "0xC0FFEE", "0xBAAAAAAD",
    "0xDEADC0DE", "0xABADCAFE"
  ];

  for (let i = 0; i < hexCount; i++) {
    const hex = document.createElement("div");
    hex.className = "hex-float";
    hex.textContent = hexValues[i % hexValues.length];
    hex.style.left = Math.random() * 80 + 10 + "%";
    hex.style.animationDelay = Math.random() * 10 + "s";
    hex.style.animationDuration = 15 + Math.random() * 10 + "s";

    document.body.appendChild(hex);
  }
}

// ========================================
// Enhanced Focus Blocks (already exists, update for new effects)
// ========================================
// Wait for main content to appear before initializing blocks
setTimeout(() => {
  initFocusBlocks();
}, 3000);

// ========================================
// ASCII Art Easter Egg
// ========================================
function initAsciiEasterEgg() {
  const asciiArt = document.querySelector('.ascii-art');
  if (!asciiArt) return;

  let clickCount = 0;
  const maxClicks = 7;
  let isHacked = false;

  asciiArt.style.cursor = 'pointer';

  // Reset function to allow easter egg to be triggered again
  window.resetEasterEgg = () => {
    clickCount = 0;
    isHacked = false;
    console.log('Easter egg reset - click again to trigger!');
  };

  asciiArt.addEventListener('click', () => {
    if (isHacked) return;

    clickCount++;
    console.log(`Click count: ${clickCount}`);

    if (clickCount < maxClicks) {
      // Wiggle animation using class
      asciiArt.classList.remove('wiggle-animation');
      // Force reflow to restart animation
      void asciiArt.offsetWidth;
      asciiArt.classList.add('wiggle-animation');

      setTimeout(() => {
        asciiArt.classList.remove('wiggle-animation');
      }, 500);
    } else {
      // Fall off and hack mode
      isHacked = true;
      asciiArt.classList.add('fall-animation');

      // Wait for fall animation to complete, then start hack mode
      setTimeout(() => {
        activateHackMode();
      }, 2000);
    }
  });
}

function activateHackMode() {
  const body = document.body;
  const main = document.getElementById('main');

  // Add glitch effect
  body.classList.add('hacked');

  // Random glitch intervals
  let glitchCount = 0;
  const glitchInterval = setInterval(() => {
    body.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(${1 + Math.random()})`;
    main.style.transform = `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`;

    glitchCount++;
    if (glitchCount > 20) {
      clearInterval(glitchInterval);
      body.style.filter = 'hue-rotate(120deg) saturate(1.5)';
      main.style.transform = '';
    }
  }, 100);

  // Create binary rain effect
  const binaryCanvas = document.createElement('canvas');
  binaryCanvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `;
  body.appendChild(binaryCanvas);

  const ctx = binaryCanvas.getContext('2d');
  binaryCanvas.width = window.innerWidth;
  binaryCanvas.height = window.innerHeight;

  const chars = '01';
  const fontSize = 16;
  const columns = Math.floor(binaryCanvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawBinaryRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, binaryCanvas.width, binaryCanvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > binaryCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const binaryInterval = setInterval(drawBinaryRain, 50);

  // Add "HACKED" text overlay
  const hackedOverlay = document.createElement('div');
  hackedOverlay.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 72px;
      font-weight: bold;
      color: #ff0000;
      text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000;
      z-index: 9999;
      animation: glitchText 0.5s infinite;
      pointer-events: none;
      font-family: 'JetBrains Mono', monospace;
    ">HACKED</div>
  `;
  body.appendChild(hackedOverlay);

  // Show console message
  console.log("%c⚠️ SYSTEM COMPROMISED", "font-size: 24px; font-weight: bold; color: #ff0000; text-shadow: 0 0 10px #ff0000;");
  console.log("%c🔓 ACCESS GRANTED", "font-size: 18px; color: #00ff00;");
  console.log("%cJust kidding! Nice easter egg find 😄", "font-size: 14px; color: #8b5cf6;");

  // After 5 seconds, go directly to terminal
  setTimeout(() => {
    clearInterval(binaryInterval);
    binaryCanvas.remove();
    hackedOverlay.remove();
    body.style.filter = '';
    body.classList.remove('hacked');

    // Show terminal recovery sequence
    showRecoveryTerminal();
  }, 5000);
}

function showRecoveryTerminal() {
  const recoveryOverlay = document.createElement('div');
  recoveryOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
  `;

  const terminal = document.createElement('pre');
  terminal.style.cssText = `
    color: #00ff00;
    font-size: 14px;
    line-height: 1.6;
  `;

  recoveryOverlay.appendChild(terminal);
  document.body.appendChild(recoveryOverlay);

  const recoveryLines = [
    { text: 'root@ciro.dev:~$ ps aux | grep malware', delay: 0 },
    { text: 'root     1337  99.9  50.0  malicious_process', delay: 150 },
    { text: '', delay: 250 },
    { text: 'root@ciro.dev:~$ kill -9 1337', delay: 350 },
    { text: '[  OK  ] Terminated malicious process', delay: 500, class: 'success' },
    { text: '', delay: 600 },
    { text: 'root@ciro.dev:~$ systemctl restart portfolio.service', delay: 700 },
    { text: '[  OK  ] Restoring system state...', delay: 850, class: 'success' },
    { text: '[  OK  ] Reloading page components...', delay: 1000, class: 'success' },
    { text: '', delay: 1150 },
    { text: 'System recovered. Welcome back.', delay: 1250, class: 'success' }
  ];

  let currentLine = 0;

  function typeRecoveryLine() {
    if (currentLine < recoveryLines.length) {
      const line = recoveryLines[currentLine];
      setTimeout(() => {
        const lineElement = document.createElement('div');
        lineElement.textContent = line.text;
        if (line.class === 'success') {
          lineElement.style.color = '#00ff00';
        }
        terminal.appendChild(lineElement);
        currentLine++;
        typeRecoveryLine();
      }, line.delay);
    } else {
      // Fade out terminal and restore
      setTimeout(() => {
        recoveryOverlay.style.transition = 'opacity 0.5s ease';
        recoveryOverlay.style.opacity = '0';

        setTimeout(() => {
          recoveryOverlay.remove();

          // Reload ASCII art
          const asciiArt = document.querySelector('.ascii-art');
          if (asciiArt) {
            asciiArt.classList.remove('fall-animation');
            asciiArt.classList.add('float-back-animation');
            setTimeout(() => {
              asciiArt.classList.remove('float-back-animation');

              // Reset easter egg after recovery is complete
              if (window.resetEasterEgg) {
                window.resetEasterEgg();
              }
            }, 1000);
          }
        }, 500);
      }, 500);
    }
  }

  typeRecoveryLine();
}

// ========================================
// Console Easter Egg
// ========================================
console.log("%c⚡ NeuralOS v4.2.1 Initialized", "font-size: 18px; font-weight: bold; color: #8b5cf6; text-shadow: 0 0 10px #8b5cf6;");
console.log("%c🔧 System Info:", "font-size: 14px; color: #06b6d4; font-weight: bold;");
console.log("%c  ARM Cortex-A76 @ 2.4GHz", "font-size: 12px; color: #a1a1aa;");
console.log("%c  Mali-G76 GPU | TPU v5 @ 45 TOPS", "font-size: 12px; color: #a1a1aa;");
console.log("%c  8GB LPDDR4X | TensorRT v8.6", "font-size: 12px; color: #a1a1aa;");
console.log("%c\n🎮 Easter Eggs:", "font-size: 14px; color: #06b6d4; font-weight: bold;");
console.log("%c  Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A", "font-size: 12px; color: #a1a1aa;");
console.log("%c\n💻 Built by Ciro Zhang | UCSD '26", "font-size: 12px; color: #8b5cf6;");
console.log("%c  Press ` to open terminal", "font-size: 12px; color: #a1a1aa;");

// ========================================
// Floating Code Snippets
// ========================================
function initCodeSnippets() {
  const snippets = [
    'import torch.nn as nn',
    'model.fit(X_train, y_train)',
    'cv2.imread("image.jpg")',
    'from transformers import BERT',
    'tf.keras.layers.Dense(128)',
    'np.array([[1, 0], [0, 1]])',
    'optimizer = Adam(lr=0.001)',
    'plt.plot(x, y)',
    'pd.DataFrame(data)',
    'sklearn.model_selection',
    'accuracy = 0.9524',
    'loss: 0.0342',
    'epoch 47/100',
    'sudo rm -rf /',
    'git commit -m "fix"',
    'docker build -t app .',
    'while(true) { train(); }',
    'const model = new Model()',
    'return predictions;',
    'if __name__ == "__main__":'
  ];

  const container = document.getElementById('code-snippets');

  function createSnippet() {
    const snippet = document.createElement('div');
    snippet.className = 'code-snippet';
    snippet.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    snippet.style.left = Math.random() * 100 + '%';
    snippet.style.animationDuration = (10 + Math.random() * 10) + 's';
    snippet.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(snippet);

    setTimeout(() => snippet.remove(), 20000);
  }

  // Create initial snippets
  for (let i = 0; i < 8; i++) {
    createSnippet();
  }

  // Keep creating new ones
  setInterval(createSnippet, 3000);
}

// ========================================
// Interactive Terminal
// ========================================
function initTerminal() {
  const overlay = document.getElementById('terminal-overlay');
  const closeBtn = document.getElementById('terminal-close');
  const input = document.getElementById('terminal-input');
  const body = document.getElementById('terminal-body');

  let commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => {
      return `Available commands:
  help       - Show this help message
  about      - About Ciro
  projects   - List all projects
  skills     - Show technical skills
  contact    - Get contact information
  clear      - Clear terminal
  matrix     - Enable Matrix mode
  hack       - ???
  ls         - List directory contents
  whoami     - Display current user
  uname      - System information`;
    },

    about: () => {
      return `Ciro Zhang
Data Science & Computer Engineering @ UCSD
GPA: 3.96 | Class of 2026

Building ML systems at the intersection of computer vision,
NLP, and embedded systems. Currently researching digital
pathology at UBC and bioluminescence prediction at UCSD.`;
    },

    projects: () => {
      return `Projects:
  1. Paper Reader: Document AI Pipeline
  2. Gmail Replier: LLM Auto-Reply Bot
  3. Fish Game: HTML5 Jumping Game
  4. HAB Forecasting: Harmful Algal Bloom Prediction
  5. Wiki-Graph-Explorer: Wikipedia BFS Game
  6. Slice: Android Bill Splitting App
  7. OneTouch: Android Shortcut Widget`;
    },

    skills: () => {
      return `Tech Stack:
  Languages:   Python, Java, C, JavaScript, SQL
  ML/AI:       PyTorch, TensorFlow, scikit-learn, YOLO
  CV/NLP:      OpenCV, transformers, BERT, OCR
  Tools:       Git, Docker, Linux, Jupyter, Android Studio
  Data:        pandas, NumPy, matplotlib, Spark`;
    },

    contact: () => {
      return `Contact Information:
  Email:    ciro@ucsd.edu
  GitHub:   github.com/CiroZhang
  Location: San Diego, CA

  Reach out for research, projects, or opportunities!`;
    },

    clear: () => {
      body.innerHTML = '';
      return null;
    },

    matrix: () => {
      document.body.classList.add('matrix-mode');
      setTimeout(() => document.body.classList.remove('matrix-mode'), 5000);
      return 'Matrix mode activated for 5 seconds...';
    },

    hack: () => {
      const lines = [
        'Initializing hack sequence...',
        'Bypassing firewall...',
        'Accessing mainframe...',
        'Downloading database...',
        'Just kidding! This is a portfolio site :)',
      ];
      lines.forEach((line, i) => {
        setTimeout(() => {
          addTerminalLine(line, i === lines.length - 1 ? 'success' : '');
        }, i * 800);
      });
      return null;
    },

    ls: () => {
      return `projects/  research/  teaching/  coursework/  skills/  contact/`;
    },

    whoami: () => {
      return 'guest';
    },

    uname: () => {
      return 'NeuralOS 4.2.1 (ARM64) - Built on Linux kernel 6.0';
    },
  };

  function addTerminalLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function executeCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === '') return;

    addTerminalLine(`guest@ciro.dev:~$ ${cmd}`);
    commandHistory.unshift(cmd);
    historyIndex = -1;

    if (commands[trimmed]) {
      const output = commands[trimmed]();
      if (output) {
        output.split('\n').forEach(line => addTerminalLine(line));
      }
    } else {
      addTerminalLine(`Command not found: ${trimmed}. Type 'help' for available commands.`, 'error');
    }

    addTerminalLine('');
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Open terminal with backtick key
    if (e.key === '`' && !overlay.classList.contains('active')) {
      e.preventDefault();
      overlay.classList.add('active');
      input.focus();
    }

    // Close with Escape
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  // Close button
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  // Click outside to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  // Handle input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = -1;
        input.value = '';
      }
    }
  });
}

// ========================================
// ML Training Metrics Simulation
// ========================================
function initMLMetrics() {
  const accuracyEl = document.getElementById('accuracy-value');
  const lossEl = document.getElementById('loss-value');
  const epochEl = document.getElementById('epoch-value');

  let epoch = 0;
  let accuracy = 0.4523;
  let loss = 2.3456;

  function updateMetrics() {
    epoch++;

    // Simulate training progress
    const progress = Math.min(epoch / 100, 1);
    accuracy = 0.4523 + (0.5 * progress) + (Math.random() * 0.02);
    loss = 2.3456 * (1 - progress * 0.85) + (Math.random() * 0.1);

    // Update display
    accuracyEl.textContent = accuracy.toFixed(4);
    lossEl.textContent = loss.toFixed(4);
    epochEl.textContent = `${epoch}/100`;

    // Reset after 100 epochs
    if (epoch >= 100) {
      setTimeout(() => {
        epoch = 0;
        accuracy = 0.4523;
        loss = 2.3456;
      }, 3000);
    }
  }

  // Update every 800ms
  setInterval(updateMetrics, 800);
}

// ========================================
// Mobile Navigation
// ========================================
function initMobileNav() {
  const hamburger = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!hamburger || !overlay) return;

  function openNav() {
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeNav(); });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}

// Terminal hint button in nav
function initTerminalHintBtn() {
  const btn = document.getElementById('terminal-hint-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const overlay = document.getElementById('terminal-overlay');
    const input = document.getElementById('terminal-input');
    if (overlay) {
      overlay.classList.add('active');
      input && input.focus();
    }
  });
}

// Initialize new features after boot
setTimeout(() => {
  initCodeSnippets();
  initTerminal();
  initMLMetrics();
  initMobileNav();
  initTerminalHintBtn();
  initGSAPAnimations();
  initEducationTabs();
  initProjectDropdowns();
}, 3500);

// ========================================
// Three.js Neural Network Background
// ========================================
function initThreeBackground() {
  if (typeof THREE === 'undefined') return;

  const container = document.getElementById('three-bg');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 80;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const PARTICLE_COUNT = window.innerWidth < 768 ? 60 : 130;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    velocities.push({
      x: (Math.random() - 0.5) * 0.07,
      y: (Math.random() - 0.5) * 0.07,
      z: (Math.random() - 0.5) * 0.015,
    });
  }

  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Two-tone: mostly purple, some cyan
  const ptMat1 = new THREE.PointsMaterial({
    color: 0x8b5cf6, size: 1.4, transparent: true, opacity: 0.28, sizeAttenuation: true,
  });
  const ptMat2 = new THREE.PointsMaterial({
    color: 0x06b6d4, size: 1.1, transparent: true, opacity: 0.2, sizeAttenuation: true,
  });

  const ptGeo2 = new THREE.BufferGeometry();
  const positions2 = new Float32Array(40 * 3);
  for (let i = 0; i < 40; i++) {
    positions2[i * 3]     = (Math.random() - 0.5) * 200;
    positions2[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions2[i * 3 + 2] = (Math.random() - 0.5) * 60;
  }
  ptGeo2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));

  scene.add(new THREE.Points(ptGeo, ptMat1));
  scene.add(new THREE.Points(ptGeo2, ptMat2));

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x8b5cf6, transparent: true, opacity: 0.05,
  });

  let mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
    my = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const CONNECTION_DISTANCE_SQ = 26 * 26;

  function tick() {
    requestAnimationFrame(tick);

    const pos = ptGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      if (Math.abs(pos[i * 3])     > 100) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 100) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 30)  velocities[i].z *= -1;
    }
    ptGeo.attributes.position.needsUpdate = true;

    // Remove old line segments
    const toRemove = [];
    scene.children.forEach(c => { if (c.isLine) toRemove.push(c); });
    toRemove.forEach(c => { scene.remove(c); c.geometry.dispose(); });

    // Draw new connections
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = pos[i*3] - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        if (dx*dx + dy*dy < CONNECTION_DISTANCE_SQ) {
          const lgeom = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(pos[i*3], pos[i*3+1], pos[i*3+2]),
            new THREE.Vector3(pos[j*3], pos[j*3+1], pos[j*3+2]),
          ]);
          scene.add(new THREE.Line(lgeom, lineMat));
        }
      }
    }

    camera.position.x += (mx * 12 - camera.position.x) * 0.03;
    camera.position.y += (-my * 12 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  tick();
}

// ========================================
// GSAP ScrollTrigger Animations
// ========================================
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Section headings: slide from left
  gsap.utils.toArray('h2').forEach((heading) => {
    gsap.fromTo(heading,
      { x: -50, opacity: 0 },
      { scrollTrigger: { trigger: heading, start: 'top 88%', toggleActions: 'play none none none' },
        x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
    );
  });

  // Project cards: staggered scale-up
  const projectCards = gsap.utils.toArray('.projects .project-card');
  if (projectCards.length) {
    gsap.fromTo(projectCards,
      { scale: 0.9, opacity: 0 },
      { scrollTrigger: { trigger: projectCards[0].parentElement, start: 'top 88%', toggleActions: 'play none none none' },
        scale: 1, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'back.out(1.5)' }
    );
  }

  // Video cards: fly up with stagger
  const videoCards = gsap.utils.toArray('.video-card');
  if (videoCards.length) {
    gsap.fromTo(videoCards,
      { y: 70, opacity: 0 },
      { scrollTrigger: { trigger: videoCards[0].parentElement, start: 'top 88%', toggleActions: 'play none none none' },
        y: 0, opacity: 1, duration: 0.75, stagger: 0.15, ease: 'power3.out' }
    );
  }

  // Research items: slide from left
  gsap.utils.toArray('.research-item').forEach((el, i) => {
    gsap.fromTo(el,
      { x: -40, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 91%', toggleActions: 'play none none none' },
        x: 0, opacity: 1, duration: 0.6, delay: i * 0.08, ease: 'power2.out' }
    );
  });

  // Teaching timeline items: slide from right
  gsap.utils.toArray('.tl-item').forEach((el, i) => {
    gsap.fromTo(el,
      { x: 30, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 91%', toggleActions: 'play none none none' },
        x: 0, opacity: 1, duration: 0.5, delay: i * 0.1, ease: 'power2.out' }
    );
  });

  // Education cards: slide up
  gsap.utils.toArray('.edu-anim').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
        y: 0, opacity: 1, duration: 0.55, delay: i * 0.12, ease: 'power2.out' }
    );
  });

  // Skill bars: wipe in from left
  gsap.utils.toArray('.skill-fill').forEach((bar) => {
    const targetWidth = bar.style.width;
    gsap.set(bar, { width: '0%', opacity: 0 });
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 93%',
      once: true,
      onEnter: () => gsap.to(bar, { width: targetWidth, opacity: 1, duration: 1.4, ease: 'power2.out' }),
    });
  });


  // Footer: fade up
  const footer = document.querySelector('footer');
  if (footer) {
    gsap.from(footer, {
      scrollTrigger: { trigger: footer, start: 'top 95%', toggleActions: 'play none none none' },
      y: 20, opacity: 0, duration: 0.8, ease: 'power2.out',
    });
  }
}

// ========================================
// Stats Counter Animation
// ========================================
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const showPlus = target >= 8;
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const val = Math.floor(eased * target);
      el.textContent = progress < 1 ? val : (showPlus ? target + '+' : target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

// ========================================
// Education Tab Filter
// ========================================
function initEducationTabs() {
  const toggle = document.getElementById('courses-toggle');
  const drawer = document.getElementById('courses-drawer');

  if (toggle && drawer) {
    const doToggle = () => {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', doToggle);
    toggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') doToggle(); });
  }
}

// ========================================
// Project Video Dropdowns
// ========================================
function initProjectDropdowns() {
  document.querySelectorAll('.video-card').forEach((card) => {
    const info = card.querySelector('.video-info');
    if (!info) return;

    const header = info.querySelector('.project-header');
    const tag = header ? header.querySelector('.project-tag') : null;

    // Details drawer: tag + everything else in info except the h3 title
    const details = document.createElement('div');
    details.className = 'proj-details proj-details-collapsed';

    // Move tag into drawer first
    if (tag) details.appendChild(tag);

    // Move remaining info children (description, links) into drawer
    Array.from(info.children).forEach((child) => {
      if (child !== header) details.appendChild(child);
    });
    info.appendChild(details);

    // Full-width colored bottom bar as toggle
    const bar = document.createElement('button');
    bar.className = 'proj-bar';
    bar.setAttribute('aria-expanded', 'false');
    bar.innerHTML = '<span class="proj-bar-arrow">▾</span>';
    card.appendChild(bar);

    const doToggle = () => {
      const open = details.classList.toggle('proj-details-open');
      details.classList.toggle('proj-details-collapsed', !open);
      bar.setAttribute('aria-expanded', String(open));
      bar.querySelector('.proj-bar-arrow').classList.toggle('open', open);
    };

    bar.addEventListener('click', doToggle);
  });
}

// ========================================
// VanillaTilt 3D Card Effect
// ========================================
function initVanillaTilt() {
  if (typeof VanillaTilt === 'undefined') return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices

  VanillaTilt.init(document.querySelectorAll('.block'), {
    max: 10, speed: 400, glare: true, 'max-glare': 0.12, scale: 1.03, perspective: 900,
  });
  VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 8, speed: 400, glare: true, 'max-glare': 0.08, scale: 1.02, perspective: 1000,
  });
  VanillaTilt.init(document.querySelectorAll('.teaching-item'), {
    max: 4, speed: 600, glare: false, scale: 1.01, perspective: 1500,
  });
}
