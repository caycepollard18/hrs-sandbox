import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

/**
 * Processes all legal & policy markdown files
 * in /pages/legal
 */

// todo: update this to use .mdx instead of .md

const policyDirectory = path.join(process.cwd(), 'policy')

export function getSortedPolicyData() {
  const fileNames = fs.readdirSync(policyDirectory)
  
  const allPolicyData = fileNames.map(fileName => {
    // Use filename as id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    // todo: update for .mdx
    const fullPath = path.join(policyDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse metadata
    // todo: update for .mdx
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  // todo: add "order" to metadata to sort
  return allPolicyData
}

export function getAllPolicyIds() {
  const fileNames = fs.readdirSync(policyDirectory)
  
  return fileNames.map(fileName => {
    return {
      params: {
        // todo: update for .mdx
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPolicyData(id) {
  // todo: update for .mdx
  const fullPath = path.join(policyDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse metadata
  // todo: update for .mdx
  const matterResult = matter(fileContents)

  // Use remark to convert markdown
  // todo: update for .mdx
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}