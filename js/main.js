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
    essentialFunctions: { addSan, removeSan, tag, addElement, random }
}

const objCard = {
    element: document.createElement('div'),
    dad: document.querySelector('.cards'),
    id: 'atual_card',
    classes: 'card',
    attribute: [
        { key: 'draggable', value: true },
        { key: 'droppable', value: true }
    ]
}



newCard({ elem: addElement(objCard), color: random('color') })
Drag('#' + objCard.id, false);
Drop(true, objectDrop)
