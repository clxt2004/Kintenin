import { useState } from "react";
import { Item } from "./Item"

export const Items = ()=>{
     const [isOpen, setIsOpen] = useState(false);
     const close = ()=>{
          setIsOpen(!isOpen)
     }
     return (
          <>
               <ul className="hidden md:flex gap-3 justify-end items-center">
                    <Item name="Acceuil" link="" />
                    <Item name="Commander" link="commander" />
                    <Item name="Contact" link="contact" />
                    <Item name="A propos de nous" link="apropos" />
               </ul>
               <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                    </button>
               </div>
               {isOpen && (
                         <div className="md:w-0 transition-all absolute left-0 w-full z-40 top-full flex flex-col items-center bg-orange-500 py-20 ">
                              <a onClick={()=>close()} href="" className="block  py-2 text-white font-bold hover:text-gray-200">
                              Accueil
                              </a>
                              <a onClick={()=>close()} href="#commander" className="block  py-2 text-white font-bold hover:text-gray-200">
                              Commander
                              </a>
                              
                              <a onClick={()=>close()} href="#contact" className="block  py-2 text-white font-bold hover:text-gray-200">
                              Contact
                              </a>

                              <a onClick={()=>close()} href="#apropos" className="block  py-2 text-white font-bold hover:text-gray-200">
                              À propos de nous
                              </a>
                         </div>
               )}
          </>
          )
}