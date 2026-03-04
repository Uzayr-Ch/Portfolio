import { resumeData } from "./data/resumeData.js";

// ── Icons (SVG strings matching Lovable style) ─────────────
const ICONS = {
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.84A2.5 2.5 0 0 1 9.5 2"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.84A2.5 2.5 0 0 0 14.5 2"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.47 2 2 0 0 1 3 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803a11.51 11.51 0 0 1 3.006.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.628-5.48 5.921.431.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>`,
  projects: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  tech: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  certs: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  edu: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

// ── util ──────────────────────────────────────────────────
function el(tag, cls, html = "") {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ── Cursor ────────────────────────────────────────────────
// Custom cursor removed per user request for a cleaner, native feel.

// ── Nav ───────────────────────────────────────────────────
function initNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-link[data-section]");
  const sections = document.querySelectorAll("section[id]");

  // Scroll style
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );

  // Mobile toggle
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !open);
    toggle.classList.toggle("open", !open);
    navList?.classList.toggle("open", !open);
  });

  // Close mobile on link click
  navList?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.classList.remove("open");
      navList.classList.remove("open");
    });
  });

  // Active link
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) =>
            l.classList.toggle("active", l.dataset.section === e.target.id),
          );
        }
      });
    },
    { threshold: 0.2 },
  );
  sections.forEach((s) => obs.observe(s));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ── Scroll reveal ─────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(
      ".reveal, .skill-card, .project-card, .cert-card, .stat-card",
    )
    .forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 6) * 0.07}s`;
      obs.observe(el);
    });
}

// ── Render: Hero ──────────────────────────────────────────
function renderHero() {
  const socialWrap = document.getElementById("hero-social-links");
  if (!socialWrap) return;

  const { github, linkedin, email } = resumeData.personalInfo;
  const items = [
    { icon: ICONS.github, href: github, label: "GitHub" },
    { icon: ICONS.linkedin, href: linkedin, label: "LinkedIn" },
    { icon: ICONS.mail, href: `mailto:${email}`, label: "Email" },
  ];

  items.forEach((item) => {
    const a = el("a", "hero-social-btn");
    a.href = item.href;
    a.setAttribute("aria-label", item.label);
    if (item.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = item.icon;
    socialWrap.appendChild(a);
  });

  // Typewriter effect setup
  const roleEl = document.getElementById("hero-role");
  if (roleEl) {
    const roles = [
      "Software Developer",
      "CS Student @ PIEAS",
      "AI/ML Enthusiast",
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        roleEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
      } else {
        roleEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
      }

      let typeSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && charIdx === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next
      }

      setTimeout(typeWriter, typeSpeed);
    }

    // Start typewriter after a short delay
    setTimeout(typeWriter, 1000);
  }
}

// ── Render: About ─────────────────────────────────────────
function renderAbout() {
  // Paragraphs
  const wrap = document.getElementById("about-paragraphs");
  if (wrap) {
    resumeData.about.split("\n\n").forEach((para) => {
      const p = el("p", "about-para", para);
      p.innerHTML = para; // Allow HTML parsing for <strong>
      wrap.appendChild(p);
    });
  }
}

// ── Render: About Boxes ───────────────────────────────────
function renderAboutBoxes() {
  const container = document.getElementById("about-boxes");
  if (!container) return;

  // Render the stats boxes
  const STAT_ICONS = [ICONS.projects, ICONS.tech, ICONS.certs];
  resumeData.stats.forEach((s, i) => {
    const c = el("div", "stat-card");
    c.innerHTML = `
      <div class="stat-icon">${STAT_ICONS[i] || ""}</div>
      <div class="stat-val">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    `;
    container.appendChild(c);
  });
}

function renderEducation() {
  const grid = document.getElementById("education-grid");
  if (!grid || !resumeData.education?.length) return;

  resumeData.education.forEach((e) => {
    const card = el("div", "edu-card", "reveal");
    card.innerHTML = `
      <div class="edu-card-content">
        ${e.logo ? `<div class="edu-logo"><img src="${e.logo}" alt="${e.institution} logo"></div>` : ""}
        <div class="edu-info">
          <h3 class="edu-degree">${e.degree}</h3>
          <p class="edu-inst">${e.institution}</p>
          <div class="edu-period">${e.period}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Render: Skills ────────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  resumeData.skills.forEach((group) => {
    const card = el("div", "skill-card");
    card.innerHTML = `
      <div class="skill-card-header">
        <div class="skill-card-icon">${ICONS[group.icon] || ""}</div>
        <div class="skill-card-title">${group.category}</div>
      </div>
      <div class="skill-tags">
        ${group.items.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Render: Projects ──────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  resumeData.projects.forEach((p) => {
    const card = el("div", "project-card");
    card.innerHTML = `
      <div class="project-card-top">
        <div class="project-folder-icon">${ICONS.folder}</div>
        <span class="project-category">${p.category}</span>
      </div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-tags">
        ${p.tech.map((t) => `<span class="project-tag">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Render: Certifications ────────────────────────────────
function renderCerts() {
  const grid = document.getElementById("certs-grid");
  if (!grid) return;
  resumeData.certifications.forEach((c) => {
    const card = el("div", "cert-card");
    card.innerHTML = `
      <div class="cert-icon">${ICONS.award}</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-provider">${c.provider}</div>
        <div class="cert-url">${c.url}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Render: Contact links ─────────────────────────────────
function renderContactLinks() {
  const wrap = document.getElementById("contact-links");
  if (!wrap) return;
  const { email, phone, linkedin, github } = resumeData.personalInfo;
  const items = [
    { icon: ICONS.mail, label: email, href: `mailto:${email}` },
    {
      icon: ICONS.phone,
      label: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    { icon: ICONS.linkedin, label: "LinkedIn", href: linkedin },
    { icon: ICONS.github, label: "GitHub", href: github },
  ];
  items.forEach((item) => {
    const a = el("a", "contact-link-item");
    a.href = item.href;
    if (item.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = `<div class="contact-link-icon">${item.icon}</div><span>${item.label}</span>`;
    wrap.appendChild(a);
  });
}

// ── Render: Footer ────────────────────────────────────────
function renderFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const social = document.getElementById("footer-social");
  if (social) {
    const { github, linkedin, email } = resumeData.personalInfo;
    [
      { icon: ICONS.github, href: github, label: "GitHub" },
      { icon: ICONS.linkedin, href: linkedin, label: "LinkedIn" },
      { icon: ICONS.mail, href: `mailto:${email}`, label: "Email" },
    ].forEach((s) => {
      const a = el("a", "footer-soc-btn");
      a.href = s.href;
      a.setAttribute("aria-label", s.label);
      if (s.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.innerHTML = s.icon;
      social.appendChild(a);
    });
  }
}

// ── Contact form ──────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Simple visual feedback
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Formspree Integration
      // NOTE: User needs to replace 'uzair21458190@gmail.com' with their Formspree ID if they want to manage it via Formspree dashboard
      const response = await fetch("https://formspree.io/f/mqaevepk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        if (toast) {
          toast.textContent = "✓ Message sent! I'll get back to you soon.";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 3500);
        }
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      if (toast) {
        toast.textContent = "❌ Error! Please try again or email me directly.";
        toast.style.background = "var(--destructive)";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3500);
      }
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  });
}

// ── Bootstrap ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // render data
  renderHero();
  renderAbout();
  renderAboutBoxes();
  renderSkills();
  renderEducation();
  renderProjects();
  renderCerts();
  renderContactLinks();
  renderFooter();

  // behaviours
  initNav();
  initContactForm();

  // deferred
  requestAnimationFrame(() => {
    if (window.lucide) window.lucide.createIcons();
    initReveal();
  });
});
