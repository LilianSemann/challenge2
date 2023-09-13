import { BsGithub} from "react-icons/bs"
import { BiLogoInstagramAlt} from "react-icons/bi"
import { AiOutlineWhatsApp} from "react-icons/ai"

import Link from "next/link"

export default function Footer() {
    return (
        <>
        <footer className="w-full py-3 md:px-32 px-16 h-32 flex items-center justify-between text-lg bg-[#010107] text-white">
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-medium">Contact us:</h1>
                <div className="flex gap-2">
                    <Link className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><BsGithub/></Link>
                    <Link className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><BiLogoInstagramAlt/></Link>
                    <Link className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><AiOutlineWhatsApp/></Link>
                </div>
            </div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-medium">Important:</h1>
                    <div className="flex flex-col text-sm items-start w-10">
                        <Link className="cursor-pointer hover:text-zinc-400 transition" href="/">Terms</Link>
                        <Link className="cursor-pointer hover:text-zinc-400 transition" href="/">Security</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-medium">About:</h1>
                    <div className="flex flex-col text-sm items-start w-10">
                        <Link className="cursor-pointer hover:text-zinc-400 transition" href="/">Blog</Link>
                        <Link className="cursor-pointer hover:text-zinc-400 transition" href="/">Partnerships</Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}