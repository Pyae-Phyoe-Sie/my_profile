import { personalData } from "@/store/data";

export default class DataService {

    constructor() {}

    public static getMyData() {
        return personalData as MYDATA
    }

    public static getProject() {
        return personalData.projects as PROJECT[]
    }

    public static getTotalExpYear(year: number) {
        const d = new Date();
        let currentYear = d.getFullYear();
        return currentYear - year
    }
}