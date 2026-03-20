import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../tokens/css/titan.css'
import '../../../tokens/themes/_insights.css'
import '../../../tokens/themes/_audiense.css'
import '../../../tokens/themes/_neutral.css'
import '../../../tokens/themes/_demand.css'
import '../../../tokens/themes/_linkedin.css'
import '../../../tokens/themes/_tweetbinder.css'
import 'titan-compositions/styles'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
