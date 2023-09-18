import fs from 'node:fs/promises'

async function main() {
  const path = new URL('./app/relative.txt', import.meta.url)
  const contents = await fs.readFile(path, 'utf-8')
  console.log(contents)
}

main()
