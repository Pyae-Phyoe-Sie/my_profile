import { personalData } from "@/store/data";

export function getMyData() {
    return personalData as MYDATA
}

export function getProject() {
    return personalData.projects as PROJECT[]
}


/**
 * get cover data
 * @returns string
 */
export async function getMyCover() {
    return (personalData.cover[0]).replace("{YEAR}", personalData.personal_information.start_year.toString()) as string
}

export function getTotalExpYear(year: number) {
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear - year
}

export function getExpYear() {
    const d = new Date();
    let currentYear = d.getFullYear();
    return `${currentYear - personalData.personal_information.start_year}`
}


/**
 * get cover data
 * @returns string
 */
export function getZipFileLink() {
    return personalData.zip as string
}

/**
 * get cover data
 * @returns string
 */
export function getProfileLink() {
    return personalData.profile as string
}