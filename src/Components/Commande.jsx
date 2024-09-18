import { ShoppingBag, ShoppingCart } from "lucide-react"

export const Commande = ()=>{
     return (
          <div className="container mx-auto my-10">
               <h2  className="md:text-5xl text-4xl font-bold text-orange-500 italic justify-center md:justify-end items-center gap-2 my-10 flex">PASSER UNE COMMANDE ? <ShoppingCart size="50" /></h2>
               <div className="flex flex-col items-center gap-1">
                    <p className="text-center my-5 text-lg">
                         Nous sommes prêts à préparer votre commande avec soin. Il vous suffit de cliquer sur le bouton ci-dessous pour nous indiquer vos choix. Nous nous occupons du reste et vous offrons une expérience culinaire inoubliable !
                    </p>
                    <button className="rounded px-16 py-4 bg-black text-white font-bold flex gap-2">
                         Commander <ShoppingBag />
                    </button>
               </div>
          </div>
     )
}