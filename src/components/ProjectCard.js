import { BaseComponent } from "./BaseComponent.js";

export class ProjectCard extends BaseComponent {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const points = JSON.parse(this.getAttribute("points") || "[]");

    const pointsHtml = points.map((p) => `<li>${p}</li>`).join("");

    this.render(`
      <style>
        .project {
          margin-bottom: var(--spacing-6);
        }
        .title {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-2);
        }
        .details {
          list-style: disc inside;
          color: var(--color-text-muted);
          margin-left: var(--spacing-4);
        }
        .details li {
          margin-bottom: var(--spacing-1);
        }
      </style>
      <article class="project">
        <h3 class="title">${title}</h3>
        <ul class="details">
          ${pointsHtml}
        </ul>
      </article>
    `);
  }
}

customElements.define("project-card", ProjectCard);
