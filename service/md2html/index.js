const { marked } = require('marked')
const { resolve } = require('path')
const { readFileSync, writeFile, readdirSync, unlink } = require('fs')

const mdPath = resolve(__dirname, './md')
const cachePath = resolve(__dirname, './cache')

// name eg: test
function parseMd(name) {
  let html = tryCache(name)
  return {
    html,
    valid: !!html,
  }
}

function tryCache(name) {
  const caches = readdirSync(cachePath)
  const index = caches.findIndex((filename) => filename === name + '.html')
  let html = null
  if (index >= 0) {
    // 缓存里面有，不需要再解析了
    console.log('缓存~')
    html = readFileSync(resolve(cachePath, caches[index])).toString()
  } else {
    // 缓存里面没有，去md文件夹里
    try {
      html = marked.parse(
        readFileSync(resolve(mdPath, name + '.md')).toString()
      )
    } catch {
      html = null
      return html
    }
    cacheHtml(name, html)
  }
  return html
}

function cacheHtml(name, html) {
  writeFile(resolve(cachePath, `${name}.html`), html, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('写入缓存')
  })
}

function deleteHtml(name) {
  unlink(resolve(cachePath, `${name}.html`), (err) => {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = {
  parseMd,
  deleteHtml,
}
