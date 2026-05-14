import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const rootDir = process.cwd()
const clientIndexPath = path.join(rootDir, 'dist', 'index.html')
const serverEntryPath = path.join(rootDir, 'dist', 'server', 'entry-server.js')

const template = await readFile(clientIndexPath, 'utf-8')
const { getPrerenderRoutes, render } = await import(pathToFileURL(serverEntryPath).href)
const prerenderRoutes = Array.from(new Set(getPrerenderRoutes()))

for (const routePath of prerenderRoutes) {
  const appHtml = render(routePath)
  const html = template.replace('<!--ssr-outlet-->', appHtml)
  const outputPath =
    routePath === '/'
      ? clientIndexPath
      : path.join(rootDir, 'dist', routePath.replace(/^\//, ''), 'index.html')

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html)
  console.log(`Prerendered ${routePath} into ${path.relative(rootDir, outputPath)}`)
}
