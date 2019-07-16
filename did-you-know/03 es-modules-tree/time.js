import timeFormat from './time-format.js';

export function time () {
    return timeFormat(new Date().toTimeString())
}

console.log('Hello from time.js')
