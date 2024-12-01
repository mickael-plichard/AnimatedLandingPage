// DETECTER SU UN ELEMENT EST VISIBLE
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >=0;
}

// Gestion du clic sur le bouton "En savoir plus"
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    const aboutSection = document.querySelector('#about'); // Cibler la section "about"
    
    // Faire défiler doucement vers la section
    aboutSection.scrollIntoView({
      behavior: 'smooth', // Défilement fluide
      block: 'start' // Aligner le haut de la section avec le haut de la fenêtre
    });
  });
  

// APPLIQUER LA CLASSE ANIMATION
function animateSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isVisible(section)) {
            section.classList.add('visible');
        }
    });
}

// AJOUTER L'EVENEMENT DE DEFILEMENT
window.addEventListener('scroll', animateSections);
animateSections();