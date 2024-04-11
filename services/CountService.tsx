"use server"
import { promises as fs } from 'fs'

export async function downloadCount() {
    const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
    const count = parseInt(JSON.parse(file).count) + 1
    await fs.writeFile(process.cwd() + '/store/download.json', JSON.stringify({ count: count }))
    return count
}

export async function getCount() {
    const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
    const count = parseInt(JSON.parse(file).count)
    console.log(count)
    return count
}