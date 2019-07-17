import { State } from './state.js'
import { API } from './api.js'
import { Components } from '../components/component.js'

/**
 * Application actions
 */
export class Actions {
  /**
   * Selects a stop
   */
  static async selectStop (id) {
    if (!id) return
    console.log('Actions > Select Stop', id)

    State.clear()
    Components.BusDepartures.render()

    await getDepartures(id)
    Components.BusDepartures.render()
  }

  /**
   * Clears the UI
   */
  static async clear () {
    console.log('Actions > Clear')
    State.clear()
    Components.SearchBox.render()
    Components.BusDepartures.render()
  }
}

/**
 * Fetches stop details and current departures.
 * As this function is not exported, its entirely
 * private and not accessible from outside this module.
 */
async function getDepartures (id) {
  const api = new API()
  State.searchExecuted = true
  State.stop = await api.getStop(id)
  if (State.stop.found) {
    State.departures = await api.getDepartures(id)
  }
}

