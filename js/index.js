const d = document,
    body = d.body,
    projectsItems = d.querySelectorAll('.projects__item'),
    modal = d.createElement('div'),
    fragment = d.createDocumentFragment(),
    image = d.createElement("img");


projectsItems.forEach(el => {
    el.addEventListener("click", (e) => {
        console.log(el);

        modal.className = 'modal';
        image.className = 'modal__image';
        image.src = el.querySelector('img').getAttribute('src');

        fragment.appendChild(image);
        modal.appendChild(fragment);
        body.appendChild(modal);

        body.style.overflowY = 'hidden';
    });
});

d.addEventListener('click', (e) => {
    if(e.target.matches('.modal')){
        modal.innerHtml = "";
        body.removeChild(modal);
        body.style.overflowY = "auto";
    }
});