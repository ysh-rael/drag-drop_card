const bttn_add_drop = document.querySelector('#add')

bttn_add_drop.addEventListener('click', addDropzone)

function addDropzone ( ) {
const colorDrop = document.querySelector('#color').value
const nameDrop = document.querySelector('#inpt_name_tag')

const objectDrop = {
    add: true,
    element: ".dropzone_tags",
    _elementParent: "#dropzones",
    initialZone: '.cards',
    to_discard: ".to_discard",
    classOver: 'over',
    is_draging: '.is-dragging',
    tags: "#tags",
    title_tag: (nameDrop.value == false) && (nameDrop.value !== '0') ? "Sem nome" :  nameDrop.value,
    color: colorDrop,
    essentialFunctions: { addSan, removeSan, tag, addElement, random, coordinate }
}
    Drop(false, objectDrop)
    nameDrop.value = ''

}
