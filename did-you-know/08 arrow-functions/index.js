class Printer {
    constructor() {
        this.counter = 0
    }

    oldCount (items) {
        items.forEach(function (item) {
            if (item) {
                // Are you sure, Tomasz?
                this.counter++
                console.log(this)
            }
        })
    }

    count (items) {
        items.forEach(item => {
            if (item) {
                this.counter++
                console.log(this)
            }
        })
    }
}

const printer = new Printer()
printer.count([1, undefined, 2, 3])
// printer.oldCount([1, undefined, 2, 3])


// YOU CAN USE ARROW COMBINED WITH CONST
// TO PROTECT YOUR FUNCTIONS FROM BEING OVERWRITTEN
function abc() {
    console.log('This is function abc()')
}

abc = function () {
    console.log('This is another function abc()')
}

// Awww...
abc()

// But try this, and it's untouchable ;-)
const def = () => {
    console.log('This is function def()')
}
