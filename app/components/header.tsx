import Image from "next/image"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-8">
                <Image
                    className="dark:invert"
                    src="https://isoteksystems.com/wp-content/uploads/2021/02/Isotek_Logo_neg.svg"
                    alt="IsoTek"
                    width={160}
                    height={38}
                    priority
                />
                <h1 className="mb-5 text-white text-4xl font-bold">
                    V5 Sirius Giveaway
                </h1>
            
        </div>
    )
}

export default Header
