"use client"
import { getMyCover } from "@/services/DataService";
import { useEffect, useState } from "react"
import Processing from "@/components/processing"

export default function HOME() {
    const [cover, setCover] = useState<string>()
    useEffect(() => {
        getMyCover().then((res) => setCover(res))
    }, [cover])

    return (!cover) ?
    <Processing />
    :
    <main className="flex flex-col items-center justify-between xl:p-10">
        <div className="grid grid-cols-1 gap-6 w-full">
            <div className="font-mono">
                <div className="bg-white shadow xl:rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Introduction</h2>
                    <article className="prose lg:prose-xl">
                      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: cover! }}></p>
                    </article>
                </div>
            </div>
        </div>
    </main>;
}