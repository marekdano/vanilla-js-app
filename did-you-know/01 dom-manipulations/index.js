// Arrow function, here just a shorthand syntax, less typing is usually better.
// Other benefits - later ;-)
window.addEventListener('load', () => {
    // Get element using selectors, attach event handler
    const btnMarkAsRead = document.querySelector('#btnToggleRead')
    btnMarkAsRead.addEventListener('click', toggleRead)
})


