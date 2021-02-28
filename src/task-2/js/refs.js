const refs = {
    wrapperContent: document.querySelector('.wrapper-content-js'),
    wrapperContentModal: document.querySelector('.wrapper-content-modal-js'),
    wrapperContentCountImg: document.querySelector(
        '.wrapper-content-countImg-js',
    ),
    curentTime: document.querySelector('.curent-time-js'),
    linkTask2: document.querySelector('.link-task-2'),
    quantityImg() {
        return document.querySelectorAll('.list-item-img');
    },
    buttonCloseModalRef() {
        return document.querySelector('button[data-action="close-modal"]');
    },
    bodyRef() {
        return document.querySelector('body');
    },
    backdropRef() {
        return document.querySelector('.js-backdrop');
    },
};

export default refs;
