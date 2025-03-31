# Football Shuru - Football Community Platform

A modern football community platform built with Next.js, TypeScript, and Shadcn UI.

## Setup Instructions

### Prerequisites

- Node.js version 18.x or higher
- Git

### Installation Steps

1. Clone the repository

```bash
git clone [your-repository-url]
cd [project-directory]
```

2. Install dependencies

```bash
npm install
```

3. Create environment file
   Create a `.env.local` file in the root directory and add the following variables:

```env
API_BASE_URL=your_api_base_url

```

4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Additional Scripts

- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

### Key Files and Directories

#### Configuration Files

- `next.config.js`: Next.js configuration with standalone output and image optimization settings
- `tailwind.config.ts`: Tailwind CSS configuration with custom theme settings
- `components.json`: Shadcn UI configuration and component aliases
- `tsconfig.json`: TypeScript configuration with path aliases

#### Core Directories

**app/**

- Contains the main application pages and layouts
- Uses the new Next.js App Router
- `globals.css` includes Tailwind CSS setup and custom theme variables
- `/api/`: Contains API route handlers
  - `/api/football/`: Proxy API endpoints for secure football data fetching
  - Handles API key protection and request forwarding
  - Prevents exposure of sensitive API keys to the client

**components/**

- Organized collection of reusable React components
- Uses Shadcn UI components for consistent design
- Includes custom components like TrendingNews

**types/**

- `match-type.ts`: TypeScript interfaces for match-related data structures
- `trending-news-types.ts`: Type definitions for news features
- Contains all shared TypeScript interfaces and type definitions

**public/**

- `data/`: JSON files and static data resources
- `image/`: Static images, icons, and media assets
- Assets in this directory are served directly from the root URL path

**lib/**

- `utils.ts`: Utility functions for className merging
- `axiosInstance.ts`: Configured Axios instance for API calls

**hooks/**

- Custom React hooks for state management and data fetching
- Includes toast notifications and custom query hooks

### Technology Stack

- Next.js 14.2
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- React Query
- Axios
- Lucide React Icons

### Design System

The project uses a custom theme with:

- Custom color palette including specific grays and accent colors
- Responsive design support
- Dark mode configuration
- Google Font: Sofia Sans

### Development Guidelines

1. Follow the "use client" directive for client-side components
2. Use Lucide React for icons
3. Implement responsive designs
4. Follow TypeScript strict mode guidelines
5. Use Tailwind CSS for styling
6. Implement proper error handling and loading states
