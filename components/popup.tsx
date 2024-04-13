import { FC, useState } from "react"

const Popup: FC<PopupProps> = (props): JSX.Element => {

    const [email, setEmail] = useState<string>('');

    const hidePopup = (value: boolean) => {
        props.setShowPopup(false)
        props.downloadOrSaveDownload(value, email)
    }

    if (props.show) {
        return <div className="bg-gray-700/[.5] fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-md md:w-3/4 xl:w-1/3 min-h-20 py-8 px-5 text-center">
                <p className="antialiased text-gray-600">Could you please let me know who you are.</p>
                <input className="border rounded-md border-gray-50 focus:outline-none p-2 mt-4 text-center" type="text" name="email" placeholder="a@gmail.com"
                 onChange={(e) => setEmail(e.target.value)} />
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <button 
                        onClick={() => hidePopup(false)}
                        className="col-start-2 bg-gray-500 hover:bg-gray-600 hover:ring hover:ring-gray-300 text-white rounded-md p-2"
                    >
                        Skip
                    </button>
                    <button
                        onClick={() => hidePopup(true)} 
                        className={"col-start-3 hover:bg-sky-600 hover:ring hover:ring-sky-300 text-white rounded-md p-2"+ (email === "" ? ' bg-sky-300 pointer-events-none' : ' bg-sky-500')}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>;
    } else {
        return <></>
    }
}

export default Popup