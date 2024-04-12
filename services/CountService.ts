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