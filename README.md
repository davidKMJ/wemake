# wemake
![Static Badge](https://img.shields.io/badge/status-done-brighgreen?style=for-the-badge)
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
│   ├── db.ts                     # Database configuration and connection
│   ├── supa-client.ts            # Supabase client configuration
│   ├── common/                   # Shared components and pages
│   │   ├── components/           # Reusable UI components
│   │   │   ├── navigation.tsx    # Main navigation component
│   │   │   ├── hero-section.tsx  # Hero section component
│   │   │   ├── input-pair.tsx    # Input pair component
│   │   │   ├── product-pagination.tsx  # Product pagination component
│   │   │   ├── select-pair.tsx   # Select pair component
│   │   │   └── ui/               # Shadcn/ui component library (22 components)
│   │   └── pages/                # Common page components
│   │       └── home-page.tsx     # Home page with featured content
│   ├── features/                 # Feature-based modules
│   │   ├── analytics/            # Analytics tracking and schema
│   │   ├── auth/                 # Authentication (login, join, OTP, social)
│   │   │   ├── components/       # Auth UI components
│   │   │   ├── layouts/          # Auth layout components
│   │   │   ├── pages/            # Auth pages (login, join, OTP, social)
│   │   │   └── queries.ts        # Auth queries
│   │   ├── community/            # Community discussions and posts
│   │   │   ├── components/       # Post and reply components
│   │   │   ├── pages/            # Community pages
│   │   │   ├── queries.ts        # Community queries
│   │   │   ├── mutations.ts      # Community mutations
│   │   │   ├── schema.ts         # Community schema
│   │   │   └── constants.ts      # Community constants
│   │   ├── ideas/                # Ideas platform
│   │   │   ├── components/       # Idea card components
│   │   │   ├── pages/            # Ideas pages
│   │   │   ├── queries.ts        # Ideas queries
│   │   │   ├── mutations.ts      # Ideas mutations
│   │   │   └── schema.ts         # Ideas schema
│   │   ├── jobs/                 # Job listings
│   │   │   ├── components/       # Job card components
│   │   │   ├── pages/            # Jobs pages
│   │   │   ├── queries.ts        # Jobs queries
│   │   │   ├── mutations.ts      # Jobs mutations
│   │   │   ├── schema.ts         # Jobs schema
│   │   │   └── constants.ts      # Jobs constants
│   │   ├── products/             # Product showcase and leaderboards
│   │   │   ├── components/       # Product, review, category components
│   │   │   ├── layouts/          # Leaderboard and product overview layouts
│   │   │   ├── pages/            # Products pages (16 pages)
│   │   │   ├── queries.ts        # Products queries
│   │   │   ├── mutations.ts      # Products mutations
│   │   │   ├── schema.ts         # Products schema
│   │   │   └── constants.ts      # Products constants
│   │   ├── teams/                # Team formation
│   │   │   ├── components/       # Team card components
│   │   │   ├── pages/            # Teams pages
│   │   │   ├── queries.ts        # Teams queries
│   │   │   ├── mutations.ts      # Teams mutations
│   │   │   ├── schema.ts         # Teams schema
│   │   │   └── constants.ts      # Teams constants
│   │   └── users/                # User profiles and dashboard
│   │       ├── components/       # Message, notification components
│   │       ├── layouts/          # User layout components (3 layouts)
│   │       ├── pages/            # User pages (12 pages)
│   │       ├── queries.ts        # Users queries
│   │       ├── mutations.ts       # Users mutations
│   │       └── schema.ts         # Users schema
│   ├── hooks/                    # Custom React hooks
│   │   └── use-mobile.ts         # Mobile detection hook
│   ├── lib/                      # Utility functions
│   │   └── utils.ts              # Common utilities (cn function)
│   └── sql/                      # Database SQL files
│       ├── functions/            # SQL functions
│       │   ├── get_dashboard_stats.sql
│       │   ├── get_product_stats.sql
│       │   └── track_event.sql
│       ├── migrations/           # Drizzle migration files
│       │   └── meta/             # Migration metadata
│       ├── triggers/             # Database triggers
│       │   ├── notification_triggers.sql
│       │   ├── post_upvote_trigger.sql
│       │   └── user_to_profile_trigger.sql
│       ├── views/                # Database views
│       │   ├── community_post_detail.sql
│       │   ├── community_post_list_view.sql
│       │   ├── gpt_ideas_view.sql
│       │   └── product_overview_view.sql
│       └── seed.sql              # Database seed data
├── components.json               # Shadcn/ui configuration
├── database.types.ts             # Generated Supabase TypeScript types
├── package.json                  # Dependencies and scripts
├── react-router.config.ts        # React Router configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
├── drizzle.config.ts             # Drizzle ORM configuration
└── README.md                     # Project documentation
```
