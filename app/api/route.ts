import { NextResponse } from 'next/server'
import fs from 'node:fs/promises'

export async function GET() {
  const path = new URL('../relative.txt', import.meta.url)
  const contents = await fs.readFile(path, 'utf-8')
  return NextResponse.json({
    contents,
  })
}
