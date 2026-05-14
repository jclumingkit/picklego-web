import { HomePage } from '@home'
import { MarkdownDocumentPage } from '@content'
import { Route, Routes } from 'react-router-dom'
import '@design-system/theme/global.css'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<MarkdownDocumentPage />} />
    </Routes>
  )
}
