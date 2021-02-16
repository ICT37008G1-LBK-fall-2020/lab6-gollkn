const removeChildes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

const parentElement = document.getElementById('container');

removeChildes(parentElement);
