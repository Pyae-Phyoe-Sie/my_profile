// "use server"
// import { promises as fs } from 'fs'

// export async function downloadCount() {
//     const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
//     const count = parseInt(JSON.parse(file).count) + 1
//     await fs.writeFile(process.cwd() + '/store/download.json', JSON.stringify({ count: count }))
//     return count
// }

// export async function getCount() {
//     const file = await fs.readFile(process.cwd() + '/store/download.json', 'utf8')
//     const count = parseInt(JSON.parse(file).count)
//     console.log(count)
//     return count
// }

import firebase from '@/app/firebase'
import { getDatabase, ref, set, onValue, child, get } from "firebase/database"

const db = getDatabase(firebase)

const dbRef = ref(getDatabase());

export async function getCount() {
    const data = await get(child(dbRef, `/download`))
    return data.val()
}

export async function updateCount(value: number) {
    set(child(dbRef, `/download`), value);
}

// const starCountRef = ref(db, '/count/Download');
// console.log(starCountRef)
// onValue(starCountRef, (snapshot) => {
//     console.log(snapshot)
//     const data = snapshot.val();
//     console.log("data", data)
// });

// export default db