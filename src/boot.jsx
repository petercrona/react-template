import ReactDom from 'react-dom';

export default function initReact(rootComponent) {
    const domContainer = createAndAttachDomElement();
    ReactDom.render(rootComponent, domContainer);
}

function createAndAttachDomElement() {
    const domElement = document.createElement('div');
    domElement.classList.add('page');
    document.body.appendChild(domElement);
    return domElement;
}
