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
        title_tag = object.title_tag ? object.title_tag : 'desconhecido',
        essentialFunctions = object.essentialFunctions

    const { addSan, addElement, random } = essentialFunctions // extraio funções das quais preciso

    const div = () => document.createElement('div') // cria um elemento html (div)
    const elementParent = document.querySelector(_elementParent) // pega o elemento pai
    let dropzones = document.querySelectorAll(element) // array com os elementos
    const _cards = document.querySelector(initialZone) // pega local inicial do card
    const discard = document.querySelector(to_discard) // pega zona para descarte
    const boxTags = document.querySelector(tags) // box em que agrupa as tags

    dropzones = Array.from(dropzones) // transformo em array para poder modificar 

    function addEventInDropzone(elem) { // função para adicinar evento as dropzonas
        elem.addEventListener('dragenter', dragenter)
        elem.addEventListener('dragover', e => dragover(e), false)
        elem.addEventListener('dragleave', dragleave)
        elem.addEventListener("drop", (e) => drop(e));
        return elem
    }

    // verifico se é a chamada inicial
    if (init) {
        addEventInDropzone(discard)
    }
    if (add) { // verifica se deve ser criado uma nova dropzona
        const corresponding_dropZone = ['corresponding_dropZone', dropzones.length]

        myParameters = {
            element: div,
            dad: elementParent,
            classes: 'dropzone_tags',
            attribute: [{ key: 'number_of_cards', value: 0 }, { key: corresponding_dropZone[0], value: corresponding_dropZone[1] }],
        }
        const dropzone = addElement(myParameters) // crio um elemento (uma dropzona)
        dropzones.push(dropzone)

        // verifica se há atributo para contagem de cards
        if (!dropzone.hasAttribute('number_of_cards')) dropzone.setAttribute('number_of_cards', 0)

        // cria tag e adiciona no 'boxTags'
        const newTag = tag(div, formatLargeNumbers, dropzone, corresponding_dropZone, title_tag)
        addSan(boxTags, newTag)

        addEventInDropzone(dropzone)
    }


    // FUNÇÕES DENTRO DO DROP(usadas nos eventos)
    function dragenter() {
            this.classList.add(classOver)
            if (this !== discard) { } // se estiver entrado na dropzona do discarte
        
        this.classList.add('dropzone_in_focus') // ao entar da dropzona, add nela a classe responsável pelo estilo de foco ( executa em todos os casos )
    }

    function dragover(e) {
        e.preventDefault() // necessário para o funcionamento do evento drop
    }

    function dragleave() {
        this.classList.remove('dropzone_in_focus') // ao sair da dropzona, remove dela a classe responsável pelo estilo de foco
    }

    function drop(e) {
        e.preventDefault() // necessário para o funcionamento do evento
         // executa em todos os casos

            // cria e adiciona novo card
            _newCard = newCard({ elem: addElement(objCard), color: random('color') })
            addSan(boxTags, _newCard)

            // se for área de discarte
            if (e.target == discard) {
               /*  console.log("deleteZone") */
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

}
