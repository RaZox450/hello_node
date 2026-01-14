// Fonction pour basculer le menu déroulant
function toggleMenu() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

// Fermer le menu déroulant en dehors de celui-ci
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    const slides = document.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    const slides = document.querySelectorAll('.carousel-item');
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

showSlide(slideIndex);

function changePageCompte() {
    window.location.href = "indexCompte.html";
}

function ouvrirPage() {
    var a = document.getElementById("search").value;

    if (a === "abricot") {
        window.location.href ="";
    }

    if (a === "Abricot") {
        window.location.href ="";
    }

    if (a === "banane") {
        window.location.href ="";
    }

    if (a === "Banane") {
        window.location.href ="";
    }

    if (a === "concombre") {
        window.location.href ="";
    }

    if (a === "Concombre") {
        window.location.href ="";
    }

    if (a === "durian") {
        window.location.href ="";
    }

    if (a === "echalotte") {
        window.location.href ="";
    }

    if (a === "epinard") {
        window.location.href ="";
    }

    if (a === "fraise") {
        window.location.href ="";
    }

    if (a === "gingembre") {
        window.location.href ="";
    }

    if (a === "haricot vert") {
        window.location.href ="";
    }

    if (a === "igname") {
        window.location.href ="";
    }

    if (a === "jujube") {
        window.location.href ="";
    }

    if (a === "kiwi") {
        window.location.href ="";
    }

    if (a === "lentille") {
        window.location.href ="";
    }

    if (a === "melon") {
        window.location.href ="";
    }

    if (a === "noix") {
        window.location.href ="";
    }

    if (a === "oignon") {
        window.location.href ="";
    }

    if (a === "olive") {
        window.location.href ="";
    }

    if (a === "pomme") {
        window.open("Quenette");
    }

    if (a === "rhubarbe") {
        window.location.href ="";
    }

    if (a === "salsifi") {
        window.location.href ="";
    }

    if (a === "tomate") {
        window.location.href ="";
    }

    if (a === "ugli") {
        window.location.href ="";
    }

    if (a === "vanille") {
        window.location.href ="";
    }

    if (a === "wasabi") {
        window.location.href ="";
    }

    if (a === "ximenia") {
        window.location.href ="";
    }

    if (a === "yubari king") {
        window.location.href ="";
    }

    if (a === "zatte") {
        window.location.href ="";
    }

    if (a === "Durian") {
        window.location.href ="";
    }

    if (a === "Echalotte") {
        window.location.href ="";
    }

    if (a === "Epinard") {
        window.location.href ="";
    }

    if (a === "Fraise") {
        window.location.href ="";
    }

    if (a === "Gingembre") {
        window.location.href ="";
    }

    if (a === "Haricot vert") {
        window.location.href ="";
    }

    if (a === "Haricot Vert") {
        window.location.href ="";
    }

    if (a === "Igname") {
        window.location.href ="";
    }

    if (a === "Jujube") {
        window.location.href ="";
    }

    if (a === "Kiwi") {
        window.location.href ="";
    }

    if (a === "Lentille") {
        window.location.href ="";
    }

    if (a === "Melon") {
        window.location.href ="";
    }

    if (a === "Noix") {
        window.location.href ="";
    }

    if (a === "Oignon") {
        window.location.href ="";
    }

    if (a === "Olive") {
        window.location.href ="";
    }

    if (a === "Pomme") {
        window.open("Quenette");
    }

    if (a === "Rhubarbe") {
        window.location.href ="";
    }

    if (a === "Salsifi") {
        window.location.href ="";
    }

    if (a === "Tomate") {
        window.location.href ="";
    }

    if (a === "Ugli") {
        window.location.href ="";
    }

    if (a === "Vanille") {
        window.location.href ="";
    }

    if (a === "Wasabi") {
        window.location.href ="";
    }

    if (a === "Ximenia") {
        window.location.href ="";
    }

    if (a === "Yubari king") {
        window.location.href ="";
    }

    if (a === "Yubari King") {
        window.location.href ="";
    }

    if (a === "Zatte") {
        window.location.href ="RechercheProduit/zatte.html";
    }
}