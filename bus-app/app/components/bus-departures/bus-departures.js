import { StyledComponent, register } from '../component.js';
import { State } from '../../services/state.js'

class BusDepartures extends StyledComponent {
  html () {
    const { searchExecuted, stop, departures } = State

    if (!searchExecuted) {
      return ''
    }

    return `
      <main class="bus-departures">
        ${this.stopHtml(stop)}

        <section class="departures">
          ${this.departuresHtml(stop, departures)}
        </section>
      </main>
      `
  }

  stopHtml (stop) {
    const { found, id, name, routes } = stop

    if (found) {
      return `
      <header>
        <label class="stop">
          Stop ${id}, ${name}
        </label>
        <label class="routes">
          Route ${routes.join(', ')}
        </label>
      </header>
    `
    }

    return `
      <header>
        <label class="not-found">
          Stop not found
        </label
      </header>`
  }

  departuresHtml (stop, departures = []) {
    if (!stop.found) {
      return ''
    }

    if (departures.length > 0) {
      return `
        <label class="departures">
          Departures
        </label>
      ` + departures
          .map(departure => this.departureHtml(departure))
          .join('\n')
    }

    return `
      <label class="error">
        No departures announced
      </label>
    `
  }

  departureHtml (departure) {
    const { route, minutes } = departure
    return `
      <article class="departure">
        <div class="route">${route}</div>
        <div class="minutes">${minutes}m</div>
      </article>
    `
  }
}

register('ba-bus-departures', BusDepartures)
