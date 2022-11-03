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

function Drag(element, pageHtml = false, obj, essentialFunctions = false, ...func) {
    const card = document.querySelector(element)
    const dropzones = document.querySelectorAll('.dropzone_tags')
    classDropzone = obj.classDropzone
    const discard = document.querySelector(obj.to_discard) // pega zona para descarte
    const boxTags = document.querySelector(obj.tags) // box em que agrupa as tags
    const { addSan, addElement, random, drop } = obj.essentialFunctions // extraio funções das quais preciso


    let seEntrouNoDrop = []
    let dropHere = ''


    // CARD
    card.addEventListener('touchmove', touchmove)
    card.addEventListener('touchend', touchend)

    /*  
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
     function dragstart() {
        // dropzones.forEach(dropzone => dropzone.classList.add('highlight')) """ para dar um estilo a todas as dropzones """

        // this = card
    }
    function dragend() {
        // dropzones.forEach(dropzone => dropzone.classList.remove('highlight')) 

        // this = card
    } 
    */

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
                {
                    test:
                        el.pageY <= touchLocation.pageY &&
                        el.pageY + el.height >= touchLocation.pageY &&
                        el.pageX <= touchLocation.pageX &&
                        touchLocation.pageX <= el.pageX + el.width,
                    element: el
                })
        })

        seEntrouNoDrop.forEach(dZone => dZone.test ? dropHere = dZone.element : false)
    }

    function touchend(e) {
        this.classList.remove('is-dragging')
        obj = { target: dropHere.elem }
        seEntrouNoDrop.forEach(dZone => {
            if (dZone.test) drop(obj, { boxTags, discard }, false)
        })
    }
    return card
}


















































































































































































































































































































































































































































































































/* 
if(obj.target) {
            console.log(obj.target)
                // cria e adiciona novo card
        _newCard = newCard({ elem: addElement(objCard), color: random('color') })
        addSan(boxTags, _newCard)

        // se for área de discarte
        if (obj.target == discard) {
            obj.target.classList.remove('to_discard_in_Focus')
        } else { // se for os dropzones
            obj.target.classList.remove('dropzone_in_focus') // remove classe responsável pelo estilo de focu.
            const attr_dropzone = obj.target.getAttribute('corresponding_dropZone') //pega  attributo que liga dropzona a tag
            _number_of_cards = () => Number.parseInt(obj.target.getAttribute('number_of_cards')) // transforma em num inteiro, valor do attributo que contem número de card(é usado como função para pegar o valor atualizado quando chamado.)

            //tags
            array_boxTags = Array.from(document.querySelectorAll('.tag')) // transforma em array para ser possível pecorrer
            obj.target.setAttribute('number_of_cards', _number_of_cards() + 1) // incrementa a quantidade de cards
            number_of_cards = _number_of_cards() // pega valor atualizado da  quantidade de cards

            // -> pega tag correspodente e atualizar valor
            array_boxTags[attr_dropzone].children[1].innerHTML = formatLargeNumbers(number_of_cards) // escreve na tag
        }
    }
 */

