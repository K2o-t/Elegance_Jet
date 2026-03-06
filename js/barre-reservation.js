
    document.addEventListener('DOMContentLoaded', function() {
        // Rendre la barre de réservation fonctionnelle
        const btnDevis = document.getElementById('btnDevis');
        
        if (btnDevis) {
            btnDevis.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Récupérer les valeurs
                const origine = document.getElementById('origine')?.value || 'Non spécifié';
                const destination = document.getElementById('destination')?.value || 'Non spécifié';
                const date = document.getElementById('date')?.value || 'Non spécifié';
                const time = document.getElementById('time')?.value || 'Non spécifié';
                const passagers = document.getElementById('passagers')?.value || '1';
                
                // Simuler une demande de devis
                const message = `DEMANDE DE DEVIS\n\n` +
                    `De : ${origine}\n` +
                    `Vers : ${destination}\n` +
                    `Date : ${date}\n` +
                    `Heure : ${time}\n` +
                    `Passagers : ${passagers}\n\n` +
                    `Un conseiller ÉLÉGANCE vous contactera sous 2 heures.`;
                
                alert(message);
            });
        }
        
        // Gestion des options de vol
        const optionMultiple = document.querySelector('.option-multiple');
        const optionRetour = document.querySelector('.option-retour');
        
        if (optionMultiple) {
            optionMultiple.addEventListener('click', function() {
                alert('Fonctionnalité "Vol multiple" - Notre équipe vous contactera pour personnaliser votre itinéraire.');
            });
        }
        
        if (optionRetour) {
            optionRetour.addEventListener('click', function() {
                const dateField = document.querySelector('.field-sub');
                if (dateField && !document.getElementById('date-retour')) {
                    const retourInput = document.createElement('input');
                    retourInput.type = 'date';
                    retourInput.id = 'date-retour';
                    retourInput.value = '2026-03-10';
                    retourInput.style.marginLeft = '10px';
                    retourInput.style.border = 'none';
                    retourInput.style.outline = 'none';
                    dateField.appendChild(retourInput);
                    
                    alert('Date de retour ajoutée. Remplissez-la pour un vol aller-retour.');
                }
            });
        }
    });


document.addEventListener('DOMContentLoaded', function() {
    // Rendre la barre de réservation fonctionnelle
    const btnDevis = document.getElementById('btnDevis');
    
    if (btnDevis) {
        btnDevis.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs
            const origine = document.getElementById('origine')?.value || 'Non spécifié';
            const destination = document.getElementById('destination')?.value || 'Non spécifié';
            const date = document.getElementById('date')?.value || 'Non spécifié';
            const time = document.getElementById('time')?.value || 'Non spécifié';
            const passagers = document.getElementById('passagers')?.value || '1';
            
            // Simuler une demande de devis
            const message = `DEMANDE DE DEVIS\n\n` +
                `De : ${origine}\n` +
                `Vers : ${destination}\n` +
                `Date : ${date}\n` +
                `Heure : ${time}\n` +
                `Passagers : ${passagers}\n\n` +
                `Un conseiller ÉLÉGANCE vous contactera sous 2 heures.`;
            
            alert(message);
            
            // Optionnel : rediriger vers la page de contact avec les paramètres
            // window.location.href = `contact.html?origine=${encodeURIComponent(origine)}&destination=${encodeURIComponent(destination)}`;
        });
    }
    
    // Gestion des options de vol
    const optionMultiple = document.querySelector('.option-multiple');
    const optionRetour = document.querySelector('.option-retour');
    
    if (optionMultiple) {
        optionMultiple.addEventListener('click', function() {
            alert('Fonctionnalité "Vol multiple" - Notre équipe vous contactera pour personnaliser votre itinéraire.');
        });
    }
    
    if (optionRetour) {
        optionRetour.addEventListener('click', function() {
            // Ajouter un champ retour (simulation)
            const dateField = document.querySelector('.field-sub');
            if (dateField && !document.getElementById('date-retour')) {
                const retourInput = document.createElement('input');
                retourInput.type = 'date';
                retourInput.id = 'date-retour';
                retourInput.value = '2026-03-10';
                retourInput.style.marginLeft = '10px';
                retourInput.style.border = 'none';
                retourInput.style.outline = 'none';
                dateField.appendChild(retourInput);
                
                alert('Date de retour ajoutée. Remplissez-la pour un vol aller-retour.');
            }
        });
    }
});