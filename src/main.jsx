import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

// StrictMode = only use for developement , remove 2 time output from production mode 
