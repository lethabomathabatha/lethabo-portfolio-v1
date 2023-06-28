import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/stylesheet.css'
import App from './assets/App'
import { GroupOrientation } from './assets/App'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GroupOrientation />
  </React.StrictMode>,
)
