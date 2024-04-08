"use client"
import DataService from "@/services/DataService";
import { useState } from "react";

export default function PROJECTS() {
    const [data] = useState<PROJECT[]>(DataService.getProject())

    return <main className="flex flex-col items-center justify-between p-10">
        <div className="grid grid-cols-1 gap-6 px-4 w-full">
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                    {data.map((project, index) => (
                        <div key={index} className={`${(index + 1 != data.length) ? "border-b py-5" : "py-5"}`}>
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