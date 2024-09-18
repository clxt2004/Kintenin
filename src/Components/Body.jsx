import { AllMennus } from "./AllMenus"
import { Commande } from "./Commande"
import { Menus } from "./Menus"
import { NousContacter } from "./NousContacter"
import { Title } from "./Title"
import { VotreRestaurant } from "./VotreRestaurant"

export const Body = ()=>{
     return (
          <section className="pt-16">
               <VotreRestaurant />
               <Menus />
               <Commande />
               <AllMennus />
               <NousContacter />
          </section>
     )
}