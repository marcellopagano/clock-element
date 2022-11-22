import { LitElement, html } from 'lit'
import { styles } from './assets/css.js'

class ClockElement extends LitElement {

  static properties = {
    hour: { type: Object },
    minute: { type: Object },
    second: { type: Object },
    _indicators: { type: Array },
  }
  static styles = styles

  constructor() {
    super()
    this._indicators = [...Array(12)]
  }

  firstUpdated() {
    this.hour = this.renderRoot.getElementById('hour')
    this.minute = this.renderRoot.getElementById('minute')
    this.second = this.renderRoot.getElementById('second')
  }

  clockInit() {
    setInterval(() => {
      const d = new Date()
      const hr = d.getHours()
      const min = d.getMinutes()
      const sec = d.getSeconds()
      const hr_rotation = 30 * hr + min / 2
      const min_rotation = 6 * min
      const sec_rotation = 6 * sec
      this.hour.style.transform = `rotate(${hr_rotation}deg)`
      this.minute.style.transform = `rotate(${min_rotation}deg)`
      this.second.style.transform = `rotate(${sec_rotation}deg)`
    }, 1000)
  }

  makeIndicators() {
    return this._indicators.map((_, i) => {
      return html`<div class="indicator" style="transform: rotateZ(calc(6deg * ${i * 5}))">
        <div class="indicator-text" style="${(i == 0 || i > 9) && 'left:-1vw'}; transform: rotate(${i * -30}deg)">${i == 0 ? 12 : i}</div>
      </div>`
    })

  }
  render() {
    this.clockInit()

    return html`
      <div id="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
        <div id="axis"></div>
        ${this.makeIndicators()}
      </div>

    `
  }

}

customElements.define('clock-element', ClockElement)