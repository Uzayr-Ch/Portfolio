import { BaseComponent } from "./BaseComponent.js";

export class HeaderInfo extends BaseComponent {
  connectedCallback() {
    const data = JSON.parse(this.getAttribute("data-info") || "{}");
    this.render(`
      <style>
        .header {
          text-align: center;
          margin-bottom: var(--spacing-8);
          border-bottom: 2px solid var(--color-border);
          padding-bottom: var(--spacing-6);
        }
        .name {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-2);
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-4);
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
        }
        .separator {
          color: var(--color-border);
        }
        @media (max-width: 600px) {
          .contact-info {
            flex-direction: column;
            gap: var(--spacing-2);
          }
          .separator {
            display: none;
          }
        }
      </style>
      <header class="header">
        <h1 class="name">${data.name || ""}</h1>
        <div class="contact-info">
          <span class="contact-item">${data.location || ""}</span>
          <span class="separator">|</span>
          <span class="contact-item"><a href="tel:${data.phone || ""}">${data.phone || ""}</a></span>
          <span class="separator">|</span>
          <span class="contact-item"><a href="mailto:${data.email || ""}">${data.email || ""}</a></span>
          <span class="separator">|</span>
          <span class="contact-item"><a href="https://${data.linkedin || ""}" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <span class="separator">|</span>
          <span class="contact-item"><a href="https://${data.github || ""}" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </header>
    `);
  }
}

customElements.define("header-info", HeaderInfo);
