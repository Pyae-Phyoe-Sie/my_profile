"use client"
import Processing from "@/components/processing";
import { getProject } from "@/services/DataService";
import { useEffect, useState } from "react";

export default function PROJECTS() {
    const [myData, setMyData] = useState<PROJECT[]>([])
    useEffect(() => {
        getProject().then((res) => setMyData(res))
    }, [])

    return (myData.length === 0) ?
    <Processing />
    :
    <main className="flex flex-col items-center justify-between xl:p-10">
        <div className="grid grid-cols-1 gap-6 w-full">
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow xl:rounded-lg p-6">
                    <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                    {myData?.map((project, index) => (
                        <div key={index} className="border px-4 py-5 mb-4 rounded-md hover:shadow-lg">
                            <div className="grid grid-cols-4 gap-4">
                                {project.image != "" && <div>
                                    <img src={project.image} alt="" />
                                </div>}
                                <div className={(project.image != "") ? "col-span-3" : "col-span-4"}>
                                    <div className="w-full">
                                        <span className="text-gray-700 font-bold">{ project.title }</span>
                                    </div>
                                    <div className="text-justify">
                                        <p>{ project.description }</p>
                                    </div>
                                    {(project.link != "") && <div className="text-left">
                                        <a className="text-sky-600" href={ project.link } target="_blank">{ project.link }</a>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>;
}