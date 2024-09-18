export const Item = ({name})=>{
     return (
          <li className="text-white hover:text-orange-500 hover:translate-x-1 hover:-translate-y-1  transition-all font-bold">
               <a href="">
               {name}
               </a>
               
          </li>
     )
}