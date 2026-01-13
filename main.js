// Dark - Light Mode

let darkModeEnabled = localStorage.getItem('darkModeEnabled') == 'true';

const enableDarkMode = () => {
    darkModeEnabled = true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
}

const disableDarkMode = () => {
    darkModeEnabled = false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
}

const darkModeButton = document.getElementById('darkModeButton');

document.addEventListener('DOMContentLoaded', () => {
    darkModeButton.checked = darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});


darkModeButton.addEventListener('change', () => {
    if (darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Menu

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active')
});



// Text

const typed = new Typed('.multiple', {
    strings: [
        'Estudante de Ciência da Computação!',
        'Desenvolvedor de Software!',
        'Entusiasta de Cibersegurança!'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
        }
    });
}


document.getElementById('downloadCV').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/Gustavo_Sales_CV.pdf';
    link.download = 'Gustavo_Sales_CV.pdf';
    link.click();
});


const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

successMessage.style.display = 'none';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('Erro ao enviar a mensagem.');
        }

    } catch (error) {
        alert('Erro de conexão.');
    }
});


navlinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

const toggle = document.querySelector(".toggle");
const buttons = document.querySelectorAll(".toggle-btn");
const iconsContainer = document.getElementById("conhecimentos-icons");
const text = document.getElementById("conhecimentos-text");

const skillsIcons = `
    <i class="fa-brands fa-html5" data-tooltip="HTML5"></i>
    <i class="fa-brands fa-css3-alt" data-tooltip="CSS3"></i>
    <i class="fa-brands fa-js" data-tooltip="JavaScript"></i>
    <i class="fa-brands fa-java" data-tooltip="Java"></i>
    <i class="fa-brands fa-python" data-tooltip="Python"></i>
    <i class="fa-solid fa-c" data-tooltip="C"></i>
    <i class="fa-solid fa-database" data-tooltip="SQL"></i>
    <i class="fa-brands fa-react" data-tooltip="React"></i>
    <i class="fa-brands fa-node-js" data-tooltip="Node.js"></i>
    <i class="fa-brands fa-npm" data-tooltip="NPM"></i>
`;

const toolsIcons = `
<i class="fa-brands fa-git-alt" data-tooltip="Git"></i>
<i class="fa-brands fa-github" data-tooltip="GitHub"></i>
<i class="fa-brands fa-linux" data-tooltip="Linux"></i>
<i class="fa-solid fa-code" data-tooltip="VS Code / IntelliJ"></i>
<i class="fa-solid fa-terminal" data-tooltip="Terminal"></i>
<i class="fa-solid fa-database" data-tooltip="PostgreSQL / H2"></i>
<i class="fa-brands fa-docker" data-tooltip="Docker"></i>
<i class="fa-brands fa-figma" data-tooltip="Figma"></i>
`;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.type === "skills") {
            toggle.classList.remove("tools");
            iconsContainer.innerHTML = skillsIcons;
            text.textContent =
                "Possuo experiência no desenvolvimento de aplicações web, com foco em lógica de programação, organização de código e integração entre frontend e backend, além de estudos iniciais em cibersegurança aplicada.";
        } else {
            toggle.classList.add("tools");
            iconsContainer.innerHTML = toolsIcons;
            text.textContent =
                "Utilizo ferramentas que auxiliam no versionamento, desenvolvimento e organização dos projetos, contribuindo para fluxos de trabalho mais seguros, eficientes e bem estruturados.";
        }
    });
});