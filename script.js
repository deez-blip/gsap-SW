// Animation du défilement vertical du texte et de la perspective pour donner l'illusion de profondeur
gsap.timeline()
  .to(".crawl", {
    y: "-500%",
    duration: 60,
    delay: 2,
  })
  .to(".crawl", {
    rotationX: 75,
    transformOrigin: "50% 100%",
    duration: 60,
    delay: -60,
  });

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
  