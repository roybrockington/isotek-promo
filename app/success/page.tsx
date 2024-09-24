import Link from "next/link"

export default function Success() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <h1 className="mb-5 text-white text-4xl font-bold">
                    Success!
                </h1>
                <div className="flex flex-col gap-8 items-center">
                    <p className="text-white text-center">Thanks for entering. Our winner will be announced after November 1st.</p>
                    <p className="bg-white p-5 rounded text-black text-lg text-center">Explore the full IsoTek range at <br/><Link href="https://isoteksystems.com" className="underline">www.isoteksystems.com</Link></p>
                </div>

            </main>
            <footer className="row-start-3 flex gap-6 text-gray-400 text-sm flex-wrap items-center justify-center">
                Copyright &copy; 2024 <Link href="https://isoteksystems.com/">IsoTek Power Systems Ltd.</Link>
            </footer>
        </div>
    );
}

