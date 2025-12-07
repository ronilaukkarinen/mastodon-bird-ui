# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

Mastodon Bird UI is a CSS-only theme that transforms Mastodon's default UI to resemble Twitter/X's interface. It's maintained by @rolle@mementomori.social.

## Architecture

- **Source**: `src/` - Modular SCSS files
- **Output**: `dist/` - Compiled CSS (single-column and multiple-columns layouts)
- **Build**: Parcel bundler compiles SCSS to CSS

### Directory Structure

```
src/
├── layout-single-column.scss      # Entry point for single column
├── layout-multiple-columns.scss   # Entry point for multiple columns
├── common/                        # Shared variables and themes
│   ├── _variables.scss            # CSS custom properties
│   ├── _theme-light.scss
│   └── _theme-high-contrast.scss
├── components/                    # UI component styles
│   ├── _navigation.scss
│   ├── _status.scss
│   ├── _buttons.scss
│   └── ...
└── layouts/                       # Layout-specific styles
    └── _multiple-columns-styles.scss
```

## Common Commands

```bash
npm install          # Install dependencies
npm run dev          # Development mode with hot-reload (Browsersync)
npm run build        # Production build to dist/
npm run clean        # Remove dist/ and .parcel-cache/
```

## Development Workflow

1. Run `npm run dev` to start Parcel + Browsersync
2. Browsersync proxies a local Mastodon instance (configure in `bs-config.js`)
3. Edit SCSS files in `src/`, changes appear instantly
4. Production builds go to `dist/` with version banner from package.json

## Key Guidelines

- Keep CSS-only output (no JavaScript runtime)
- Maintain backward compatibility for users copying CSS to Custom CSS field
- Follow existing variable naming conventions in `_variables.scss`
- Test both single-column and multiple-columns layouts
- Version is managed in `package.json` and auto-injected into built CSS

## Mastodon Compatibility

This theme targets Mastodon v4.6.0+ which uses a new semantic token system with CSS custom properties like `--color-text-primary`, `--color-bg-primary`, etc. Bird UI overrides these tokens.

## Commits

- One logical change per commit
- Keep commit messages concise (one line)
- Update CHANGELOG.md for user-facing changes
