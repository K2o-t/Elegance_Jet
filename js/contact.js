// INTERACTIONS FAQ & FORMULAIRE
document.addEventListener('DOMContentLoaded', function() {
    
    // ----- FAQ ACCORDÉON -----
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            
            item.classList.toggle('active');
        });
    });
    
    // ----- GESTION DU FORMULAIRE DE CONTACT -----
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi
            const submitBtn = document.getElementById('submitContact');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('✓ Votre message a été envoyé. Un conseiller ÉLÉGANCE vous répondra sous 2 heures.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 800);
        });
    }
    
    // ----- ANIMATION SUR LES LIENS -----
    const ctaButtons = document.querySelectorAll('.cta, .btn-contact');
    
    ctaButtons.forEach(btn => {
        if (btn.getAttribute('href') === '#') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
              
            });
        }
    });
});