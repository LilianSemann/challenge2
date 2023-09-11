import Cards from "./components/cards";


export default function Home() {
  return (
    <>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <Cards/>
      </div>
      <main className="w-[65%] p-4 border border-zinc-500 rounded-lg flex flex-col gap-4">
      
      </main>
    </section>
    </>
  )
}
