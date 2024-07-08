import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useBrowserLocation } from "wouter/use-browser-location"
import './index.css'
import { Router } from 'wouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router hook={useBrowserLocation}>
      <App />
    </Router>
  </React.StrictMode>,
)
