"use client"

import Link from "next/link";
import { motion, useCycle } from "framer-motion"
import Header from "./components/header";
import Intro from "./components/intro";

export default function Home() {
    const [isOpen, setIsOpen] = useCycle(false, true)
    const variants = {
        open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
        closed: { opacity: 0, x: "-100%" },
        initial: {opacity: 0}
    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <Header />
                    {!isOpen &&
                        <Intro />
                    }
                <motion.form 
                    initial={"initial"}
                    variants={variants}
                    animate={isOpen ? "open" : "closed"}
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@example.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your address</label>
                        <textarea id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                    </div>

                    <div className="flex-grow border-t border-gray-600 my-8"></div>

                    <div className="mb-5">
                        <label htmlFor="retailer" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Retailer visited</label>
                        <input type="text" id="retailer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Winchester Audio" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="demo" className="block mb-2 text-sm font-medium text-isotek dark:text-white">What did you demo?</label>
                        <textarea id="demo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. IsoTek Sigmas V5 and Polaris powerblock" required />
                    </div>
                    <div className="flex-grow border-t border-gray-600 my-8"></div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-white">
                            Agree to terms &amp; conditions
                        </label>
                    </div>
                    <button type="submit" className="text-white bg-isotek hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </motion.form>


            </main>
            <footer className="row-start-3 flex gap-6 text-gray-400 text-sm flex-wrap items-center justify-center">
                Copyright &copy; 2024 <Link href="https://isoteksystems.com/">IsoTek Power Systems Ltd.</Link>
            </footer>
        </div>
    );
}
