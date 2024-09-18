import clsx from "clsx"

export const Title = ({children, classname})=>{
     return (
          <h2 className={clsx('text-4xl','md:text-5xl', 'italic', 'uppercase', 'font-bold', classname)}>
               {children}
          </h2>
     )
}