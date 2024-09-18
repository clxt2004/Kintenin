import { useEffect, useState } from "react"
import { Items } from "./Items"
import { Logo } from "./Logo"
import clsx from "clsx"

export const Navbar = ()=>{
     const [isBlack, setBlack] = useState(false)
     const blackNav = false
     useEffect(()=>{
          function scrollFuntion(){
               setBlack(window.scrollY > 598.888916015625)
          }
          window.addEventListener('scroll',scrollFuntion)
          return ()=>{
               removeEventListener('scroll', scrollFuntion)
          }
     })
     return (
          <div className={clsx("pt-3", "mx-auto" ,"transition duration-500","z-30" ,"px-10" ,"bg-black" ,isBlack?"":"bg-opacity-50" ,"fixed" ,"top-0" ,"left-0" ,"right-0" ,"py-5")}>
               <div className="flex items-center justify-between">
               <Logo />
               <Items />
               </div>
               
          </div>
     )
}