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
                        <div key={index} className={`${(index + 1 != myData?.length) ? "border-b py-5" : "py-5"}`}>
                            <div className="flex justify-between flex-wrap w-full">
                                <span className="text-gray-700 font-bold">{ project.title }</span>
                            </div>
                            <div className="pb-2 text-justify">
                                <p>{ project.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>;
}