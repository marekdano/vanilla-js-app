import { StyledComponent, register } from '../component.js';

class Footer extends StyledComponent {
  html () {
    return `
    <footer>
      <label>(c) Tomasz Waraksa, Dublin 2019</label>
      <ba-time></ba-time>
    </footer>
    `
  }
}

register('ba-footer', Footer)