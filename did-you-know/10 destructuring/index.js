const customer = {
    active: true,
    name: 'Alibaba Co.',
    sales: {
        total: 1200000
    },
    returns: {
        total: 4000
    }
}

// Long and repetitive lines of code
if (customer.active) {
    const totalSales = `${customer.name}: ${customer.sales.total} EUR`
    console.log(totalSales)
}


// Extract data, then use it, with simpler syntax
const { active, name, sales: { total } } = customer
if (active) {
    const totalSales = `${name}: ${total} EUR`
    console.log(totalSales)
}


// Rename variables, to avoid conflicts with other variables
// or clarify ambiguous names.
const {
    sales: { total: totalSales },
    returns: { total: totalReturns }
} = customer
const totalSalesAndReturns = `${name}: sales ${totalSales} EUR, returns: ${totalReturns}`
console.log(totalSalesAndReturns)


// Provide defaults for undefined values.
const { 
    name: customerName, 
    address: customerAddress = 'Unknown' 
} = customer
console.log(`Customer ${customerName} address: ${customerAddress}`)


// Destructure arrays
const row = ['John', 'Doe', 23]
const [firstName, lastName, age] = row
console.log(`${firstName} ${lastName}, ${age}`)
// so much better than opaque
// console.log(`${row[0]} ${row[1]}, ${row[2]}`)


// Destructuring of function parameters
// Provide descriptive function parameters
// and nicely captures the expectations
// about the input values
function printProduct ({ id, name, price }) {
    console.log(`${id}: ${name}, ${price} EUR`)
}


// You can even use it in loops :-)
const patients = [
    { id: 112, status: 'A' },
    { id: 232, status: 'A+' },
    { id: 322, status: 'B' },
]
for (const { id, status } of patients) {
    console.log(`${id}: ${status}`)
}


// Now it's clear how it works with modules
// Module is an object, exports are its properties
// and with destructuring we ask for some of them
import { sum, div } from './module.js'
console.log('sum', sum (100, 200))
console.log('div', div(100, 200))
