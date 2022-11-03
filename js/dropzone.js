function Drop(init = false, object) {
    // relaciono os itens do objeto a variáveis
    add = object.add,
        element = object.element,
        _elementParent = object._elementParent,
        initialZone = object.initialZone,
        to_discard = object.to_discard ? object.to_discard : '.to_discard',
        pageHtml = object.pageHtml,
        classOver = object.classOver ? object.classOver : '#o_v_e_r',
        is_draging = object.is_draging ? object.is_draging : '.is-draging',
        tags = object.tags ? object.tags : '#tags',
        title_tag = object.title_tag ? object.title_tag : 'desconhecido',
        color = object.color
    essentialFunctions = object.essentialFunctions

    const { addSan, addElement, random } = essentialFunctions // extraio funções das quais preciso

    const div = () => document.createElement('div') // cria um elemento html (div)
    const elementParent = document.querySelector(_elementParent) // pega o elemento pai
    let dropzones = document.querySelectorAll(element) // array com os elementos
    const _cards = document.querySelector(initialZone) // pega local inicial do card
    const discard = document.querySelector(to_discard) // pega zona para descarte
    const boxTags = document.querySelector(tags) // box em que agrupa as tags

    dropzones = Array.from(dropzones) // transformo em array para poder modificar 
    function coordenadas(elem) {
            const rect = elem.getBoundingClientRect()
            return {
                width: parseInt(rect.width),
                height: parseInt(rect.height),
                pageX: parseInt(rect.left),
                pageY: parseInt(rect.top),
                elem
            }
        
    }

    function addEventInDropzone(elem) { // função para adicinar evento as dropzonas
        elem.addEventListener('dragenter', dragenter)
        elem.addEventListener('dragover', e => e.preventDefault(), false) // necessário para o funcionamento do evento drop
        elem.addEventListener('dragleave', dragleave)
        elem.addEventListener("drop", event => drop(event, {boxTags, discard}));
        dropzoneMeasurements.push(coordenadas(elem))
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
        dropzone.style.background = color
        dropzones.push(dropzone)

        // verifica se há atributo para contagem de cards
        if (!dropzone.hasAttribute('number_of_cards')) dropzone.setAttribute('number_of_cards', 0)

        // cria tag e adiciona no 'boxTags'
        const newTag = tag(div, formatLargeNumbers, dropzone, corresponding_dropZone, title_tag)
        newTag.style.backgroundColor = color
        addSan(boxTags, newTag)

        addEventInDropzone(dropzone)
    }


    // FUNÇÕES DENTRO DO DROP(usadas nos eventos)
    function dragenter() {
        this.classList.add(classOver)
        this === discard ? this.classList.add('to_discard_in_Focus') : this.classList.add('dropzone_in_focus') // ao entar da dropzona, add nela a classe responsável pelo estilo de foco
    }

    function dragleave() {
        this === discard ? this.classList.remove('to_discard_in_Focus') : this.classList.remove('dropzone_in_focus') // ao sair da dropzona, remove dela a classe responsável pelo estilo de foco
    }
}
