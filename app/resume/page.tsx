"use client"
import { getMyData, getProfileLink, getTotalExpYear } from "@/services/DataService";
import { useEffect, useState } from "react"
import Processing from "@/components/processing"

export default function PERSONAL_INFORMATION() {
    const [myData, setMyData] = useState<MYDATA>()
    useEffect(() => {
        getMyData().then((res) => setMyData(res))
    }, [])

    const [profileLink, setProfileLink] = useState<string>()
    useEffect(() => {
      getProfileLink().then((res) => setProfileLink(res))
    }, [])

    return (!myData?.personal_information) ?
    <Processing />
    :
    <main className="flex flex-col items-center justify-between xl:p-10">
        <div className="grid grid-cols-4 md:grid-cols-12 xl:gap-6">
            <div className="col-span-4 md:col-span-3">
                <div className="bg-gray-700 shadow xl:rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src={profileLink} className="w-32 h-32 bg-white rounded-full mb-4 shrink-0" />
                        <h1 className="text-white text-xl font-bold">{ myData?.personal_information.name } ({ myData?.personal_information.nickname })</h1>
                        <p className="text-white">{ myData?.personal_information.title }</p>
                    </div>
                    {(myData?.skills.length > 0) && <hr className="my-6 border-t border-gray-300" />}
                    {(myData?.skills.length > 0) && <div className="flex flex-col">
                        <h2 className="text-white text-xl font-bold mb-4">Skills</h2>
                        <ul>
                            {myData?.skills.map((skill, index) => (
                                <li key={index} className="mb-2"><span className="text-white font-bold">{ skill.name }</span> <span className="text-xs text-gray-100">({ skill.type })</span></li>
                            ))}
                        </ul>
                    </div>}

                    {(myData?.education_background.length > 0) && <hr className="my-6 border-t border-gray-300" />}
                    {(myData?.education_background.length > 0) && <div className="flex flex-col">
                        <h2 className="text-white text-xl font-bold mb-4">Education</h2>
                        <ul>
                            {myData?.education_background.map((education, index) => (
                                <li key={index} className="mb-2"><span className="text-white font-bold">{ education.title }</span> <span className="text-xs text-gray-100">({ education.school })</span></li>
                            ))}
                        </ul>
                    </div>}

                    {(myData?.reference.length > 0) && <hr className="my-6 border-t border-gray-300" />}
                    {(myData?.reference.length > 0) && <div className="flex flex-col">
                        <h2 className="text-white text-xl font-bold mb-4">Reference</h2>
                        {myData?.reference.map((reference, index) => (
                        <ul key={index}>
                            <li className="mb-2"><span className="text-white font-bold">{ reference.name }</span></li>
                            <li><span className="text-white text-sm">{ reference.title }</span></li>
                            <li><span className="text-white text-sm">{ reference.company }</span></li>
                            <li><span className="text-white text-sm">{ reference.email }</span></li>
                            {reference.socials.map((social, key) => (
                                <li key={key}><span className="text-white text-sm">{ social }</span></li>
                            ))}
                        </ul>
                        ))}
                    </div>}
                </div>
            </div>
            <div className="col-span-4 md:col-span-9">
                <div className="bg-white shadow xl:rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">{ (myData?.personal_information) ? (myData?.personal_information.profile).replace("{YEAR}", `${getTotalExpYear(myData?.personal_information.start_year)}`) : '' }</p>

                    {(myData?.personal_information.linkedIn != "" || myData?.personal_information.github != "" || myData?.personal_information.location != "" || myData?.personal_information.email != "") && <h3 className="font-semibold text-center mt-3 -mb-2">
                        Find me on
                    </h3>}
                    <div className="flex justify-center items-center gap-6 my-6">
                        {(myData?.personal_information.linkedIn != "") && <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn"
                            href={myData?.personal_information.linkedIn}
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>}
                        {(myData?.personal_information.github != "") && <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Github"
                            href={myData?.personal_information.github}
                            target="_blank">
                            <svg width="20" height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
                                <path fill="currentColor"
                                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </a>}
                        {(myData?.personal_information.location != "") && <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Map"
                            href={myData?.personal_information.location}
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        </a>}
                        {(myData?.personal_information.email != "") && <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Map"
                            href={`mailto:${myData?.personal_information.email}`}
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </a>}
                    </div>

                    {(myData?.experience.length > 0) && <hr className="my-6 border-t border-gray-300" />}
                    {(myData?.experience.length > 0) && <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>}
                    {myData?.experience.map((experience, index) => (
                        <div key={index} className={`${(index + 1 != myData?.experience.length) ? "border-b mb-6 pb-2" : "mb-6 pb-2"}`}>
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">{ experience.title }</span>
                                <p className="text-right w-full">
                                    <span className="text-gray-700 mr-2">at { experience.company }</span>
                                    <span className="text-gray-700">{ experience.from } - { (experience.present) ? "present" : experience.to }</span>
                                </p>
                            </div>
                            <div className="pl-5">
                                <ul className="list-disc mt-2">
                                    {experience.responsibilities.map((responsibility, key) => (
                                        <li key={key} className="mb-2">{ responsibility }</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>;
}