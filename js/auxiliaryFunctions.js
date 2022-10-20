
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


const tag = (div, formatLargeNumbers = false, dZone = this, attr = false, title_tag = 'sem nome') => {
    const number_of_cards = dZone.getAttribute('number_of_cards')
    const __tag = div()
    const title = div()
    const length = div()

    title.classList.add('title_tag')
    length.classList.add('length_tag')
    __tag.classList.add('tag')
    if (attr) __tag.setAttribute(attr[0], attr[1])

    title.innerHTML = `<nobr>${title_tag}</nobr>`
    length.innerText = formatLargeNumbers ? formatLargeNumbers(number_of_cards) : number_of_cards


    addSan(__tag, title)
    addSan(__tag, length)
    return __tag
}


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

const random = (type = 'color') => {
    switch (type) {
        case 'color': {
            r = parseInt(Math.random() * 255)
            g = parseInt(Math.random() * 255)
            b = parseInt(Math.random() * 255)
            return `rgb(${r},${g},${b})`
        }
    }
}
