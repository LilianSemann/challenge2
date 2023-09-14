import Link from "next/link";

export default function Header() {

    return (
        <>
        <header className="bg-[#010107] text-white w-full h-24 flex justify-between gap-4 py-3 px-7 items-center text-lg fixed">
            <Link href={'/'} className="hover:scale-105 transition">My Very Real Company</Link>
            <nav className="flex gap-4">
                <Link href={'/about'} className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:font-medium hover:scale-105 transition">About</Link>
                <Link href={'/'} className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:font-medium hover:scale-105 transition">Contact</Link>
            </nav>
        </header>
        </>
    )
}
