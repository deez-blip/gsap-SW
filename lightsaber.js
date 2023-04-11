// Allumer les sabres laser
function igniteLightsabers() {
    gsap.to(".laser", { height: "200px", bottom: "20px", duration: 0.5 });
  }
  
  // Animer les mouvements de combat
function animateCombat() {
    gsap.timeline({ repeat: -1, yoyo: true })
      .to(".character-1", { x: "50%", rotate: -25, duration: 1, transformOrigin: "bottom center" })
      .to(".character-2", { x: "-50%", rotate: 25, duration: 1, transformOrigin: "bottom center" }, 0);
  }
  
  // Ajouter des étincelles et des effets de lumière
  function addSparks() {
    const sparksContainer = document.querySelector(".sparks");
  
    for (let i = 0; i < 10; i++) {
      const spark = document.createElement("div");
      spark.classList.add("spark");
      spark.style.left = "50%";
      spark.style.top = "50%"; // Modifiez cette ligne pour changer la position verticale des étincelles
  
      sparksContainer.appendChild(spark);
  
      // Ajoutez un délai avant de commencer l'animation
      setTimeout(() => {
        animateSpark(spark);
      }, i * 100);
    }
  }
  
  // Animer les étincelles
  function animateSpark(spark) {
    gsap.set(spark, { x: 0, y: 0, opacity: 1 });
    gsap.to(spark, {
      x: `${Math.random() * 100 - 50}px`,
      y: `${Math.random() * -100 - 50}px`,
      opacity: 0,
      duration: Math.random() * 1 + 0.5,
      onComplete: () => {
        animateSpark(spark);
      },
    });
  }
  
  igniteLightsabers(); // Allume les sabres laser
setTimeout(() => {
  animateCombat(); // Anime les mouvements de combat
  addSparks(); // Ajoute des étincelles et des effets de lumière
}, 500);
  

// Créez des étoiles avec des positions aléatoires
function createStars(numStars) {
    const starsContainer = document.querySelector(".stars");
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
  
      starsContainer.appendChild(star);
  
      animateStar(star);
    }
  }
  
  // Animer l'opacité des étoiles pour créer un effet de clignotement réaliste
  function animateStar(star) {
    const duration = Math.random() * 3 + 1;
    const initialOpacity = Math.random() * 0.5 + 0.2;
    const finalOpacity = Math.random() * 0.5 + 0.2;
    
    gsap.to(star, {
      opacity: finalOpacity,
      duration: duration,
      yoyo: true,
      repeat: -1,
      onComplete: () => {
        gsap.set(star, { opacity: initialOpacity });
        animateStar(star);
      },
    });
  }
  
  createStars(100); // Crée 100 étoiles
  