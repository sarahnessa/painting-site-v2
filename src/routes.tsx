// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import { App } from "@/App"
import { Contact } from "@/ContactForm";

// 1. Declare absolute path literals safely
export const APP_ROUTES = {
  home: '/',
  contact: '/contact',
} as const;

// 2. Initialize the main data router
export const router = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <App />,
  },
  {
    path: APP_ROUTES.contact,
    element: <Contact />,
  },
]);
