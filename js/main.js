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

// --- Bouton "Voir les Chatons" ---
const btnChatons = document.getElementById("btn-chatons");
const chatonsDispo = document.querySelectorAll('[data-categorie="chatons"]');

if (chatonsDispo.length === 0) {
    btnChatons.disabled = true;
    btnChatons.title = "Aucun chaton disponible pour le moment";
} else {
    document.getElementById("msg-repos").classList.add("cache");
    btnChatons.addEventListener("click", function () {
        // Désactive tous les filtres
        boutons.forEach(function (b) {
            b.classList.remove("actif");
        });

        // Active le filtre "chatons"
        document.querySelector('[data-filtre="chatons"]').classList.add("actif");

        // Affiche seulement les chatons disponibles
        photos.forEach(function (photo) {
            if (photo.dataset.categorie === "chatons") {
                photo.classList.remove("cache");
            } else {
                photo.classList.add("cache");
            }
        });

        // Défile vers la galerie
        document.getElementById("galerie").scrollIntoView({ behavior: "smooth" });
    });
}