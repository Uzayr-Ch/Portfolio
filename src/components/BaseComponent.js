/**
 * Utility base component to handle common shadow DOM operations
 */
export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Inject global variables and common styles into the shadow root
   */
  get coreStyles() {
    return `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      </style>
    `;
  }

  render(template) {
    this.shadowRoot.innerHTML = this.coreStyles + template;
  }
}
