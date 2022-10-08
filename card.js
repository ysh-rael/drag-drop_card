
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
        pageHtml = false,
        is_draging = '.is_draging',
        classOver = 'o_v_e_r',
        essentialFunctions = false
    ) {



        let dropzones = document.querySelectorAll(element)
        const section_card = document.querySelector('#section_cards')

        dropzones = Array.from(dropzones)
        console.log(typeof dropzones)
        dropzones.push(section_card)
        console.log(dropzones.length)



        dropzones.forEach(dropzone => {
            dropzone.addEventListener('dragenter', dragenter)
            dropzone.addEventListener('dragover', dragover)
            dropzone.addEventListener('dragleave', dragleave)
        })
        
        function dragenter() {
            const cardBeingDragged = document.querySelector('.is-dragging')
            if(this == section_card) {
                const cards = document.querySelector('.cards')
                // addSan(cards, cardBeingDragged)
                cards.insertAdjacentElement('afterbegin', cardBeingDragged)

            } else { this.classList.add(classOver)
        
            addSan(this, cardBeingDragged)}

        }
        
        function dragover() {
        }
        
        function dragleave() {
            const cardBeingDragged = document.querySelector('.is-dragging')
            cardBeingDragged.style.display = 'none'
            if(this === section_card) cardBeingDragged.style.display = 'block'
            removeSan(this, classOver)
        
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
Drop(".dropzone_tags", { addSan, removeSan }, false, false, 'over')