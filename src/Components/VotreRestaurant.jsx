import { Title } from "./Title"

export const VotreRestaurant = ()=>{
     return (
          <div id="apropos">
               <Title classname="text-center">
                    Votre restaurant
               </Title>
               <div className="flex items-center justify-between my-5 container mx-auto" >
                    <p className="leading-loose text-center ">
                              Chez Kintenin, nous vous invitons à vivre une expérience culinaire unique où tradition et modernité se rencontrent.

                              Dans une ambiance chaleureuse et conviviale, nous vous offrons des plats qui éveillent les sens, alliant textures et arômes pour une expérience gustative inoubliable. Que vous veniez pour un déjeuner d'affaires, un dîner romantique ou une soirée entre amis, Kintenin est l'endroit idéal pour savourer des moments de partage autour d'une table.

                              Nos chefs talentueux s'efforcent de créer des mets authentiques tout en y apportant une touche créative, mettant à l'honneur le meilleur de chaque ingrédient. Laissez-vous séduire par notre carte variée et nos spécialités, préparées avec soin et passion.
                    </p>
                    <img className="hidden w-1/2  md:block" src="/34907-removebg-preview.png" alt="" />
               </div>
          </div>
     )
}