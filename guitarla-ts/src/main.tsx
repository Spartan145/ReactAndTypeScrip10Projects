import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(//Use ! as assertion operator to ensure TS we will return a determined type of field
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
