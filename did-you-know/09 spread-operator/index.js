const company = {
    id: 122,
    name: 'Microsoft Inc'
}

// Enrich existing object --------------
const customer = {
    ...company,
    active: true
}

console.log('company', company)
console.log('customer', customer)


// Combine objects --------------------
const person = { firstName: 'Jimi', lastName: 'Hendrix' }
const phone = { phone: '088772233' }
const address = { street: 'Moore St', houseNumber: 122 }
const contact = { ...person, ...phone, ...address }

console.log('contact', contact)



// Copy arrays ------------------
const readouts = [1, 2, 3]
const copyOfReadouts = [...readouts]
console.log('Copy of readouts', readouts)



// Concatenate arrays ------------------
const row1 = [1, 2, 3]
const row2 = [21, 22, 23]
const extra = 56
const all = [...row1, extra, ...row2]
console.log('all', all)



// Functions with variable number of arguments --------------
function phoneNumbers(prefix, ...lines) {
    return lines
        .map(line => prefix + ' ' + line)
        .join(', ')
}

console.log('Phone Numbers', phoneNumbers('+353 102 22', '100', '200'))
console.log('Phone Numbers', phoneNumbers('+353 102 22', '100', '200', '300', '999'))


// Spread an array into function arguments ---------
function print(...numbers) {
    console.log(`${numbers.length} numbers`, numbers)
}


const items = [1, 2, 3, 4]
print(...items) // as opposed to print(items[1], items[2], items[3] etc..)



// Convert DOM almost-arrays into actual iterable arrays
// Same as Array.from()
const elements = [...document.querySelectorAll('h1')]
for (const element of elements) {
    console.log('Found <h1> element', element)
}
