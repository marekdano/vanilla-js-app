export class Header extends HTMLElement {
  // Custom property, bound to HTML attribute 
  // so it can be set from markup
  get text () {
    return this.getAttribute('text')
  }

  set text (value) {
    this.setAttribute('text', value)
  }

  // React to changes to these attributes 
  // by calling `attributeChangedCallback`
  get observedAttributes() {
    return ['text'];
  }

  // Renders the element
  render() {
    this.innerHTML = `<h2>${this.text}</h2>`
  }

  // When element inserted into page,
  // set default text and render
  connectedCallback() {
    this.text = this.text || 'Hello!'
    this.render()
  }

  // When text changes, re-render
  attributeChangedCallback() {
    this.render()
  }
}

// Register the element under <dyi-header> tag
customElements.define('dyi-header', Header)
