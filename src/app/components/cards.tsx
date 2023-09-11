import Image from "next/image";

interface Props {
    url: string
    alt: string
    text: string
}

export default function Cards() {

    const images = [
        {url: '/moto.jpg', alt:"Moto irada", text: "Moto irada"},
        {url: '/velha.jpg', alt:"Velha armada", text: "Velha armada"},
        {url: '/tortuga.jpg', alt:"Tartaruga fofa", text: "Tartaruga fofa"}
    ]

    return (
        <>
        <div className="flex gap-5">
        {images.map((i) => (
            <section className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2">
                <Image 
                    src={i.url} 
                    height={200} width={200} 
                    alt={i.alt} 
                    className="rounded-md"
                />
                <p>{i.text}</p>
            </section>
        ))}
        </div>
        </>
    )
}