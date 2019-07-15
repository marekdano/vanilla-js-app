/**
 * Dublin Bus API URL
 */
const Endpoint = {
  live: 'https://data.smartdublin.ie/cgi-bin/rtpi',
  mock: '/data'
}

/**
 * Dublin Bus API client
 */
export class API {
  /**
   * Instantiates the API client, optionally in mock mode
   */
  constructor (mock = false) {
    this.mock = mock
  }

  /**
   * Bus stop metadata endpoint
   * @param id Bus stop identifier
   */
  getStopEndpoint (id) {
    return this.mock
      ? `${Endpoint.mock}/stop.json`
      : `${Endpoint.live}/busstopinformation?stopid=${id}&format=json`
  }

  /**
   * Real-time departures from the specified bus stop
   * @param id Bus stop identifier
   */
  getDeparturesEndpoint (id) {
    return this.mock
      ? `${Endpoint.mock}/departures.json`
      : `${Endpoint.live}/realtimebusinformation?stopid=${id}&format=json`
  }

  /**
   * Gets JSON data from the specified endpoint
   */
  async getData (endpoint) {
    const options = {
      method: 'get',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
      }
    }
    const response = await fetch(endpoint, options)
    const data = await response.json()
    return data.results || []
  }

  /**
   * Gets information about the specified stop
   * @param id Stop identifier
   */
  async getStop (id) {
    const endpoint = this.getStopEndpoint(id)
    const data = await this.getData(endpoint)
    const result = data[0]
    const found = Boolean(result)
    if (found) {
      const { stopid: id, fullname: name, latitude, longitude } = result
      const routes = result.operators.reduce((all, operator) => ([...all, ...operator.routes]), [])
      return {
        id,
        found,
        name,
        latitude,
        longitude,
        routes
      }
    }
    return {
      id,
      found
    }
  }

  /**
   * Gets information about departures from the specified stop
   * @param id Stop identifier
   */
  async getDepartures (id) {
    const endpoint = this.getDeparturesEndpoint(id)
    const results = await this.getData(endpoint)
    const departures = results.map(({ route, duetime: minutes }) => ({
      route,
      minutes
    }))
    return departures
  }
}