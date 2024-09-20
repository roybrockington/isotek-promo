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
        </div>
    )
}

export default Intro
