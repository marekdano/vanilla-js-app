class Application {
    static main () {
        console.log('API is ready', API.endpoint)
        console.log('API/Products GET', API.getProducts())
    }
}

window.addEventListener('load', () => Application.main())

class API {
    static get endpoint() {
        return 'http://localhost/api/'
    }

    static getProducts() {
        return {
            data: [
                { id: 1, name: 'Product 1' },
                { id: 2, name: 'Product 2' },
                { id: 3, name: 'Product 3' },
            ]
        }
    }
}


