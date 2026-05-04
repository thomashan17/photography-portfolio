import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThomasHanPortfolio from './thomas-han-portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThomasHanPortfolio />
  </StrictMode>,
)
