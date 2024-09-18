import { Logo } from "./Logo"
import { Title } from "./Title"


export const Footer = ()=>{
     return (
          <footer className="px-5  mx-auto bg-black pt-10 pb-5  ">
               <div className="flex items-center md:items-stretch my-5 justify-evenly ">
               <div >
                    <Logo />
               </div>
               <div className="flex items-center flex-col  gap-2 text-base">
                    <a href="" className="font-bold text-orange-500">Acceuil</a>
                    <a href="#apropos" className="font-bold text-orange-500">A propos</a>
                    <a href="#contact" className="font-bold text-orange-500">Contact</a>
               </div>
               </div>
               <p className="text-white text-center">&copy; {new Date().getFullYear()} Mon Site Web. Tous droits réservés.</p>
               
          </footer>
     )
}