import Image from "next/image";

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
            <section key={i.text} className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2 hover:translate-y-[-0.5rem] transition duration-300 ease-[cubic-bezier(.34,2,.6,1)]">
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