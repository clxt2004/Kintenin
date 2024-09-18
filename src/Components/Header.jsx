import { MainTitle } from "./MainTitle"
import { Navbar } from "./NavBar"

export const Header = ()=>{
     return (
          <div className="h-screen relative bg-left  bg-[url('../../public/2149141350.jpg')] bg-no-repeat bg-cover">
               <div className="bg-black opacity-60 w-full h-full absolute">
               </div>
               <Navbar />
               <MainTitle />
          </div>
     )
}