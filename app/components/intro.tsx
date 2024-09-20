import Image from "next/image"
import sirius from "../assets/sirius.png"

const Intro = () => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <p className="text-white text-center">From October 1st, tell us about your experience demoing IsoTek at your favourite home audio retailer for a chance to win a <span className="font-bold">V5 Sirius 6-way mains conditioner</span>!</p>
            <Image 
                src={sirius}
                alt="Sirius V5 5-way mains conditioner block"
                width={460} 
                height={120}/>
            <p className="text-white text-center">Complete our registration form before <span className="underline">October 31st</span> to enter...</p>
            <div className="flex items-start mb-5">
                <button 
                    onClick={() => setIsOpen()}
                    type="button" 
                    className="text-white bg-isotek hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Enter
                </button>
            </div>

        </div>
    )
}

export default Intro
