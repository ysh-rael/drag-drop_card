const dropzones = document.getElementById('dropzones')

function getCoordCurrent(zone) {
    if( zone ) {

    }
    const coord = coordinate(zone)
    return coord
}
const { height, pageY } = getCoordCurrent(dropzones)
let visualLimit = height + pageY


dropzones.addEventListener('scroll', () => {
    const currentDropzoneMeasurements = dropzoneMeasurements.map((e, i, a) => {
        return getCoordCurrent(e.elem)
    })
    dropzoneMeasurements = currentDropzoneMeasurements
})

window.onresize = () => {
    const { height, pageY } = getCoordCurrent(dropzones)
    visualLimit = height + pageY
    console.log("😈 Limite Visual: ", visualLimit)
 
}
