export type ContentPage = {
  slug: string
  routePath: string
  title: string
  markdown: string
}

type PageFrontmatter = {
  slug?: string
  title?: string
}

const markdownModules = import.meta.glob('../pages/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseFrontmatter(rawContent: string): {
  data: PageFrontmatter
  markdown: string
} {
  const match = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)

  if (!match) {
    return {
      data: {},
      markdown: rawContent,
    }
  }

  const [, frontmatterBlock, markdown] = match
  const data: PageFrontmatter = {}

  for (const line of frontmatterBlock.split('\n')) {
    const separatorIndex = line.indexOf(':')

    if (separatorIndex <= 0) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '')

    if (key === 'slug') {
      data.slug = value
    }

    if (key === 'title') {
      data.title = value
    }
  }

  return { data, markdown }
}

function normalizeSlug(slug: string): string {
  return slug.trim().replace(/^\/+|\/+$/g, '')
}

function resolveFileSlug(filePath: string): string {
  const fileName = filePath.split('/').pop() ?? ''
  return fileName.replace(/\.md$/, '')
}

function toPage(filePath: string, rawContent: string): ContentPage {
  const { data: frontmatter, markdown } = parseFrontmatter(rawContent)
  const configuredSlug = frontmatter.slug ? normalizeSlug(frontmatter.slug) : ''
  const fallbackSlug = normalizeSlug(resolveFileSlug(filePath))
  const slug = configuredSlug || fallbackSlug

  return {
    slug,
    routePath: `/${slug}`,
    title: frontmatter.title?.trim() || slug,
    markdown,
  }
}

const pages = Object.entries(markdownModules)
  .map(([filePath, rawContent]) => toPage(filePath, rawContent))
  .filter((page) => page.slug.length > 0)

export function getAllContentPages(): ContentPage[] {
  return [...pages]
}

export function getContentPageBySlug(slug: string): ContentPage | null {
  const normalizedSlug = normalizeSlug(slug)
  return pages.find((page) => page.slug === normalizedSlug) ?? null
}

export function getContentRoutePaths(): string[] {
  return pages.map((page) => page.routePath)
}
