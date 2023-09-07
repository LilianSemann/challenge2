import Image from "next/image";

export function Card1() {
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

export function Card2() {
    return (
        <>
        <section className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2">
            <Image 
                src={'/tortuga.jpg'} 
                height={200} width={200} 
                alt="Tartaruga fofa" 
                className="rounded-md"
            />
            <p>Tartaruga fofa</p>
        </section>
        </>
    )
}

export function Card3() {
    return (
        <>
        <section className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2">
            <Image 
                src={'/moto.jpg'} 
                height={200} width={200} 
                alt="Moto irada" 
                className="rounded-md"
            />
            <p>Moto irada</p>
        </section>
        </>
    )
}

export function Card4() {
    return (
        <>
        <section className="h-fit w-fit p-3 border border-zinc-500 rounded-lg flex flex-col items-center gap-2">
            <Image 
                src={'/paraguaio.jpg'} 
                height={200} width={200} 
                alt="Paraguaio de lado" 
                className="rounded-md"
            />
            <p>Paraguaio de lado</p>
        </section>
        </>
    )
}