const dropzone = document.getElementById('dropzones')
function getCoordCurrent(zone) {
    if( zone ) {

    }
    const coord = coordinate(zone)
    return coord
}
const { height, pageY } = getCoordCurrent(dropzone)
let visualLimit = height

const cl = algo => console.log(algo)
window.onresize = () => {
    const { height, pageY } = getCoordCurrent(dropzone)
    visualLimit = height + pageY
    cl("😈 Limite Visual: ")
    cl(visualLimit)
    cl(dropzoneMeasurements)
}
