
function Drag(element, pageHtml = false, essentialFunctions = false , ...func) {
    const card = document.querySelector(element)

    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

    function dragstart(event) {
        this.classList.add('is_draging')
        console.log(this)

    }
    function drag(event) {

    }
    function dragend(event) {
        this.classList.remove('is_draging')
        console.log(this)


    }

    if (func) func.forEach(_function => _function())

}



function addSan(dad = false, san = false) {
    if(dad && san) {
        try {
            dad.append(san)
            return dad
        } catch (err) {
            console.log("Could not add child in parent tag: \n", err)
    
            return false
        }

    }

}
function removeSan(dad = false, san = false) {
    if(dad && san) {
        try {
            dad.remove(san)
            return dad
        } catch (err) {
            console.log("Unable to remove child in parent tag: \n", err)
            return false
        }
    }

}







function Drop
    (
        element, 
        pageHtml = false, 
        is_draging = '.is_draging', 
        essentialFunctions = false
    ) 
    {
    const dropzones = document.querySelectorAll(element)
    const { addSan, removeSan } = essentialFunctions

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        dropzone.addEventListener(drop, _drop)

    })


    function dragenter({ target }) {
        const cardBeingDragged = document.querySelector(is_draging)
        this.append(cardBeingDragged)

    }
    function dragover({ target }) {
        
        
    }
    function dragleave({ target }) {
        const cardBeingDragged = document.querySelector(is_draging)

        this.remove(cardBeingDragged)

        
    }
    function _drop(event) {
        event.preventDefault();
        if(target.classList) {
            alert(target.classList)

    }
    }




}

Drag('#atual_card', false); Drop(".dropzone_tags", false, false, {addSan, removeSan})