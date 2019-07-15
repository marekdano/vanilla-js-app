export default function time () {
    return new Date().toTimeString().substr(0, 8)
}
