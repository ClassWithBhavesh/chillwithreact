import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { movieStore } from './Store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={movieStore}>
      <App />
    </Provider>
  </StrictMode>,
)
