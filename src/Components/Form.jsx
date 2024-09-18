import { Send } from "lucide-react"
import { Input } from "./Input"
import { TextArea } from "./TextArea"


export const Form = ()=>{
     return (
          <form action="" className="flex flex-col gap-2">
               <Input name="Email" type="email" placeholder="exemple@gmail.com" />
               <TextArea name="Message" placeholder="Ecriver votre message ici" />
               <button className="rounded w-full py-4 bg-black text-white font-bold justify-center flex gap-2">
                         Envoyer <Send />
               </button>
          </form>
     )
}