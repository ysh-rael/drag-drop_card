
function Drag(element, pageHtml = false, essentialFunctions = false, ...func) {
    const card = document.querySelector(element)
    const dropzones = document.querySelectorAll('.dropzone_tags')


    /** our card */
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)

    function dragstart() {
        // dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

        this.classList.add('is-dragging')
    }
    function dragend() {
        // dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

        // this = card
        this.classList.remove('is-dragging')
    }

}





function Drop
    (
        element,
        initialZone,
        to_discard = "#to_discard",
        pageHtml = false,
        classOver = 'o_v_e_r',
        is_draging = '.is-draging',
        essentialFunctions = false
    ) {



    let dropzones = document.querySelectorAll(element)
    const _cards = document.querySelector(initialZone)
    const discard = document.querySelector(to_discard)


    const { addSan, removeSan } = essentialFunctions

    dropzones = Array.from(dropzones)
    dropzones.push(_cards)
    dropzones.push(discard)



    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
    })

    function dragenter() {
        const cardBeingDragged = document.querySelector(is_draging)
        if (this == _cards) {
            const cards = document.querySelector(initialZone)
            cards.insertAdjacentElement('afterbegin', cardBeingDragged)

        } else {
            cardBeingDragged.style.display = 'none'
            this.classList.add(classOver)
            addSan(this, cardBeingDragged)
        }

    }

    function dragover() {
    }

    function dragleave() {
        const cardBeingDragged = document.querySelector(is_draging)
        cardBeingDragged.style.display = 'none'
        if (this === _cards) cardBeingDragged.style.display = 'block'

    }




}



    
    function addSan(dad = this, san = false) {
        if (san) {
            try {
                dad.append(san)
                return dad
            } catch (err) {
                console.log("Could not add child in parent tag: \n", err)
                
                return false
            }
    
        }
        
    }
    function removeSan(dad = this, san = false) {
        if (san) {
            try {
                dad.remove(san)
                return dad
            } catch (err) {
                console.log("Unable to remove child in parent tag: \n", err)
                return false
            }
        }
        
    }
    
    
    
    Drag('#atual_card', false);

    
    Drop(
        ".dropzone_tags",
        '.cards',
        "#to_discard", 
        false,
        'over',
        '.is-dragging',
        { addSan, removeSan }
        )