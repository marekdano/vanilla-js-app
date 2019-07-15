import formatTime from './format-time.js'

export function time () {
    return formatTime(new Date().toTimeString())
}

console.log('Hello from time.js')
