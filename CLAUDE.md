# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV/portfolio website for Mikko Viitamäki, plus a notes section.
It is built with the [Zola](https://www.getzola.org/) static site generator. The
*output* is lightweight static HTML/CSS with **no JavaScript** — the bilingual
(Finnish/English) toggle and the print/PDF view are achieved with pure CSS.

## Architecture

- **Zola static site**: Markdown content + Tera templates compile to static HTML in `public/`.
- **Single-page CV**: The CV is one page (`templates/index.html`) carrying **both**
  languages inline. Zola's native i18n is intentionally **not** used, because the
  redesign's bilingual toggle keeps both languages in the same rendered page.
- **Notes section**: Standard Zola section under `content/notes/` (markdown posts).
- **"Editorial Warm" design**: Two-column CSS Grid (sidebar + content) on desktop,
  single column on mobile, with a dedicated print stylesheet.

### File Structure

- `config.toml` - Zola configuration (`base_url`, feeds, `[extra]` contact details)
- `content/_index.md` - CV landing page; front matter selects `templates/index.html`
- `content/notes/_index.md` + `content/notes/*.md` - Notes section index and posts
- `templates/base.html` - Shared HTML shell (`<head>`, fonts, viewport)
- `templates/index.html` - The bilingual CV (both `.fi`/`.en` nodes inline)
- `templates/notes/section.html`, `templates/notes/page.html` - Notes templates
- `static/css/style.css` - "Editorial Warm" stylesheet (screen + print)
- `static/images/me.jpg` - Profile photo
- `Dockerfile` - Zola build image for reproducible local/CI builds
- `.github/workflows/deploy.yml` - GitHub Actions build + deploy workflow

## Key Design Patterns

### Bilingual toggle (no JS)
Both languages live in the markup. Every translatable node is duplicated with a
`.fi` / `.en` class and a matching `lang` attribute. Finnish is the default
(`.en { display: none }`); two anchor links (`#fi` / `#en`) flip visibility via
`body:has(#en:target)` rules in `static/css/style.css`. Fallback (no `:has()`
support) is Finnish-default.

### Layout
- CSS Grid page shell: `.cv { grid-template-columns: 262px 1fr }` (sidebar + content).
- Each experience/education item is an `<article class="entry">` with a `<time>`
  date column and a body column (also a grid).
- Sidebar is `position: sticky` on desktop; the layout collapses to one column
  below 880px and the date/body split stacks below 480px. Fluid type via `clamp()`.
- CSS custom properties (in `:root`) define the warm palette and spacing scale.

### Print / PDF
A `@media print` block sets A4 page size, hides screen-only chrome (`.screen-only`,
e.g. the language switch), avoids breaking entries across pages (`break-inside: avoid`),
and appends URLs to external content links.

## Development Notes

- Build locally with `zola serve` (live reload at http://127.0.0.1:1111) or
  `zola build` (output to `public/`). `public/` is git-ignored.
- No-JS constraint is intentional — keep interactivity in CSS.
- Fonts (Newsreader, Hanken Grotesk, JetBrains Mono) are loaded from Google Fonts
  in `templates/base.html`.
- Deployment: CI runs `zola build` and copies `public/` to the nginx VM
  (`/var/www/html/`); see `.github/workflows/deploy.yml`.

## Content Sections

The CV contains:
- Professional experience with detailed work history (reverse-chronological)
- Education and certifications
- Programming/IT tools (tag chips) and programming languages with proficiency
- Contact information and social links (sidebar)
