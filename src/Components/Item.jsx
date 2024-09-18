export const Item = ({name, link})=>{
     return (
          <li className="text-white hover:text-orange-500 hover:translate-x-1 hover:-translate-y-1  transition-all font-bold">
               <a href={`#${link}`}>
               {name}
               </a>
               
          </li>
     )
}