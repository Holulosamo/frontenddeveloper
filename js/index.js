const d = document,
    body = d.body,
    projectsItems = d.querySelectorAll('.projects__item'),
    modal = d.createElement('div'),
    fragment = d.createDocumentFragment();
    closeBtn = d.createElement("div"),
    image = d.createElement("img");


projectsItems.forEach(el => {
    el.addEventListener("click", (e) => {
        console.log(el);


        modal.className = 'modal';
        image.className = 'modal__image';
        closeBtn.className = 'fas fa-times  modal__btn';
        image.src = el.querySelector('img').getAttribute('src');

        fragment.appendChild(image);
        fragment.appendChild(closeBtn);
        modal.appendChild(fragment);
        body.appendChild(modal);

        body.style.overflowY = 'hidden';
    });
});

d.addEventListener('click', (e) => {
    if(e.target.matches('.modal__btn')){
        modal.innerHtml = "";
        body.removeChild(modal);
        body.style.overflowY = "auto";
    }
});