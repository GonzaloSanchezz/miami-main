const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestjson = await fetch(`../languages/${language}.json`);
    const texts = await requestjson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})

document.getElementById("filtroHB").onclick = function(){
    var elemento = document.getElementById("SI");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("SI1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("SI2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("HB1");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("HB2");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("HB4");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("NB1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("NB2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
};

document.getElementById("filtroSI").onclick = function() {
    var elemento = document.getElementById("HB");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB4");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
        var elemento = document.getElementById("SI");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    } 
    var elemento = document.getElementById("SI1");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("SI2");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("NB1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("NB2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
};

document.getElementById("filtroNB").onclick = function() {
    var elemento = document.getElementById("HB");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB4");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none"
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("HB2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("SI");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("SI1");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("SI2");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
    var elemento = document.getElementById("NB1");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
    var elemento = document.getElementById("NB2");
    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
    }
};



document.getElementById('filtroTT').addEventListener('click', function() {
    var image = document.getElementById('TT');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'flex';
    } else {
        image.style.display = 'none';
    }
    var image = document.getElementById('OC');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
    var image = document.getElementById('TP');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
});
document.getElementById('filtroOC').addEventListener('click', function() {
    var image = document.getElementById('OC');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'flex';
    } else {
        image.style.display = 'none';
    }
    var image = document.getElementById('TT');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
    var image = document.getElementById('TP');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
});
document.getElementById('filtroTP').addEventListener('click', function() {
    var image = document.getElementById('TP');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'flex';
    } else {
        image.style.display = 'none';
    }
    var image = document.getElementById('OC');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
    var image = document.getElementById('TT');
    if (image.style.display === 'flex' || image.style.display === '') {
        image.style.display = 'none';
    }
});

window.onload = function() {
    // Oculta el loader cuando todo está listo
    document.querySelector('.loader').style.display = 'none';
};


