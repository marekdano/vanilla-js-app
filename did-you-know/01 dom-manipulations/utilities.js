function toggleRead() {
    // Get elements using selectors
    // Good practice - use constants unless you really can't get away without!
    const btnMarkAsRead = document.querySelector('#btnToggleRead')
    const title = document.querySelector('.title')
    const subtitle = document.querySelector('.subtitle')
    const paragraphs = document.querySelectorAll('.text')

    // Toggle class. There's also add and remove
    title.classList.toggle('read')
    subtitle.classList.toggle('read')

    // Turn a non-array into iterable
    // DOM collections are notoriously almost-Array-like-but-not-entirely,
    // so Array.from is here to help
    for (const paragraph of Array.from(paragraphs)) {
        paragraph.classList.toggle('read')
    }

    // Check if class is set
    const isRead = title.classList.contains('read')
    btnMarkAsRead.innerHTML = isRead ? 'Mark as Unread' : 'Mark as Read'
}
