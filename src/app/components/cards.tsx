import Card from "./card"

export default function Cards() {
    return (
        <section className="bg-[#040b22] w-auto flex justify-center gap-7 p-14">
            <Card text="Windows" src="/windows.png"/>
            <Card text="Mac" src="/mac.png"/>
            <Card text="Linux" src="/linux.png"/>
        </section>
    )
}