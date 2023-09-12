import Cards from "./components/cards";


export default function Home() {
  return (
    <>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <Cards/>
      </div>
      <main className="w-[65%] p-4 border border-zinc-500 rounded-lg flex">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </main>
    </section>
    </>
  )
}
