window.addEventListener('load', () => {
    const button = document.querySelector('#btnMore')
    button.addEventListener('click', () => showMore())
})

function showMore () {
    import('./more.js')
        .then(() => {
            console.log('Module more.js has just been loaded!')
        })
}
