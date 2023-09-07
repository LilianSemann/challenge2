import { Card1, Card2, Card3, Card4 } from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header/>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <Card1/><Card2/><Card3/><Card4/>
      </div>
      <main className="w-[65%] p-4 border border-zinc-500 rounded-lg flex flex-col gap-4">
      
      </main>
    </section>
    <Footer/>
    </>
  )
}
