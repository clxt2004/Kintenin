export const Menus = ()=>{
     return (
          <div className="pt-5 pb-20 px-10 bg-orange-500 my-20">
               <h2  className="text-4xl text-center md:text-start md:text-5xl font-bold text-white italic my-10 ">NOS MENUS</h2>
               <div className="grid md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
                    <img className="md:hover:scale-110 transition-all cursor-pointer w-5/6 h-96 md:w-80  md:h-80 rounded" src="../public/plat1.jpeg" alt="" />
                    <img className="md:hover:scale-110 transition-all cursor-pointer w-5/6 h-96 md:w-80  md:h-80 rounded" src="../public/plat2.jpeg" alt="" />
                    <img className="md:hover:scale-110 transition-all cursor-pointer w-5/6 h-96 md:w-80  md:h-80 rounded" src="../public/plat3.jpeg" alt="" />
                    <img className="md:hover:scale-110 transition-all cursor-pointer w-5/6 h-96 md:w-80  md:h-80 rounded" src="../public/plat4.jpeg" alt="" />
               </div>
          </div>
     )
}