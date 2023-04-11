function animateBB8() {
    const bb8 = document.querySelector(".bb8");
    const body = document.querySelector(".body");
    const head = document.querySelector(".head");
  
    // Animation de déplacement de BB-8
    const moveTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    moveTimeline.to(bb8, { x: 200, duration: 2, ease: "power1.inOut" });
  
    // Animation de rotation du corps de BB-8
    const rotateBodyTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    rotateBodyTimeline.to(body, { rotate: 360, duration: 2, transformOrigin: "50% 50%", ease: "none" });
  
    // Animation de rotation de la tête de BB-8
    const rotateHeadTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    rotateHeadTimeline.to(head, { rotate: -30, duration: 1, transformOrigin: "50% 100%", ease: "power1.inOut" });
  }
  
  animateBB8();

  
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
  