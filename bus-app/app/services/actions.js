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

    await this.getStopInformation(id)

    if (State.stop.found) {
      await this.getDepartures(id)
    } else {
      Components.BusDepartures.render()
    }
  }

  /**
   * Retrieves stop information
   */
  static async getStopInformation (id) {
    if (!id) return
    console.log('Actions > Get Stop', id)
    State.searchExecuted = true
    State.stop = await new API().getStop(id)
  }

  /**
   * Fetches departures for the currently selected stop
   */
  static async getDepartures (id) {
    if (!id) return
    console.log('Actions > Get Departures, Stop ', id)
    State.departures = await new API().getDepartures(id)
    await Components.BusDepartures.render()
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