import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import download from '@/store/download.json'
 
export async function GET() {
  
  const file = await fs.readFile('/data/download.json', 'utf8')
  const count = parseInt(JSON.parse(file).count)
  return NextResponse.json({ count })
}

export async function POST() {
  const file = await fs.readFile('/data/download.json', 'utf8')
  const count = parseInt(JSON.parse(file).count) + 1
  await fs.writeFile('/data/download.json', JSON.stringify({ count: count }))
  return NextResponse.json({ count })
}