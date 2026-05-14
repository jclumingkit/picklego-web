import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@app'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

hydrateRoot(
  rootElement,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
