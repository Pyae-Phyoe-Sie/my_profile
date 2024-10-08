interface EDUCATION {
    title: string,
    school: string,
    from: string,
    to: string,
    description: string
}

interface PERSONAL {
    email: string,
    name: string,
    nickname: string,
    title: string,
    profile: string,
    start_year: number,
    linkedIn: string,
    github: string,
    location: string,
    hackerRank: string
}

interface SKILL {
    name: string,
    type: string
}

interface EXPERIENCE {
    title: string,
    type: string,
    company: string,
    from: string,
    to: string,
    present: boolean,
    responsibilities: string[]
}

interface PROJECT {
    title: string,
    description: string,
    image: string,
    link: string
}

interface REFERENCE {
    title: string,
    name: string,
    company: string,
    socials: string[],
    email: string
}

interface MYDATA {
    personal_information: PERSONAL,
    education_background: EDUCATION[],
    skills: SKILL[],
    experience: EXPERIENCE[],
    reference: REFERENCE[],
    languages: SKILL[]
}

interface PopupProps {
    show: boolean,
    setShowPopup: Function,
    downloadOrSaveDownload: Function,
}