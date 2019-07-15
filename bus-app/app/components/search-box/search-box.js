import { StyledComponent, register } from '../component.js'
import { State } from '../../services/state.js'
import { Actions } from '../../services/actions.js';

class SearchBox extends StyledComponent {
  get buttonFind () {
    return this.querySelector('button[name=find]')
  }

  get inputStopNumber () {
    return this.querySelector('input[name=stopNumber]')
  }

  html () {
    const { stop: { id = '' } } = State
    return `
    <header class="search-box">
      <label>
        Stop number:
      </label>
      <span>
        <input name="stopNumber" type="number" min="0" max="99999" value="${id}">
        <button name="find">
          Find
        </button>
    </header>
    `
  }

  async render () {
    await super.render()
    this.buttonFind.addEventListener('click', () => this.find())
  }

  find () {
    const stopId = this.inputStopNumber.value
    Actions.selectStop(stopId)
  }
}

register('ba-search-box', SearchBox)