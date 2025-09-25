# wemake

A React Router v7 project for makers featuring products, ideas, jobs, teams, and community discussions. Exploring web development with Supabase, CursorAI, Shadcn/ui, and Cloudflare.

## How to Start

### Prerequisites

- Node.js 18+ installed
- Git for version control
- CursorAI (optional)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/davidKMJ/wemake.git
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
│   │   │       ├── badge.tsx     # Badge component with variants
│   │   │       ├── button.tsx    # Button component with variants
│   │   │       ├── card.tsx      # Card component with header, content, footer
│   │   │       ├── dropdown-menu.tsx # Dropdown menu component
│   │   │       ├── navigation-menu.tsx # Navigation menu component
│   │   │       └── separator.tsx # Separator component
│   │   └── pages/                # Common page components
│   │       └── home-page.tsx     # Home page with featured content
│   ├── features/                 # Feature-based modules
│   │   ├── auth/                 # Authentication features
│   │   │   ├── layouts/          # Auth layout components
│   │   │   └── pages/            # Login, join, OTP pages
│   │   ├── community/            # Community discussions
│   │   │   ├── components/       # Post cards and UI components
│   │   │   └── pages/            # Community and post pages
│   │   ├── ideas/                # Ideas and brainstorming
│   │   │   ├── components/       # Idea cards and UI components
│   │   │   └── pages/            # Ideas listing and detail pages
│   │   ├── jobs/                 # Job listings and opportunities
│   │   │   ├── components/       # Job cards and UI components
│   │   │   └── pages/            # Job listings and detail pages
│   │   ├── products/             # Product showcase and leaderboards
│   │   │   ├── components/       # Product cards and UI components
│   │   │   ├── layouts/          # Product and leaderboard layouts
│   │   │   └── pages/            # Products, leaderboards, categories
│   │   ├── teams/                # Team formation and collaboration
│   │   │   ├── components/       # Team cards and UI components
│   │   │   └── pages/            # Team listings and detail pages
│   │   └── users/                # User profiles and dashboard
│   │       ├── components/       # User-specific components
│   │       ├── layouts/          # Dashboard and profile layouts
│   │       └── pages/            # User dashboard and profile pages
│   └── lib/                      # Utility functions and helpers
│       └── utils.ts              # Common utilities (cn function)
├── components.json               # Shadcn/ui configuration
├── package.json                  # Dependencies and scripts
├── react-router.config.ts        # React Router configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
└── README.md                     # Project documentation
```

### Key Features

1. **Multi-domain platform** - Products, ideas, jobs, teams, and community discussions
2. **Feature-based organization** - Components grouped by functionality
3. **UI components** - Card-based layouts with badges, avatars, and interactive elements
4. **Type-safe routing** - React Router v7 with TypeScript integration
5. **Design system** - Shadcn/ui with custom Tailwind theme
6. **Home page** - Featured content sections with navigation to major features

### Technical Stack

- **React Router v7** - Routing with type safety
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library built on Radix UI
- **Vite** - Build tool and development server
