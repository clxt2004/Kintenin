

export const Input = ({name, placeholder, type})=>{
     return (
          <div>
               <label htmlFor={name} className="font-bold">{name}</label>
               <input id={name} type={type?type:"text"} className="w-full border outline-none py-3 px-4 border-gray-300 rounded focus:ring-4 ring-orange-200 transition-all" name={name} placeholder={placeholder} />
          </div>
     )
}