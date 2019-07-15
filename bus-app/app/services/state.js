// Initial state values
const initialState = {
  searchExecuted: false,
  stop: {
    id: '',
    name: '',
    found: false,
    routes: []
  },
  departures: []
}

/**
 * Application state.
 * With a bit of effort you could turn this to immutable state store
 */
export class State {
  static get hasStop () {
    const { id, name, routes } = this.stop
    return Boolean(id && name && routes)
  }

  static get hasDepartures () {
    this.departures.length > 0
  }

  static clear () {
    Object.assign(State, initialState)
  }
}

State.clear()
