"use client"

import { motion, useCycle } from "framer-motion"
import Intro from './intro'
import { useState } from "react"
import Terms from "./terms"
import { useRouter } from "next/navigation"
import { ScaleLoader } from "react-spinners"

const variants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
    closed: { opacity: 0, x: "-100%" },
    initial: { opacity: 0 }
}

const Form = () => {
    const [isOpen, setIsOpen] = useCycle(false, true)
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        retailer: '',
        demo: '',
    })

    const router = useRouter()

    const [modal, setModal] = useState(false)

    const handleChange = (e: any) => {
        setData(prev => ({
            ...prev, 
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch('/api/register', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`)
            }
            const responseData = await response.json()
            console.log(responseData['message'])

            // alert('Message successfully sent') // show confirmation page
            router.push('/success')
        } catch (err) {
            console.error(err)
            setLoading(false)
            alert("Error, please try resubmitting the form")
        }
    }

    return (
        <div>
            <Terms modal={modal} setModal={setModal} />
            {!isOpen && 
                <div>
                    <Intro />
                    <div className="flex justify-center my-6">
                        <button 
                            onClick={() => setIsOpen()}
                            type="button" 
                            className="text-white bg-isotek hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Enter
                        </button>
                    </div>
                </div>
            }

            {isOpen &&

                <motion.form 
                    initial={"initial"}
                    variants={variants}
                    animate={isOpen ? "open" : "closed"}
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your name</label>
                        <input
                            name="name"
                            type="text" 
                            id="name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Name" 
                            value={data.name}
                            onChange={e => handleChange(e)}
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your email</label>
                        <input 
                            name="email"
                            value={data.email}
                            onChange={e => handleChange(e)}
                            type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@example.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Your address</label>
                        <textarea 
                            name="address"
                            value={data.address}
                            onChange={e => handleChange(e)}
                            id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                    </div>

                    <div className="flex-grow border-t border-gray-600 my-8"></div>

                    <div className="mb-5">
                        <label htmlFor="retailer" className="block mb-2 text-sm font-medium text-isotek dark:text-white">Retailer visited</label>
                        <input 
                            name="retailer"
                            type="text" 
                            id="retailer" 
                            value={data.retailer}
                            onChange={e => handleChange(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="e.g. Winchester Audio" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="demo" className="block mb-2 text-sm font-medium text-isotek dark:text-white">What did you demo?</label>
                        <textarea 
                            name="demo"
                            value={data.demo}
                            onChange={e => handleChange(e)}
                            id="demo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. IsoTek Sigmas V5 and Polaris powerblock" required />
                    </div>
                    <div className="flex-grow border-t border-gray-600 my-8"></div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-white">
                            Agree to <span onClick={()=>setModal(true)} className="underline">terms &amp; conditions</span>
                        </label>
                    </div>
                    <div className="flex justify-center mb-5">
                        <button type="submit" className="flex justify-center items-center gap-2 text-white bg-isotek hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit <ScaleLoader
                                color={'white'}
                                loading={loading}
                                height={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />

                        </button>
                    </div>
                </motion.form>
            }
        </div>
    )
}

export default Form
