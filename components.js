class CopyrightComponent extends HTMLElement {
	constructor() {
    super()
    
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._name = ''
  }
  
	connectedCallback() {
    this.render()
  }

  static get observedAttributes() {
    return ['year', 'title']
  }
  
  render() {
    const year = this.getAttribute('year') 
      ? this.getAttribute('year') 
      : new Date().getFullYear()
    const title = this.getAttribute('title')
      ? this.getAttribute('title')
      : undefined
    if (title === undefined) {
      this._shadowRoot.innerHTML = `<p>Copyright &copy; ${year}</p>`
    } else {
      this._shadowRoot.innerHTML = `<p>${title} Copyright &copy; ${year}</p>`
    }
  }
}

window.customElements.define('copyright-component', CopyrightComponent)