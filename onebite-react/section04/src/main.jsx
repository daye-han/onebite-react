import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)
/* App 컴포넌트를 랜더하고 있다. App.jsx 로부터 임포트 */
