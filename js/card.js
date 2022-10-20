// CREATE CARD

function newCard(parameter, func = false, _tagHtml = 'div') {
    elem = parameter.elem
    color = parameter.color


    console.log()
    if (color) elem.style.backgroundColor = color

    if (!!func) {
        try {
            func.forEach(f => f())
        } catch (err) {
            console.log("incapaz de executar funçõe chamadas dentro do 'createCard' <> ", err)
        }
    }
}

function Drag(element, pageHtml = false, essentialFunctions = false, ...func) {
    const card = document.querySelector(element)
    const dropzones = document.querySelectorAll('.dropzone_tags')


// CARD
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)

    function dragstart() {
        // dropzones.forEach(dropzone => dropzone.classList.add('highlight')) """ para dar um estilo a todas as dropzones """
        
        // this = card
        this.classList.add('is-dragging')
    }
    function dragend() {
        // dropzones.forEach(dropzone => dropzone.classList.remove('highlight')) 

        // this = card
        this.classList.remove('is-dragging')
    }
    return card
}







