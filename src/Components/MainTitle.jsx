import { ChefHat, ScrollText } from "lucide-react"

export const MainTitle = ()=>{
     return (
          <div className="container gap-7 mx-auto flex flex-col  justify-center h-full  relative">
               <div className="flex flex-col text-white gap-2 ">
                    <h1 className="font-bold text-center md:text-start text-5xl md:text-7xl italic">
                         KinTenin
                    </h1>
                    <p className="w-1/12 left-1/3 ml-10 relative md:left-28">
                         <img className="w-full min-w-24" src="../../public/chef-hat-svgrepo-com.svg" alt="" />
                    </p>
                    <h2 className="md:ml-20 text-center md:text-start  text-4xl md:text-5xl font-bold italic">
                         VOTRE RESTAURANT FAVORIS
                    </h2>
               </div>
               <div className="mx-auto md:mx-0">
                    <button className="flex justify-between gap-2 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold py-4 px-20 rounded">
                         Voir les menus <ScrollText />
                    </button>
               </div>
          </div>
          
          
     )
}