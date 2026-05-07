// Filtre de la galerie
const boutons = document.querySelectorAll('.filtre');
const photos = document.querySelectorAll('.galerie-item');

boutons.forEach(function(bouton) {
    bouton.addEventListener('click', function() {

        boutons.forEach(function(b) {
            b.classList.remove('actif');
        });

        bouton.classList.add('actif');

        const categorie = bouton.dataset.filtre;

        photos.forEach(function(photo) {
            if (categorie === 'tous') {
                photo.classList.remove('cache');
            } else if (photo.dataset.categorie === categorie) {
                photo.classList.remove('cache');
            } else {
                photo.classList.add('cache');
            }
        });

    });
});