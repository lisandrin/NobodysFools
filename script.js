let slideBar = () => {
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-links li');

    burgerBtn.addEventListener('click', () => {
        nav.classList.toggle('show');

        navLinks.forEach((link, index) =>{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`
        })
    })
}

slideBar();