import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getContentPageBySlug } from '../data/pages'
import '../styles/content-page.css'

export function MarkdownDocumentPage() {
  const location = useLocation()
  const slug = location.pathname.replace(/^\/+|\/+$/g, '')

  const page = getContentPageBySlug(slug)

  if (!page) {
    return (
      <main className="content-page px-6 py-16 lg:px-8">
        <article className="mx-auto w-full max-w-3xl rounded-[2rem] bg-white p-8 text-[#1f3041] shadow-[0_24px_60px_rgba(31,48,65,0.1)] sm:p-10 lg:p-14">
          <h1 className="text-4xl font-black uppercase italic tracking-[-0.05em]">Page not found</h1>
          <p className="mt-4 text-[#4c5d70]">
            We could not find that document. Go back to the <a href="/">home page</a>.
          </p>
        </article>
      </main>
    )
  }

  return (
    <main className="content-page px-6 py-16 lg:px-8">
      <article className="content-page__article mx-auto w-full max-w-4xl rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(31,48,65,0.1)] sm:p-10 lg:p-14">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.markdown}</ReactMarkdown>
      </article>
    </main>
  )
}
