import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import MetaPixelTracker from './analytics/MetaPixelTracker.tsx'
import GATracker from './analytics/GATracker.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MetaPixelTracker />
      <GATracker />
      <App />
    </BrowserRouter>
  </StrictMode>
)
