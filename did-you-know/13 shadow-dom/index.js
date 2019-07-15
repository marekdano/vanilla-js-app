export class Header extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' });
  }

  get text() {
    return this.getAttribute('text')
  }

  set text(value) {
    this.setAttribute('text', value)
  }

  render() {
    const css = `<style> h2 { color: blue } </style>`
    const html = `<h2>${this.text}</h2>`
    this.shadowRoot.innerHTML = css + html
  }

  connectedCallback() {
    this.render()
  }
}


export class Footer extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' });
  }

  get text() {
    return this.getAttribute('text')
  }

  set text(value) {
    this.setAttribute('text', value)
  }

  render() {
    const css = `<style> h2 { color: red } </style>`
    const html = `<h2>${this.text}</h2>`
    this.shadowRoot.innerHTML = css + html
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('dyi-header', Header)
customElements.define('dyi-footer', Footer)
