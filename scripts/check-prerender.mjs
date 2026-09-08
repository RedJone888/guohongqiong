import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { Window } from 'happy-dom'

// Inspect the HTML without executing client JavaScript: an empty app shell must fail.
const pages = ['profile', 'experience', 'projects', 'education', 'certificates', 'skills', 'contact']
const window = new Window({ url: 'https://portfolio.test', settings: { enableJavaScriptEvaluation: false, disableCSSFileLoading: true, disableIframePageLoading: true } })
const titles = new Set()

try {
  for (const section of pages) {
    const path = section === 'profile' ? '/' : `/${section}`
    const file = section === 'profile' ? 'index.html' : `${section}/index.html`
    const html = await readFile(new URL(`../.output/public/${file}`, import.meta.url), 'utf8')
    // Resource hints are irrelevant to this offline HTML check.
    const document = new window.DOMParser().parseFromString(html.replace(/<link\b[^>]*\brel="(?:preload|modulepreload|prefetch)"[^>]*>/g, ''), 'text/html')
    const content = document.querySelector(`main > section#${section}`)
    assert.ok(content, `${path}: missing prerendered section`)
    const heading = section === 'profile' ? '.profile-headline' : `.${section}-section-title`
    assert.ok(content.querySelector(heading)?.textContent.trim(), `${path}: missing page heading`)
    assert.ok(content.textContent.trim().length > 100, `${path}: missing page body`)
    assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), `https://guohongqiong.vercel.app${path}`)
    assert.equal(document.querySelector('meta[property="og:url"]')?.getAttribute('content'), `https://guohongqiong.vercel.app${path}`)
    assert.ok(document.querySelector('meta[name="description"]')?.getAttribute('content'), `${path}: missing description`)
    assert.ok(document.title.trim(), `${path}: missing title`)
    titles.add(document.title)
    console.log(`Prerender verified: ${path}`)
  }
  assert.equal(titles.size, pages.length, 'Each route must have a distinct title')
} finally {
  await window.happyDOM.close()
}
