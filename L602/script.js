const insertAfterElement = (element, refElement) => {
    refElement.parentNode.insertBefore(element, refElement.nextSibling);
};

const secondEl = document.getElementById('second');
const el = document.createElement('div');
el.id = 'third';
insertAfterElement(el, secondEl);
