let objectDrop = {
    add: false,
    element: ".dropzone_tags",
    _elementParent: "#dropzones",
    initialZone: '.cards',
    to_discard: ".to_discard",
    classOver: 'over',
    is_draging: '.is-dragging',
    tags: "#tags",
    title_tag: "Sem nome",
    essentialFunctions: { addSan, removeSan, tag, addElement, random, coordinate }
}

const objDrag = {
    classDropzone: 'dropzone_tags',
    to_discard: '.to_discard',
    tags: "#tags",
    essentialFunctions: {
        addSan,
        removeSan,
        tag,
        addElement,
        random,
        drop
    }
}

const objCard = {
    element: document.createElement('div'),
    dad: document.querySelector('.cards'),
    id: 'atual_card',
    classes: 'card',
    attribute: [
        { key: 'draggable', value: true },
        { key: 'droppable', value: true }
    ],
    essentialFunctions: { addSan, removeSan, tag, addElement, random }
}

let dropzoneMeasurements = []



newCard({ elem: addElement(objCard), color: random('color') })
Drag('#' + objCard.id, false, objDrag);
Drop(true, objectDrop)
