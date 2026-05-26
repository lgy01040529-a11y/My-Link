# Project Overview

This workspace contains a Next.js project named `my-profile`.

## Project Structure

- **`my-profile/`**: The main application directory, a Next.js project.

---

## Sub-Project: my-profile

This is a **Next.js 16** application using **React 19** and **Tailwind CSS 4**. It is configured with TypeScript and the App Router.

### Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (v16.1.6)
-   **UI Library**: [React](https://react.dev/) (v19.2.3)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4), configured via `app/globals.css`.
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

### Building and Running

Run these commands from within the `my-profile/` directory:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

### Key Directories & Files

-   **`app/`**: Contains the application source code using the Next.js App Router.
    -   `page.tsx`: The main entry page.
    -   `layout.tsx`: The root layout.
    -   `globals.css`: Global styles and Tailwind CSS imports.
-   **`public/`**: Static assets like images and SVGs.
-   **Configuration**:
    -   `next.config.ts`: Next.js configuration.
    -   `postcss.config.mjs`: PostCSS configuration (used by Tailwind CSS).
    -   `tsconfig.json`: TypeScript configuration.
    -   `eslint.config.mjs`: ESLint configuration.

### Development Conventions

-   **Routing**: Uses the Next.js App Router (`app/` directory).
-   **Styling**: Uses Tailwind CSS v4. Custom theme variables are defined in `app/globals.css`.
-   **Fonts**: Uses `next/font` with `Geist` font family.
