import Image from "next/image";

export default function Card() {
    return (
        <>
        <section className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2">
            <Image 
                src={'/velha.jpg'} 
                height={200} width={200} 
                alt="Velha armada" 
                className="rounded-md"
            />
            <p>Velha armada</p>
        </section>
        </>
    )
}