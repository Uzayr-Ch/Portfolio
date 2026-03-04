import { BaseComponent } from "./BaseComponent.js";

export class SectionHeader extends BaseComponent {
  connectedCallback() {
    const title = this.getAttribute("title") || "Section Title";

    this.render(`
      <style>
        .section-header {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-1);
          border-bottom: 2px solid var(--color-border);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      </style>
      <h2 class="section-header">${title}</h2>
    `);
  }
}

customElements.define("section-header", SectionHeader);
