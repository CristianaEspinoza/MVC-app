# MVC Application

This project demonstrates the Model-View-Controller (MVC) architectural pattern.

## MVC Pattern Explanation

The application is structured to separate concerns into three distinct layers:

1.  **Model**: Manages the data and business logic. It retrieves data from sources and maintains the state.
2.  **View**: Handles the presentation layer. It displays data provided by the Controller and captures user interactions.
3.  **Controller**: Acts as an intermediary. It processes user input from the View, updates the Model, and refreshes the View.

## Component Structure

### Configuration Components

*   **`vite.config.ts`**: Configures the Vite build tool.
    *   **Server**: Sets the development server to port `3000` and host `0.0.0.0`.
    *   **Plugins**: Integrates React support via `@vitejs/plugin-react`.
    *   **Resolution**: Defines an alias `@` pointing to the project root for cleaner imports.

*   **`tsconfig.json`**: Configures the TypeScript compiler.
    *   **Target**: Compiles to `ES2022` syntax.
    *   **JSX**: Uses `react-jsx` for modern React transformations.
    *   **Paths**: Maps `@/*` to the root directory, mirroring the Vite alias configuration.
    *   **Module Resolution**: Set to `bundler` for compatibility with Vite.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
