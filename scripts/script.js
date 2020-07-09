'use strict';
const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item'),
    card = document.querySelector('.card'),
    modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements].filter(element => element.tagName !== 'BUTTON');

function closeModal(modalName) {
    modalName.addEventListener('click', (event) => {
        const target = event.target
        if (target.closest('.modal__close') || target === modalName) {
            modalName.classList.add('hide');
            modalSubmit.reset();
        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.code === 'Escape') {
            modalName.classList.add('hide');
            modalSubmit.reset();
        }
    });
    modalSubmit.addEventListener('submit', (event) => {
        modalName.classList.add('hide');
        modalSubmit.reset();
    });
};

modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    modalBtnSubmit.disabled = !validForm;
    modalBtnWarning.style.display = validForm ? 'none' : '';
});

modalSubmit.addEventListener('submit', event => {
    event.preventDefault();
    const itemObject = {};
    for (const elem of elementsModalSubmit) {
        itemObject[elem.name] = elem.value;
    }

dataBase.push(itemObject);
modalSubmit.reset();
console.log(dataBase);
})

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
    modalSubmit.addEventListener('submit', (event) => {
        console.log(event);
    });
});

catalog.addEventListener('click', (event) => {
    const target = event.target

    if(target.closest('.card')) {
        modalItem.classList.remove('hide');
    };
});



closeModal(modalAdd);
closeModal(modalItem);

