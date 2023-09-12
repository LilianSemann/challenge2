import Cards from "./components/cards";


export default function Home() {
  return (
    <>
    <section className="p-8 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <Cards/>
      </div>
      <main className="w-[65%] p-4 border border-zinc-500 rounded-lg flex gap-4">
      No alto daquele cume, 
      Plantei uma roseira. 
      O vento no cume bate, 
      A rosa no cume cheira. 

      Quando vem a chuva fina, 
      Salpicos no cume caem. 
      Formigas no cume entram, 
      Abelhas do cume saem. 

      Quando cai a chuva grossa, 
      A água do cume desce. 
      O barro do cume escorre, 
      O mato no cume cresce. 

      Então, quando cessa a chuva, 
      No cume volta a alegria. 
      Pois torna a brilhar de novo, 
      O Sol que no cume ardia.
      </main>
    </section>
    </>
  )
}
