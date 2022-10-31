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

    let seEntrouNoDrop = []
    let dropHere = '_'


    // CARD
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
    card.addEventListener('touchmove', touchmove)
    card.addEventListener('touchend', touchend)

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
    function touchmove(e) {
        this.classList.add('is-dragging')

        const touchLocation = e.targetTouches[0];

        const WidthOfCard = parseInt(this.offsetWidth)
        const HeightOfCard = parseInt(this.offsetHeight)

        this.style.left = touchLocation.pageX - (WidthOfCard / 2) + 'px';
        this.style.top = touchLocation.pageY - (HeightOfCard / 2) + 'px';

        seEntrouNoDrop = []

        dropzoneMeasurements.forEach(el => {
            seEntrouNoDrop.push(
                {test : el.pageY <= touchLocation.pageY &&
                el.pageY + el.height >= touchLocation.pageY &&
                el.pageX <= touchLocation.pageX &&
                touchLocation.pageX <= el.pageX + el.width, 
                element: el
            })
        })

        seEntrouNoDrop.forEach(dZone => {
            if ( dZone.test ) {
                console.log("dentro do dropzone")
                dropHere = dZone.element
            }
        })
    }

    function touchend(e) {
        this.classList.remove('is-dragging')
        console.log(dropHere.elem)


    }
    return card
}







