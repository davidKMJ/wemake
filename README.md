# wemake

A React Router v7 learning project exploring modern web development with Supabase, CursorAI, Shadcn/ui, and Cloudflare.

## How to Start

### Prerequisites

- Node.js 18+ installed
- Git for version control
- CursorAI (optional but recommended for the best experience)

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd wemake

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

---

## Project Structure

```
wemake/
├── app/                          # Main application directory
│   ├── app.css                   # Global styles with Tailwind and custom theme
│   ├── root.tsx                  # Root layout and error boundary
│   ├── routes.ts                 # Route configuration
│   ├── common/                   # Shared components and pages
│   │   ├── components/           # Reusable UI components
│   │   │   ├── navigation.tsx    # Main navigation component
│   │   │   └── ui/               # Shadcn/ui component library
│   │   │       ├── avatar.tsx    # Avatar component with Radix UI
│   │   │       ├── button.tsx    # Button component with variants
│   │   │       ├── dropdown-menu.tsx # Dropdown menu component
│   │   │       ├── navigation-menu.tsx # Navigation menu component
│   │   │       └── separator.tsx # Separator component
│   │   └── pages/                # Common page components
│   │       └── home-page.tsx     # Home page component
│   ├── features/                 # Feature-based modules
│   │   └── users/                # User-related features
│   │       ├── components/       # User-specific components
│   │       └── pages/            # User-specific pages
│   ├── lib/                      # Utility functions and helpers
│   │   └── utils.ts              # Common utilities (cn function)
│   └── welcome/                  # Welcome/landing page assets
│       ├── logo-dark.svg         # Dark mode logo
│       ├── logo-light.svg        # Light mode logo
│       └── welcome.tsx           # Welcome component
├── components.json               # Shadcn/ui configuration
├── package.json                  # Dependencies and scripts
├── react-router.config.ts        # React Router configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
└── README.md                     # Project documentation
```

### Key Architectural Decisions

1. **Feature-based organization** - Components grouped by functionality
2. **Shared components** - Reusable UI components in `common/components/`
3. **Type-safe routing** - React Router v7 with TypeScript integration
4. **Design system** - Shadcn/ui with custom Tailwind theme
5. **Development workflow** - CursorAI integration for enhanced productivity
