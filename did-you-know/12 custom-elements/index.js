export class Header extends HTMLElement {

  constructor () {
    super()
    this.addEventListener('click', () => {
      this.text = 'Clicked'
    })
  }

  static get observedAttributes () {
    return ['text'];
  }

  get text () {
    return this.getAttribute('text')
  }

  set text (value) {
    return this.setAttribute('text', value)
  }

  connectedCallback () {
    this.render()
    this.value = 'abc'
  }

  attributeChangedCallback (attribute, previous, current) {
    this.render()
  }

  render () {
    this.innerHTML = `<h1>${this.text}</h1`
  }
}

customElements.define('cc-header', Header)
