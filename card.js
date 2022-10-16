/*
     ⣠⣦⣤⣀
⠀⠀⠀⠀⢡😔⣿
⠀⠀⠀⠀⠠⠜⢾⡟
⠀⠀⠀⠀⠀⠹⠿⠃⠄
⠀⠀⠈⠀⠉⠉⠑⠀⠀⠠⢈⣆
⠀⠀⣄⠀⠀⠀⠀⠀⢶⣷⠃⢵
⠐⠰⣷⠀⠀⠀⠀⢀⢟⣽⣆⠀⢃
⠰⣾⣶⣤🙏⣦⣤⣴⣾⣿⣿⠞
⠀⠈⠉⠉⠛⠛⠉⠉⠉⠙⠁
⠀⠀⡐⠘⣿⣿⣯⠿⠛⣿⡄
⠀⠀⠁⢀⣄⣄⣠⡥⠔⣻⡇
⠀⠀⠀⠘⣛⣿⣟⣖⢭⣿⡇
⠀⠀⢀⣿⣿⣿⣿⣷⣿⣽⡇
⠀⠀⢸⣿⣿⣿⡇⣿⣿⣿⣇
⠀⠀⠀⢹⣿⣿⡀⠸⣿⣿⡏
⠀⠀⠀⢸⣿⣿⠇⠀⣿⣿⣿
⠀⠀⠀⠈⣿⣿⠀⠀⢸⣿⡿
⠀⠀⠀⠀⣿⣿⠀⠀⢀⣿⡇
⠀⣠⣴⣿⡿⠟⠀⠀⢸⣿⣷
⠀⠉⠉⠁⠀⠀⠀⠀⢸⣿⣿⠁POR FAVOR FUNCIONE!
*/


// CREATE CARD

function newCard(parameter, func = false, _tagHtml = 'div') {
    elem = parameter.elem
    color = parameter.color


    console.log()
    if(color) elem.style.backgroundColor = color

    if (!!func) {
        try {
            func.forEach(f => f())
        } catch (err) {
            console.log("incapaz de executar funçõe chamadas dentro do 'createCard' <> ", err)
        }
    }
}





/*
▬▬▬.◙.▬▬▬
═▂▄▄▓▄▄▂
◢◤ █▀▀████▄▄▄▄▄▄◢◤
█▄ █ :) ██▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══
▬▬▬. FUNÇÃO DRAG ==>(CARD) <=== .▬▬▬ 
*/


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
    return card
}



/*
_____Sexy?Sex
____?Sexy?Sexy
___y?Sexy?Sexy?
___?Sexy?Sexy?S         <><><><> FUNÇÃO DROP - (dropzones) <><><><>
___?Sexy?Sexy?S
__?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Sexy?
?Sexy?Sexy?Sexy?Sexy
?Sexy?Sexy?Sexy?Sexy?Se
?Sexy?Sexy?Sexy?Sexy?Sex
_?Sexy?__?Sexy?Sexy?Sex
___?Sex____?Sexy?Sexy?
___?Sex_____?Sexy?Sexy
___?Sex_____?Sexy?Sexy
____?Sex____?Sexy?Sexy
_____?Se____?Sexy?Sex
______?Se__?Sexy?Sexy
_______?Sexy?Sexy?Sex
________?Sexy?Sexy?sex
_______?Sexy?Sexy?Sexy?Se
_______?Sexy?Sexy?Sexy?Sexy?
_______?Sexy?Sexy?Sexy?Sexy?Sexy
_______?Sexy?Sexy?Sexy?Sexy?Sexy?S
________?Sexy?Sexy____?Sexy?Sexy?se
_________?Sexy?Se_______?Sexy?Sexy?
_________?Sexy?Se_____?Sexy?Sexy?
_________?Sexy?S____?Sexy?Sexy
_________?Sexy?S_?Sexy?Sexy
________?Sexy?Sexy?Sexy
________?Sexy?Sexy?S
________?Sexy?Sexy
_______?Sexy?Se
_______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy
______?Sexy
_______?Sex
_______?Sex
_______?Sex
______?Sexy
______?Sexy
_______Sexy
_______ Sexy?
________SexY 

*/

function Drop(object, init = false) {
    // relaciono os itens do objeto a variáveis
    add = object.add,
        element = object.element,
        _elementParent = object._elementParent,
        initialZone = object.initialZone,
        to_discard = object.to_discard ? object.to_discard : '#to_discard',
        pageHtml = object.pageHtml,
        classOver = object.classOver ? object.classOver : '#o_v_e_r',
        is_draging = object.is_draging ? object.is_draging : '.is-draging',
        tags = object.tags ? object.tags : '#tags',
        essentialFunctions = object.essentialFunctions


    const div = () => document.createElement('div') // cria um elemento html (div)
    const elementParent = document.querySelector(_elementParent) // pega o elemento pai
    let dropzones = document.querySelectorAll(element) // array com os elementos
    const _cards = document.querySelector(initialZone) // pega local inicial do card
    const discard = document.querySelector(to_discard) // pega zona para descarte
    const boxTags = document.querySelector(tags) // box em que agrupa as tags

    const { addSan, addElement } = essentialFunctions // extraio funções das quais preciso
    dropzones = Array.from(dropzones) // transformo em array para poder modificar 

    function addEventInDropzone(elem) {
        elem.addEventListener('dragenter', dragenter)
        elem.addEventListener('dragover', e => dragover(e), false)
        elem.addEventListener('dragleave', dragleave)
        elem.addEventListener("drop", (e) => drop(e));


        return elem
    }


    // verifico se é a chamada inicial
    if(init) {
        addEventInDropzone(_cards)
        addEventInDropzone(discard)
    }

    if (add) { // verifica se deve ser criado uma nova dropzona
        const corresponding_dropZone = ['corresponding_dropZone', dropzones.length]

        myParameters = {
            element: div,
            dad: elementParent,
            classes: 'dropzone_tags',
            attribute: [{key: 'number_of_cards', value: 0}, {key: corresponding_dropZone[0], value: corresponding_dropZone[1]}],
        }
        const dropzone = addElement(myParameters)
        dropzones.push(dropzone)
        // verifica se há attributo para contagem de cards
        if (!dropzone.hasAttribute('number_of_cards')) dropzone.setAttribute('number_of_cards', 0)
        // cria tag e adiciona no 'boxTags'
        const newTag = tag(div, formatLargeNumbers, dropzone, corresponding_dropZone)
        addSan(boxTags, newTag)
        /* number_of_cards = Number.parseInt(dropzone.getAttribute('number_of_cards'))
                    dropzone.setAttribute('number_of_cards', number_of_cards + 1) */
        dropzones.push(_cards)
        dropzones.push(discard)

        addEventInDropzone(dropzone)

        dropzones.splice(dropzones.indexOf(_cards), 1);
        dropzones.splice(dropzones.indexOf(discard), 1);
    }
   










    // FUNÇÕES DENTRO DO DROP(usadas nos eventos)


    function dragenter() {
        const cardBeingDragged = document.querySelector(is_draging)
        if (this == _cards) {
            const cards = document.querySelector(initialZone)
            cards.insertAdjacentElement('afterbegin', cardBeingDragged)

        } else {
            cardBeingDragged.style.display = 'none'
            this.classList.add(classOver)
            addSan(this, cardBeingDragged)
            if (this !== discard) {
                // array_boxTags = Array.from(document.querySelectorAll('.tag'))
                // array_boxTags[attr_dropzone] -> pega tag correspodente
                number_of_cards = Number.parseInt(this.getAttribute('number_of_cards'))


                this.setAttribute('number_of_cards', number_of_cards + 1)
                const attr_dropzone = this.getAttribute('corresponding_dropZone')

            }
        }

        this.classList.add('dropzone_in_focus')
    }

    function dragover(e) {
        e.preventDefault()
    }

    function dragleave() {
        const cardBeingDragged = document.querySelector(is_draging)
        // cardBeingDragged.style.display = 'none'
        if (this === _cards) { cardBeingDragged.style.display = 'block' }


        this.classList.remove('dropzone_in_focus')

    }

    function drop(e) {
        e.preventDefault()
        if (e.target == _cards) {
            console.log('_cardzone')

        } else {
            if (e.target == discard) {
                console.log("deleteZone")
                
            }
            // se for os dropzones
            else {
                
                console.log("dropzone")
            }
        }
    }




}


/* ──────▄▀▀═════════════▀▀▄
───────█═══════════════════█
──────█═════════════════════█
─────█═══▄▄▄▄▄▄▄═══▄▄▄▄▄▄▄═══█
────█═══█████████═█████████═══█
────█══██▀────▀█████▀────▀██══█         ╔══════•ೋೋ•══════╗ 
───██████──█▀█──███──█▀█──██████
───██████──▀▀▀──███──▀▀▀──██████        FUNÇÕES AUXILIARES
────█══▀█▄────▄██─██▄────▄█▀══█
────█════▀█████▀───▀█████▀════█         ╚══════•ೋೋ•══════╝
────█═════════════════════════█      ||
────█═════════════════════════█    |||
────█═══════█▀█▀█▀█▀█▀█═══════█  |||
────█═══════▀▄───────▄▀═══════█
───▐▓▓▌═══════▀▄█▄█▄▀═══════▐▓▓▌
───▐▐▓▓▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐▓▓▌▌
───█══▐▓▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▓▌══█
──█══▌═▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌═▐══█
──█══█═▐▓▓▓▓▓▓▄▄▄▄▄▄▄▓▓▓▓▓▓▌═█══█
──█══█═▐▓▓▓▓▓▓▐██▀██▌▓▓▓▓▓▓▌═█══█
──█══█═▐▓▓▓▓▓▓▓▀▀▀▀▀▓▓▓▓▓▓▓▌═█══█
──█══█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█══█
─▄█══█▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌█══█▄
─█████▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌─█████
─██████▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌─████
──▀█▀█──▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌───█▀█▀
─────────▐▓▓▓▓▓▓▌▐▓▓▓▓▓▓▌
──────────▐▓▓▓▓▌──▐▓▓▓▓▌ */



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
//------------------------------------------ FIM

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
//------------------------------------------ FIM

const tag = (div, formatLargeNumbers = false, dZone = this, attr = false) => {
    const number_of_cards = dZone.getAttribute('number_of_cards')
    const __tag = div()
    const title = div()
    const length = div()

    title.classList.add('title_tag')
    length.classList.add('length_tag')
    __tag.classList.add('tag')
    if (attr) __tag.setAttribute(attr[0], attr[1])

    title.innerHTML = "<nobr>00_título_00</nobr>"
    length.innerText = formatLargeNumbers ? formatLargeNumbers(number_of_cards) : number_of_cards


    addSan(__tag, title)
    addSan(__tag, length)
    return __tag
}
//------------------------------------------ FIM

const formatLargeNumbers = number => {
    stng_number = Number.parseInt(number).toString()
    function formatNumber(numberTest, amount, _start, _end) {
        stng_number[numberTest] == 0 ?
            stng_number = `${stng_number.substr(_start, _end)}${amount}` : stng_number = `${stng_number.substr(_start, _end)},${stng_number[_end]}${amount}`
    }
    switch (stng_number.length) {
        case 0:
        case 1:
        case 2:
        case 3:
            break
        case 4:
            formatNumber(1, 'K', 0, 1)
            break
        case 5:
            formatNumber(2, 'K', 0, 2)
            break
        case 6:
            formatNumber(3, 'K', 0, 3)
            break
        case 7:
            formatNumber(1, 'M', 0, 1)
            break
        case 8:
            formatNumber(2, 'M', 0, 2)
            break
        case 9:
            formatNumber(3, 'M', 0, 3)
            break
        case 10:
            formatNumber(1, 'B', 0, 1)
            break
        case 11:
            formatNumber(2, 'B', 0, 2)

            break
        case 12:
            formatNumber(3, 'B', 0, 3)
            break
        default:
            stng_number = '...'
            break

    }
    return stng_number
}
//------------------------------------------ FIM

const addElement = (object) => {
    _element = object.element
    dad = object.dad
    id = object.id
    classes = object.classes
    attribute = object.attribute
    value = object.value

    // verifica se 'element' é uma função para criação do elemento ou uma referencia a um existente
    typeof _element == 'function' ? element = _element() : element = _element

    // retorna por padrão o próprio elemento
    _return = !!object._return ? object._return : element 

    // tenta adicionar attributos ao elemento
    try {
        if (id) element.setAttribute('id', id)
        if (classes) typeof classes == 'string' ? element.classList.add(classes) : classes.forEach(c => element.classList.add(c))
        if (attribute) attribute.forEach(attr => element.setAttribute(attr.key, attr.value))
        if (value) element.setAttribute('value', value)
    } catch (err) {
        console.log(`Could not configure one/some of the following attributes: id; class; attribute; value <> >>> ${err}`)
    }
    //tenta adicionar dentro do elemento 'dad'
    try {
        dad.append(element)

    } catch (err) {
        console.log(`Could not add element inside parent <> ${err}`)
    }

    return _return
}
//------------------------------------------ FIM

const random = (type = 'color') => {
    switch(type) {
        case 'color' : {
            r = parseInt(Math.random() * 255)
            g = parseInt(Math.random() * 255)
            b = parseInt(Math.random() * 255)
            return `rgb(${r},${g},${b})`
        }
    }
}


/*

░░█▀░░░░░░░░░░░▀▀███████░░░░ 
░░█▌░░░░░░░░░░░░░░░▀██████░░░ 
░█▌░░░░░░░░░░░░░░░░███████▌░░ 
░█░░░░░░░░░░░░░░░░░████████░░ 
▐▌░░░░░░░░░░░░░░░░░▀██████▌░░ 
░▌▄███▌░░░░▀████▄░░░░▀████▌░░ 
▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░ 
▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌ 
▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌ 
▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌ 
░▌░░▀▀▄▄▀▀▄▌▌░░░░░░░░░░▐░▀▐▐░ 
░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░ 
░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░ 
░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░ 
░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░ 
░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░ 
░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░ 
░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░ 
░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░ 
▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░ 
░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄ 
░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░ 
░░▄▌████████▄▄▄███████▌░░░░░▄ 
░▄▀░██████████████████▌▀▄░░░░ 
▀░░░█████▀▀░░░▀███████░░░▀▄░░ 
░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░ 
░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀ 
░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░ 
░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░ 
░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░ 
░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═﻿

┻┳|―-∩
┳┻|　　ヽ
┻┳|　●   |    
┳┻|▼) _ノ
┻┳|￣　)    CHAMADA DAS FUNÇÕES DRAG / DROP 
┳ﾐ(￣  ／
┻┳T

*/

let objectDrop = {
    add: true,
    element: ".dropzone_tags",
    _elementParent: "#dropzones",
    initialZone: '.cards',
    to_discard: "#to_discard",
    classOver: 'over',
    is_draging: '.is-dragging',
    tags: "#tags",
    essentialFunctions: { addSan, removeSan, tag, addElement }
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



newCard({ elem: addElement(objCard), color: random('color')})
Drag('#'+objCard.id, false);
Drop(objectDrop, true)
Drop(objectDrop)
Drop(objectDrop)


