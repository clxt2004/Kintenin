import { Contact } from "lucide-react"
import { Form } from "./Form"



export const NousContacter = ()=>{
     return (
          <div className="container mx-auto my-20">
                <h2  className="text-4xl sm:text-5xl font-bold text-orange-500 italic justify-center items-center gap-2 my-10 flex"><Contact size="50" /> NOUS CONTACTER</h2>
               <Form />
          </div>
     )
}