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
                photo.style.display = 'block';
            } else if (photo.dataset.categorie === categorie) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });

    });
});