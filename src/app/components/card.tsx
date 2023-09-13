import Image from "next/image"

interface CardsProps {
    text: string,
    src: string
}

export default function Card(props: CardsProps) {

    return (
        <section className="p-4 rounded-xl bg-white drop-shadow-md w-44 h-40 flex flex-col gap-4 justify-center items-center hover:translate-y-[-0.5rem] transition duration-300 ease-[cubic-bezier(.34,2,.6,1)]">
            <Image
                width={50}
                height={50}
                src={props.src}
                alt=''
            />
            <span className="text-black font-medium text-lg">{props.text}</span>
        </section>
    )
}