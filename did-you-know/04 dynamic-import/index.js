window.addEventListener('load', () => {
    const button = document.querySelector('#btnMore')
    button.addEventListener('click', () => showMore())
})

// Async/await pattern
// Inside it's just the good old promises, but it reads
// so much easier! More later.
async function showMore () {
    await import('./more.js')
    console.log('Module more.js loaded!')
}
