# Personal CV Website

A bilingual (Finnish/English) CV plus a notes section, built with the
[Zola](https://www.getzola.org/) static site generator. The "Editorial Warm"
design ships as lightweight static HTML + CSS with **no JavaScript** — the
language switch and print/PDF view are pure CSS.

## 🚀 Deployment

The site is automatically built with Zola and deployed to a Hetzner VM running
nginx using GitHub Actions whenever changes are merged to the `master` branch.

### Deployment Pipeline

- **Trigger**: Automatic deployment on push to `master` branch or manual trigger
- **Build**: `zola build` generates the static site into `public/`
- **Platform**: Hetzner VM (xn--viitamki-5za.fi)
- **Web Server**: nginx
- **Target Path**: `/var/www/html/`

### Deployment Process

The workflow:
1. Checks out the repository code
2. Installs Zola and runs `zola build` to generate `public/`
3. Sets up SSH connection to the server
4. Clears the web root and copies the generated `public/` files
5. Sets proper permissions (www-data:www-data, 644/755)
6. Reloads nginx service

### Manual Deployment

The workflow can also be triggered manually from the GitHub Actions tab.

## 📁 Structure

- `config.toml` - Zola configuration
- `content/_index.md` - CV landing page (selects the CV template)
- `content/notes/` - Markdown notes (section index + posts)
- `templates/base.html` - Shared HTML shell (head, fonts)
- `templates/index.html` - The bilingual CV (both languages inline, CSS toggle)
- `templates/notes/` - Notes listing + single-note templates
- `static/css/style.css` - "Editorial Warm" stylesheet (screen + print)
- `static/images/` - Profile photo and assets
- `Dockerfile` - Zola build image (reproducible local/CI builds)
- `.github/workflows/deploy.yml` - GitHub Actions build + deploy workflow
- `CLAUDE.md` - Documentation for Claude Code

## 🛠 Technologies

- [Zola](https://www.getzola.org/) static site generator (output is plain HTML/CSS)
- CSS Grid + custom properties for the responsive "Editorial Warm" layout
- Pure-CSS bilingual toggle (`:target` / `:has()`) and print stylesheet — no JS
- Fonts: Newsreader, Hanken Grotesk, JetBrains Mono (Google Fonts)

## 🔧 Local Development

Install [Zola](https://www.getzola.org/documentation/getting-started/installation/)
(`brew install zola`) and run the dev server with live reload:

```bash
# Live preview at http://127.0.0.1:1111
zola serve

# Produce the production build into ./public
zola build
```

Or build with Docker (no local Zola needed):

```bash
docker build -t viitamaki-site .
docker run --rm -v "$PWD/public:/site/public" viitamaki-site   # -> ./public
```

## 📝 Content Updates

The CV content includes:
- Current role at Mitsubishi Logisnext Europe (DevSecOps Product Owner)
- Modern tech stack (Kubernetes, Terraform, Argo, etc.)
- Programming languages and tools
- Education and certifications
- Contact information with social media links

## 🔗 Git Hooks

This repository includes shared Git hooks to maintain code quality and workflow consistency.

### Pre-push Hook

Prevents direct pushes to the `master` branch to enforce proper PR workflow.

#### Installation

To install the shared hooks locally:

```bash
# Install the pre-push hook
cp hooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

#### What it does

- Blocks direct pushes to `master` branch
- Provides clear instructions for creating feature branches
- Suggests proper workflow with pull requests

## 🤖 AI Assistance

This CV has been updated with assistance from Claude Code, as indicated by the robot emoji (🤖) in the work experience section.
