import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const rootDir = process.cwd()
const clientIndexPath = path.join(rootDir, 'dist', 'index.html')
const serverEntryPath = path.join(rootDir, 'dist', 'server', 'entry-server.js')

const template = await readFile(clientIndexPath, 'utf-8')
const { render } = await import(pathToFileURL(serverEntryPath).href)

const appHtml = render('/')
const html = template.replace('<!--ssr-outlet-->', appHtml)

await writeFile(clientIndexPath, html)
console.log('Prerendered / into dist/index.html')
