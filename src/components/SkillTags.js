import { BaseComponent } from "./BaseComponent.js";

export class SkillTags extends BaseComponent {
  connectedCallback() {
    const category = this.getAttribute("category") || "";
    const items = JSON.parse(this.getAttribute("items") || "[]");

    this.render(`
      <style>
        .skill-group {
          margin-bottom: var(--spacing-4);
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: var(--spacing-2);
        }
        .category {
          font-weight: 600;
          color: var(--color-text-main);
          min-width: 150px;
        }
        .items {
          color: var(--color-text-muted);
        }
      </style>
      <div class="skill-group">
        <span class="category">${category}:</span>
        <span class="items">${items.join(", ")}</span>
      </div>
    `);
  }
}

customElements.define("skill-tags", SkillTags);
