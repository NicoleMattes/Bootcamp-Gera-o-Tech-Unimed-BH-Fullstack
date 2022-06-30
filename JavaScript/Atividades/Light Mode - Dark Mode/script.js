function changeMode() {
    changeClasses();
}

// função para adicionar/tirar classe dark-mode. 
function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// função para mudar os textos

function changeText() {
    const lightMode = "Light Node";
    const darkMode = "Dark Node";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('modo-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body') [0];
const footer = document.getElementsByTagName('footer') [0];
// Como getElementsByTagName retorna um array, é preciso do indicem, como só tem um elemnto o indice é 0

button.addEventListener('click', changeMode);