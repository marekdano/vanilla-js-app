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

    await this.getDepartures(id)
    Components.BusDepartures.render()
  }

  /**
   * Fetches stop details and current departures
   */
  static async getDepartures (id) {
    console.log('Actions > Get Departures, Stop ', id)
    State.searchExecuted = true
    State.stop = await new API().getStop(id)
    if (State.stop.found) {
      State.departures = await new API().getDepartures(id)
    }
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