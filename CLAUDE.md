# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 portfolio application with the following key characteristics:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (enabled for dev and build)
- **Source Structure**: Uses `src/` directory with `@/*` import alias
- **Font**: Geist font family optimized with `next/font`

### Directory Structure

- `src/app/` - App Router pages and layouts
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page component
- `assets/` - Portfolio assets (resume PDF, images)
- `public/` - Static assets served directly

### Key Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path mapping (`@/*` → `./src/*`)
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.mjs` - ESLint configuration

## Development Notes

- The project uses React 19 and Next.js 15 with latest features
- Turbopack is enabled for both development and production builds
- Import paths use the `@/` alias for cleaner imports from `src/`
- Existing portfolio assets are stored in the `assets/` directory