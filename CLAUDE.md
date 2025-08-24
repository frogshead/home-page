# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV/portfolio website for Mikko Viitamäki. It's a static HTML site with custom CSS styling, featuring a bilingual CV in Finnish and English.

## Architecture

- **Static HTML Site**: Pure HTML/CSS with no build process or dependencies
- **Bilingual Design**: Two main pages - `index.html` (Finnish) and `cv_en.html` (English)
- **CSS Grid Layout**: Uses modern CSS Grid for responsive layout instead of frameworks
- **FontAwesome Icons**: External CDN for social media icons

### File Structure

- `index.html` - Main Finnish CV page
- `cv_en.html` - English CV page  
- `css/style.css` - Custom CSS with grid layout and geometric background patterns
- `images/me.jpg` - Profile photo
- `css/FortAwesome-Font-Awesome-ee55c85/` - Local FontAwesome assets (appears unused, external CDN is used)

## Key Design Patterns

### CSS Grid Layout
The site uses a 6-column CSS Grid layout defined in `.container`:
- Header spans full width (columns 1-7)
- Name displayed vertically in column 6
- Contact info and photo in columns 1-3
- Main content (experience, education, tools) in columns 3-6

### Styling Approach
- Custom geometric background pattern using CSS gradients
- Polaroid-style profile photo with border radius and shadow
- Consistent black borders with rounded corners for sections
- FontAwesome icons for social media links

## Development Notes

- No build process, package manager, or dependencies
- Files can be opened directly in browser for testing
- Both HTML files share the same CSS file
- Language switching via simple anchor links between pages
- All external dependencies (FontAwesome) loaded via CDN

## Content Sections

Both CV pages contain:
- Professional experience with detailed work history
- Education and certifications
- Programming languages and tools
- Contact information and social media links