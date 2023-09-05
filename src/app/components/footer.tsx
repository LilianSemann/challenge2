import { BsGithub} from "react-icons/bs"
import { BiLogoInstagramAlt} from "react-icons/bi"
import { AiOutlineWhatsApp} from "react-icons/ai"

export default function Footer() {
    return (
        <>
        <footer className="bg-black text-white w-full h-32 flex py-3 px-20 items-center text-lg">
            <div className="w-[40%] flex flex-col gap-1">
                <h1 className="text-xl font-medium">Contact us:</h1>
                <div className="flex gap-2">
                    <a className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><BsGithub/></a>
                    <a className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><BiLogoInstagramAlt/></a>
                    <a className="p-1 bg-white text-black h-fit w-fit rounded-2xl hover:scale-105" href="/"><AiOutlineWhatsApp/></a>
                </div>
            </div>
            <div className="w-[30%] flex flex-col items-end">
                <h1 className="text-white font-medium">Important:</h1>
                <div className="flex flex-col text-sm items-start w-20">
                    <a className="cursor-pointer hover:text-zinc-400 transition">Term</a>
                    <a className="cursor-pointer hover:text-zinc-400 transition">Security</a>
                </div>
            </div>
            <div className="w-[30%] flex flex-col items-end">
                <h1 className="text-white font-medium">About:</h1>
                <div className="flex flex-col text-sm items-start w-10">
                    <a className="cursor-pointer hover:text-zinc-400 transition">??</a>
                    <a className="cursor-pointer hover:text-zinc-400 transition">???</a>
                </div>
            </div>
        </footer>
        </>
    )
}