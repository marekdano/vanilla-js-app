class Printer {
    constructor () {
        this.count = 0
    }

    printOld (items) {
        items.forEach(function(item) {
            // Classic JavaScript is confused, what `this` means
            this.count++
            console.log(this)
        })
    }

    printNew (items) {
        items.forEach(item => {
            // Here `this` means natural `this`, which is the surrounding class
            this.count++
            console.log(this)
        })
    }
}

const printer = new Printer()
printer.printNew([1, 2, 3])
// printer.printOld([1, 2, 3])


// YOU CAN USE ARROW COMBINED WITH CONST
// TO PROTECT YOUR FUNCTIONS FROM BEING OVERWRITTEN
function abc () {
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
