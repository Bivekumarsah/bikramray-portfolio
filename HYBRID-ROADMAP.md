# Hybrid Architect Portfolio — Development Roadmap

## Existing project audit
The default branch contains a lightweight HTML/CSS/JS site with a responsive homepage, mobile menu, about, sample project gallery, approach and contact. The existing sample photos and email are placeholders. Keep the original site operational while progressively enhancing it.

## Phase 1 — implemented on feature/hybrid-architect-portfolio
- Dedicated filterable projects page (projects.html).
- Individual sample case-study pages via project.html?slug=...
- Central sample content registry (projects.js).
- Responsive styling for new pages (hybrid.css).
- GitHub Pages workflow (deploys only from main after merge; Pages must be configured to use GitHub Actions).
- .nojekyll for static hosting.

## Next steps
1. Add links from homepage to the new projects pages, review existing copy and preserve accessibility.
2. Replace sample photography, names and case-study text with verified architect-provided material.
3. Add lightbox and multi-image project galleries.
4. Integrate optional lazy-loaded GLB 3D viewer on projects with approved models.
5. Add floor-plan PDF viewing with an accessible download fallback.
6. Test across mobile browsers, keyboard navigation, SEO and performance.
7. Configure GitHub Pages deployment settings and review before merging to main.

## GitHub Pages constraints
Use relative paths for assets and links to support repository subpath hosting. The current homepage uses root-absolute favicon and stylesheet paths, which must be fixed before publishing under a github.io/repository URL. GitHub Pages has no application backend; contact form delivery needs an external service.

## Safety
Do not publish unverified work as completed architecture projects. Do not commit secrets, private client plans or unpublished drawings without permission.
