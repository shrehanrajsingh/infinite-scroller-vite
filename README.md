A modern, responsive React application built with Vite that displays product data from the DummyJSON API. Features include a custom-built table, infinite scrolling via Intersection Observer, and an editable title field.

## Project Links
- **GitHub Repository**: [Insert Link Here]
- **Live Deployment**: [Insert Vercel/Netlify URL Here]

## Technologies Used
- **React (v19)**: Functional components and Hooks (useState, useEffect, useCallback, useRef)
- **Vite**: Next-generation frontend tooling for rapid development
- **Vanilla CSS**: Comprehensive custom design system built with CSS variables, providing a premium dark mode aesthetic without relying on external UI frameworks.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd scrollerapi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Features Implemented
- **Data Fetching:** Custom `useProducts` hook fetches data from `https://dummyjson.com/products`.
- **Infinite Scrolling:** Implemented using a native `IntersectionObserver` on the last row of the table, smoothly loading 20 items at a time without external libraries.
- **Editable Title:** A custom `EditableCell` component allows users to double-click the product title to edit it, saving on blur or Enter press.
- **Responsive Design:** The table wrapper allows horizontal scrolling on small screens to maintain layout integrity.

## Configurations
No environment variables (`.env` files) are required to run this application as it consumes a public, unauthenticated API.
