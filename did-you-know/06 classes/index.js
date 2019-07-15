class Component {
    constructor () {
        console.log(`Component ${this.name} created`)
    }

    get name () {
        throw new Error('Not implemented')
    }

    render () {
        throw new Error('Not implemented')
    }
}


class CustomerList extends Component {
    get name () {
        return 'CustomerList'
    }

    get render () {
        return `
            <div class='customer-list'>
            </div>
        `
    }
}

const component1 = new CustomerList()
const component2 = new Component()