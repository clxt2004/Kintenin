

export const TextArea = ({name, placeholder}) =>{
     return (
          <div>
               <label htmlFor={name} className="font-bold">{name}</label>
               <textarea 
                         name={name}
                         className="w-full border outline-none py-3 px-4 border-gray-300 rounded focus:ring-4 ring-orange-200 transition-all"
                         id={name} placeholder={placeholder}></textarea>
          </div>
     )
}