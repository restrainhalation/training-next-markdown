import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch('https://raw.githubusercontent.com/restrainhalation/cw-the-book-of-devil-excerpt/main/README.md')
  const markdown = await res.text()
  return <MDXRemote source={markdown} />
}
