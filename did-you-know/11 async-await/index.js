// Promises ...
function getUrl (id) {
    const url = `https://data.smartdublin.ie/cgi-bin/rtpi/busstopinformation?stopid=${id}&format=json`
    return url
}

function getBusStop1 (id) {
    const url = getUrl(id)
    fetch(url)
        .then(response => response.json())
        .then(data => data.results[0])
        .then(stop => {
            console.log('Bus stop', stop)
        })
        .catch(error => {
            console.log('Error', error)
        })
}

getBusStop1(1734)


// Async
async function getBusStop2 (id) {
    const url = getUrl(id)
    try {
        const response = await fetch(url)
        const data = await response.json()
        const stop = data.results[0]
        console.log('Bus stop', stop)
    } catch (error) {
        console.log('Error', error)
    }
}

getBusStop2(1734)


// Async loading of modules
async function showSum(a, b) {
    const { sum } = await import('./module.js')
    console.log('SUM() is ready!', sum(a, b))
}

showSum(1, 2)
