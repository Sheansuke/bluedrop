# Commands
- Build: pnpm run build
- Lint: pnpm run lint (add ESLint for Astro/TypeScript)
- Typecheck: pnpm run typecheck (use Astro check)
- Test all: pnpm run test (set up Vitest for components)
- Single test: pnpm run test -- <test-file> (e.g., pnpm run test src/components/MenuItem.test.ts)
- Package manager: pnpm (do not use npm or yarn)

# Code Style Guidelines
- Imports: Relative paths only; group by Astro built-ins, libs, components/assets.
- Formatting: Prettier defaults; no semicolons; 2-space indent.
- Types: Strict TypeScript; define interfaces for component props.
- Naming: PascalCase for .astro components; camelCase for props/variables.
- Error Handling: No console.log; handle async errors with try/catch; fallbacks for asset loads.
- Classes: Use clsx for conditional Tailwind classes.
- Accessibility: Always add alt/aria-labels to images/media.