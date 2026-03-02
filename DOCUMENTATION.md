# Project Documentation

## Development Approach

The goal of this project was to build a performant, dependency-lean React application to display an infinite scrolling data table fetched from an external dummy API.

1. **Setup & Tooling**: I chose Vite over Create React App (CRA) due to its significantly faster cold start and Hot Module Replacement (HMR) times. A minimal setup was used without unnecessary boilerplates.
2. **Component Architecture**: The application was structured logically with:
   - `App.jsx`: The layout container.
   - `Table.jsx`: The core interactive table.
   - `EditableCell.jsx`: A reusable cell element managing its own internal editing state.
   - `useProducts.js`: A custom React hook abstracting data fetching and side-effect logic away from the UI components.
3. **Styling Approach**: As per requirements, third-party component libraries were avoided. Instead, a comprehensive CSS styling system was implemented using CSS variables in `index.css`. This provides a modern, premium dark-mode aesthetic utilizing glassmorphism patterns, responsive typography, and hover micro-animations.

## Challenges Faced & Solutions Implemented

### 1. Infinite Scrolling Without External Libraries
**Challenge**: Implementing infinite scrolling seamlessly without relying on robust libraries like `react-window` or `react-virtualized`.
**Solution**: I utilized the native `IntersectionObserver` API. I attached a React `useCallback` ref to the final row of the table. Once this element intersects the viewport (with a margin to preemptively load), it triggers the custom hook to fetch the next `limit` payload, effectively appending data linearly without duplicating previously mounted product IDs.

### 2. In-place Cell Editing
**Challenge**: Creating an editable cell without bloating the parent Table's state management.
**Solution**: The `EditableCell` component was created to encapsulate local UI state (`isEditing`, `editValue`). It only communicates upward via an `onSave` callback when a change is confirmed (via blur or pressing Enter). It handles `Escape` key presses gracefully by reverting to the previous unedited value without affecting the parent state.

### 3. Maintaining Table Layout Under Responsive Constraints
**Challenge**: Wide data tables often break layouts on mobile screen sizes.
**Solution**: I introduced a `.table-responsive` wrapping container with `overflow-x: auto`. This allows the table itself to horizontally scroll while keeping the main application container within viewport bounds, maximizing readability without sacrificing layout integrity on narrow devices.
