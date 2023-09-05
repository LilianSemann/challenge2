import Card from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header/>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10"><Card/><Card/><Card/></div>
      <div className="w-[65%] p-4 border border-zinc-500 rounded-lg flex flex-col gap-4">
      <p>Can you hear, my heartbeat? Tired of feeling never enough. I close my eyes and tell myself that my dreams will come true. There'll be no more darkness when you believe in yourself, you're instopable.</p>
      <p>E nessa loucura de dizer que não te quero Vou negando as aparências Disfarçando as evidências Mas pra que viver fingindo Se eu não posso enganar meu coração? Eu sei que te amo!
 Chega de mentiras De negar o meu desejo Eu te quero mais que tudo Eu preciso do seu beijo Eu entrego a minha vida Pra você fazer o que quiser de mim Só quero ouvir você dizer que sim!
 Diz que é verdade, que tem saudade Que ainda você pensa muito em mim Diz que é verdade, que tem saudade Que ainda você quer viver pra mim
      </p>
      </div>
    </section>
    <Footer/>
    </>
  )
}
