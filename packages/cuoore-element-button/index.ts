import { prefix } from 'cuoore-element'

export class Button extends HTMLElement {
  label: string

  type?: string

  shadow: ShadowRoot

  template: string

  constructor() {
    super()

    this.label = this.getAttribute('label') || ''
    this.type = this.getAttribute('type') || undefined
    this.shadow = this.attachShadow({ mode: 'open' })

    this.template = `
      <button
        type="${this.type}">
          ${this.label}
      </button>
    `
  }

  connectedCallback(): void {
    this.render()
  }

  // @ts-expect-error `olVal is a param not used`
  attributeChangedCallback(attrName: 'label' & 'type', oldVal: string, newVal: string): void {
    if (attrName === 'label') {
      this.label = newVal
    }

    if (attrName === 'type') {
      this.type = newVal
    }

    this.render()
  }

  render() {
    this.shadow.innerHTML = this.template
  }
}

if (!window.customElements.get(`${prefix}-button`)) {
  window.customElements.define(`${prefix}-button`, Button)
}
