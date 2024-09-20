"use client"

import Link from "next/link";
import Header from "./components/header";
import Form from "./components/form";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <Header />
                <Form />
            </main>
            <footer className="row-start-3 flex gap-6 text-gray-400 text-sm flex-wrap items-center justify-center">
                Copyright &copy; 2024 <Link href="https://isoteksystems.com/">IsoTek Power Systems Ltd.</Link>
            </footer>
        </div>
    );
}
