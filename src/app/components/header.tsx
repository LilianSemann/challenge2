export default function Header() {
    return (
        <>
        <header className="bg-black text-white w-full h-24 flex py-3 px-7 items-center text-lg">
            <div className="w-[50%]">
                <button className="hover:scale-105 transition">My Very Real Company</button>
            </div>
            <div className="w-[50%] flex gap-4 justify-end">
                <button className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition">About</button>
                <button className="px-3 py-2 rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition">Contact</button>
            </div>
        </header>
        </>
    )
}