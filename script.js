const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async (language) => {
    const requestjson = await fetch(`./languages/${language}.json`);
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

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('animado').classList.add('desaparecer');
    }, 5000);
});