// Default function parameters
// Default export
export default function timeFormat(time, long = true) {
  return long ? time.substr(0, 8) : time.substr(0, 5)
}

console.log('Hello from time-format.js')