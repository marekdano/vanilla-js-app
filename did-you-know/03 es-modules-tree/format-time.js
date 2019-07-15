// Default function parameters
// Default export
export default function formatTime(time, long = true) {
  return long ? time.substr(0, 8) : time.substr(0, 5)
}

console.log('Hello from format-time.js')