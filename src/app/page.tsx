import Cards from "./components/cards";


export default function Home() {
  return (
    <>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <Cards/>
      </div>
      <main className="w-[65%] p-4 border border-zinc-500 rounded-lg flex">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo repudiandae. Autem, rerum, iste eaque ratione in, harum unde voluptas distinctio iure similique rem quo non sint temporibus beatae fugit.</p>
      </main>
    </section>
    </>
  )
}
