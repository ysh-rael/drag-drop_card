
const drop = (e, obj, isEvent = true) => {
    const { discard, boxTags } = obj
    if (isEvent) e.preventDefault() // necessário para o funcionamento do evento
    // executa em todos os casos

    // cria e adiciona novo card
    _newCard = newCard({ elem: addElement(objCard), color: random('color') })
    addSan(boxTags, _newCard)

    // se for área de discarte
    if (e.target == discard) {
        e.target.classList.remove('to_discard_in_Focus')
    } else { // se for os dropzones
        e.target.classList.remove('dropzone_in_focus') // remove classe responsável pelo estilo de focu.
        const attr_dropzone = e.target.getAttribute('corresponding_dropZone') //pega  attributo que liga dropzona a tag
        _number_of_cards = () => Number.parseInt(e.target.getAttribute('number_of_cards')) // transforma em num inteiro, valor do attributo que contem número de card(é usado como função para pegar o valor atualizado quando chamado.)

        //tags
        array_boxTags = Array.from(document.querySelectorAll('.tag')) // transforma em array para ser possível pecorrer
        e.target.setAttribute('number_of_cards', _number_of_cards() + 1) // incrementa a quantidade de cards
        number_of_cards = _number_of_cards() // pega valor atualizado da  quantidade de cards

        // -> pega tag correspodente e atualizar valor
        array_boxTags[attr_dropzone].children[1].innerHTML = formatLargeNumbers(number_of_cards) // escreve na tag
    }
}