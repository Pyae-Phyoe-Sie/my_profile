// import { personalData } from "@/store/data"
import firebase from '@/app/firebase'
import { getDatabase, ref, child, get } from "firebase/database"

const dbRef = ref(getDatabase())

/**
 * get my data
 * @returns object
 */
export async function getMyData() {
    const personal = (await get(child(dbRef, `/personal`))).val() as PERSONAL
    const education = await get(child(dbRef, `/education`))
    const skills = await get(child(dbRef, `/skills`))
    const experience = await get(child(dbRef, `/experience`))
    const reference = await get(child(dbRef, `/reference`))
    const languages = await get(child(dbRef, `/languages`))

    return {
        personal_information: personal,
        education_background: JSON.parse(education.val()),
        skills: JSON.parse(skills.val()),
        experience: JSON.parse(experience.val()),
        reference: JSON.parse(reference.val()),
        languages: JSON.parse(languages.val()),
    } as MYDATA
}


export async function getProject() {
    const projects = await get(child(dbRef, `/projects`))
    return JSON.parse(projects.val()) as PROJECT[]
}

/**
 * get cover data
 * @returns string
 */
export async function getMyCover() {
    const cover = await get(child(dbRef, `/cover`))
    const personal = (await get(child(dbRef, `/personal`))).val() as PERSONAL
    return (cover.val()).replace("{YEAR}", getTotalExpYear(personal.start_year)) as string
}

export function getTotalExpYear(year: number) {
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear - year
}

/**
 * get cover data
 * @returns string
 */
export async function getZipFileLink() {
    const zipLink = await get(child(dbRef, `/zip`))
    return zipLink.val() as string
}

/**
 * get cover data
 * @returns string
 */
export async function getProfileLink() {
    const profileLink = await get(child(dbRef, `/profile`))
    return profileLink.val() as string
}