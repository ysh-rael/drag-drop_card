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

function Drop
    (
        element,
        initialZone,
        to_discard = "#to_discard",
        pageHtml = false,
        classOver = 'o_v_e_r',
        is_draging = '.is-draging',
        tags = '#tags',
        essentialFunctions = false
    ) {

    const div = () => document.createElement('div')
    let dropzones = document.querySelectorAll(element)
    const _cards = document.querySelector(initialZone)
    const discard = document.querySelector(to_discard)
    const boxTags = document.querySelector(tags)
    const { addSan, removeSan } = essentialFunctions


    dropzones = Array.from(dropzones)
    dropzones.push(_cards)
    dropzones.push(discard)


    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        if (dropzone !== _cards && dropzone !== discard) {
            if (!dropzone.hasAttribute('number_of_cards')) dropzone.setAttribute('number_of_cards', 0)
            else {
                number_of_cards = Number.parseInt(dropzone.getAttribute('number_of_cards'))
                dropzone.setAttribute('number_of_cards', number_of_cards + 1)
            }

            tag(div, boxTags, formatLargeNumbers, dropzone)

        }

    })


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
        }

    }

    function dragover() {
        this.classList.add('dropzone_in_focus')
    }

    function dragleave() {
        const cardBeingDragged = document.querySelector(is_draging)
        cardBeingDragged.style.display = 'none'
        if (this === _cards) cardBeingDragged.style.display = 'block'
        this.classList.remove('dropzone_in_focus')

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

const tag = (div, dad, formatLargeNumbers = false, dZone = this) => {
    const number_of_cards = dZone.getAttribute('number_of_cards')
    const __tag = div()
    const title = div()
    const length = div()
    title.classList.add('title_tag')
    length.classList.add('length_tag')
    __tag.classList.add('tag')
    title.innerHTML = "<nobr>00_título_00</nobr>"
    length.innerText = formatLargeNumbers ? formatLargeNumbers(number_of_cards) : number_of_cards


    addSan(__tag, title)
    addSan(__tag, length)
    addSan(dad, __tag)
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


Drag('#atual_card', false);


Drop(
    ".dropzone_tags",
    '.cards',
    "#to_discard",
    false,
    'over',
    '.is-dragging',
    "#tags",
    { addSan, removeSan, tag }
)