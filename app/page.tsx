"use client"
import DataService from "@/services/DataService";
import { useState } from "react";

export default function HOME() {
    const [data] = useState<MYDATA>(DataService.getMyData())
    const [year] = useState<string>(DataService.getExpYear())

    return <main className="flex flex-col items-center justify-between xl:p-10">
        <div className="grid grid-cols-1 gap-6">
            <div className="font-mono">
                <div className="bg-white shadow xl:rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Introduction</h2>
                    <article className="prose lg:prose-xl">
                      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: (data.cover[0].replace("{YEAR}", year)) }}></p>
                    </article>
                </div>
            </div>
        </div>
    </main>;
}