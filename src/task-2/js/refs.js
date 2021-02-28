const refs = {
    wrapperContent: document.querySelector('.wrapper-content-js'),
    wrapperContentModal: document.querySelector('.wrapper-content-modal-js'),
    linkTask2: document.querySelector('.link-task-2'),
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
