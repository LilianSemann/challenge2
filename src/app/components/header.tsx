export default function Header() {
    return (
        <>
        <header className="bg-black text-white w-full h-24 flex justify-between gap-4 py-3 px-7 items-center text-lg">
            <button className="hover:scale-105 transition">My Very Real Company</button>
            <div className="flex gap-4">
                <button className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition">About</button>
                <button className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition">Contact</button>
            </div>
        </header>
        </>
    )
}
