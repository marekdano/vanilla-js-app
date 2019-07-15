import { StyledComponent, register } from '../component.js';

class Time extends StyledComponent {
  constructor () {
    super()
    this.start()
  }

  get time () {
    return new Date().toTimeString().substr(0, 8)
  }

  html () {
    return `<span class="time">${this.time}</span>`
  }

  start () {
    window.setInterval(() => {
      this.render()
    }, 1000)
  }
}

register('ba-time', Time)
