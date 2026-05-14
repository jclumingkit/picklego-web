import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from '@app'
import { getContentRoutePaths } from '@content'

export function render(url = '/') {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export function getPrerenderRoutes() {
  const contentRoutes = getContentRoutePaths()
  return ['/', ...contentRoutes]
}
