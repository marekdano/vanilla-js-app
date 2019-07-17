/**
 * Base class for creating components
 */
export class Component extends HTMLElement {
  constructor () {
    super()

    // Determine component name.
    // We simply assume class name, which is fine as long as there's
    // only one instance of such component in application.
    // If there could be more, give them unique names using `name` attribute
    this.name = this.getAttribute('name') || this.constructor.name

    // Add component to collection of component instances,
    // so that others can call it, tell it to refresh etc.
    Components[this.name] = this;
  }

  /**
   * Called when component is added to page
   */
  connectedCallback () {
    this.render()
  }

  /**
   * Returns component HTML representation, must be implemented in descendants
   */
  html () {
    throw new Error('Not implemented')
  }

  /**
   * Renders the component
   */
  async render () {
    const html = (this.html() || '').trim()
    this.innerHTML = html
  }
}


/**
 * Component with associated CSS stylesheet.
 * We assume that:
 * - component is located in /app/components/
 * - component file name is the same as component tag
 * - stylesheet file name is the same as component tag
 */
export class StyledComponent extends Component {
  /**
   * Returns the path of stylesheet associated with component
   * You can override that in descendants to provide another location
   */
  stylesheet () {
    const tag = this.tagName.toLowerCase()
    const name = tag.replace('ba-', '')
    return `app/components/${name}/${name}.css`
  }

  /**
   * Returns component's CSS stylesheet
   */
  async css () {
    if (this._css === undefined) {
      this._css = ''
      const stylesheet = this.stylesheet()
      if (stylesheet) {
        const response = await fetch('./' + stylesheet)
        const text = await response.text()
        this._css = `<style>${text}</style>`
      }
    }
    return this._css
  }

  /**
   * Renders the component
   */
  async render () {
    const html = (this.html() || '').trim()
    const css = (await this.css() || '').trim()
    this.innerHTML = css + html
  }
}

/**
 * All component instances
 */
export const Components = {
}

/**
 * Registers the specified component
 */
export function register (tag, componentClass) {
  const { name } = componentClass
  customElements.define(tag, componentClass)
  console.log('Component registered', { tag, name })
}
