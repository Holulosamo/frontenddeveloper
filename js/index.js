const d = document,
    body = d.body,
    projectsItems = d.querySelectorAll('.projects__item'),
    modal = d.createElement('div'),
    fragment = d.createDocumentFragment(),
    image = d.createElement("img"),
    navBtn = d.querySelector('.hamburger'),
    navMenu = d.querySelector('.nav');


projectsItems.forEach(el => {
    el.addEventListener("click", (e) => {
        modal.className = 'modal';
        image.className = 'modal__image';
        image.src = el.querySelector('img').getAttribute('src');

        fragment.appendChild(image);
        modal.appendChild(fragment);
        body.style.overflowY = 'hidden';
        body.appendChild(modal);

    });
});

d.addEventListener('click', (e) => {
    if(e.target.matches('.modal')){
        modal.innerHtml = "";
        body.removeChild(modal);
        body.style.overflowY = "auto";
    }
});

navBtn.addEventListener('click', (e) => {
    navBtn.classList.toggle('is-active');
    navMenu.classList.toggle("nav-active");
});