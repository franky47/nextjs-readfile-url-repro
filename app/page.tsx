import fs from 'node:fs/promises'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const path = new URL('./relative.txt', import.meta.url)
  const contents = await fs.readFile(path, 'utf-8')
  return <p>{contents}</p>
}
