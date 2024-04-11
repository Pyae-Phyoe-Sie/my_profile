import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
 
export async function GET() {
  const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
  const count = parseInt(JSON.parse(file).count)
  return NextResponse.json({ count })
}

export async function POST() {
  const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
  const count = parseInt(JSON.parse(file).count) + 1
  await fs.writeFile(process.cwd() + '/store/download.json', JSON.stringify({ count: count }))
  return NextResponse.json({ count })
}