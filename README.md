# Personal CV Website

A bilingual (Finnish/English) CV website built with pure HTML/CSS featuring a modern CSS Grid layout.

## 🚀 Deployment

This site is automatically deployed to a Hetzner VM running nginx using GitHub Actions whenever changes are merged to the `master` branch.

### Deployment Pipeline

- **Trigger**: Automatic deployment on push to `master` branch or manual trigger
- **Platform**: Hetzner VM (xn--viitamki-5za.fi)
- **Web Server**: nginx
- **Target Path**: `/var/www/html/`
- **Files Deployed**: HTML, CSS, and images only

### Setup Requirements

To enable automatic deployment, add these secrets in GitHub repository settings (Settings > Secrets and variables > Actions):

```
SSH_PRIVATE_KEY: Your SSH private key content
SSH_HOST: xn--viitamki-5za.fi
SSH_USERNAME: mikko
```

### Deployment Process

The workflow:
1. Checks out the repository code
2. Sets up SSH connection to the server
3. Copies HTML files to `/var/www/html/`
4. Copies CSS files to `/var/www/html/css/`
5. Copies images to `/var/www/html/images/`
6. Sets proper permissions (www-data:www-data, 644/755)
7. Reloads nginx service

### Manual Deployment

The workflow can also be triggered manually from the GitHub Actions tab.

## 📁 Structure

- `index.html` - Finnish CV page
- `cv_en.html` - English CV page  
- `css/style.css` - Custom CSS with Grid layout
- `images/` - Profile photo and assets
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `CLAUDE.md` - Documentation for Claude Code

## 🛠 Technologies

- Pure HTML5/CSS3
- CSS Grid for responsive layout
- FontAwesome 5.15.4 for icons
- No build process or dependencies required

## 🔧 Local Development

Simply open the HTML files in a web browser:

```bash
# Open Finnish version
open index.html

# Open English version  
open cv_en.html
```

## 📝 Content Updates

The CV content includes:
- Current role at Mitsubishi Logisnext Europe (DevSecOps Product Owner)
- Modern tech stack (Kubernetes, Terraform, Argo, etc.)
- Programming languages and tools
- Education and certifications
- Contact information with social media links

## 🤖 AI Assistance

This CV has been updated with assistance from Claude Code, as indicated by the robot emoji (🤖) in the work experience section.