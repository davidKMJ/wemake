# wemake
![Static Badge](https://img.shields.io/badge/status-in_progress-orange?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/type-learning_project-blue?style=for-the-badge)

A platform for makers to showcase products, share ideas, discover jobs, form teams, and engage in community discussions, built with React Router v7, Supabase, and developed with Cursor AI assistance.

## How to Start

### Environment
- Node.js 18+
- npm
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/davidKMJ/wemake.git
cd wemake

# Install dependencies
npm install

# Run the application
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

## Key Features
1. **Product Showcase** – Browse and submit products with leaderboards, reviews, and categories
2. **Community Discussions** – Engage in posts, replies, and community-driven conversations
3. **Ideas Platform** – Share and discover project ideas with claim tracking
4. **Job Listings** – Browse and submit job opportunities with company details
5. **Team Formation** – Find teammates and collaborate on projects

## Technical Stack
- **React Router v7** – Type-safe routing and server-side rendering
- **TypeScript** – Static type checking for enhanced developer experience
- **Supabase** – Backend-as-a-service for authentication and database
- **Drizzle ORM** – Type-safe database queries with PostgreSQL
- **Tailwind CSS & Shadcn/ui** – Utility-first styling with accessible component library
- **Cursor** – AI-powered code editor for rapid development and learning

## Project Structure
```
wemake/
├── app/                          # Main application directory
│   ├── app.css                   # Global styles with Tailwind theme
│   ├── root.tsx                  # Root layout and error boundary
│   ├── routes.ts                 # Route configuration
│   ├── common/                   # Shared components and pages
│   │   ├── components/           # Reusable UI components
│   │   │   ├── navigation.tsx    # Main navigation component
│   │   │   └── ui/               # Shadcn/ui component library
│   │   └── pages/                # Common page components
│   │       └── home-page.tsx     # Home page with featured content
│   ├── features/                 # Feature-based modules
│   │   ├── auth/                 # Authentication (login, join, OTP)
│   │   ├── community/            # Community discussions and posts
│   │   ├── ideas/                # Ideas platform
│   │   ├── jobs/                 # Job listings
│   │   ├── products/             # Product showcase and leaderboards
│   │   ├── teams/                # Team formation
│   │   └── users/                # User profiles and dashboard
│   ├── lib/                      # Utility functions
│   │   └── utils.ts              # Common utilities
│   ├── sql/                      # Database migrations and views
│   │   ├── migrations/           # Drizzle migration files
│   │   └── views/                # Database views
│   └── supa-client.ts            # Supabase client configuration
├── components.json               # Shadcn/ui configuration
├── package.json                  # Dependencies and scripts
├── react-router.config.ts        # React Router configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
├── drizzle.config.ts             # Drizzle ORM configuration
└── README.md                     # Project documentation
```
