import { Contact } from "lucide-react"
import { Form } from "./Form"



export const NousContacter = ()=>{
     const sendEmail = (e) =>{
          e.preventDefault()
          const fData =new FormData(e.currentTarget)
          const email = fData.get('Email');
          console.log("ok");
          const subject = 'Prendre des information';
          const body = fData.get("Message");
          window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
     return (
          <div className="container mx-auto my-20" id="contact">
                <h2  className="text-4xl sm:text-5xl font-bold text-orange-500 italic justify-center items-center gap-2 my-10 flex"><Contact size="50" /> NOUS CONTACTER</h2>
               <Form />
          </div>
     )
}