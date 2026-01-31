import { Heart, ShoppingCart } from "lucide-react";

type Prods={
    image:number
    category:string
    name:string

}

export default function ProductCard({prods}:{prods:Prods}){
const PRODUCT_IMG_DICT:{[key:number]:string} ={
    1:"/avocado.png",
    2:"fruits.png",
    3:"broccoli.png",
    4:"jar.png",
    5:"/grapes.jpg",
    6:"/unnamed.jpg"
}
console.log(prods)
return(
<div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
<div className="relative aspect-square md:aspect-auto">
<img src={PRODUCT_IMG_DICT[prods.image]} className="w-full"/>
<div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-[10px] font-bold text-white uppercase tracking-wider">New</div>
<button className="absolute top-2 right-2 size-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-800">
<Heart className=""/>
</button>
</div>
<div className="p-3">
<p className="text-[11px] text-primary font-bold uppercase tracking-tighter">{prods.category}</p>
<h3 className="text-sm font-semibold text-slate-800 dark:text-white line-clamp-1">Organic Hass Avocados</h3>
<div className="mt-2 flex items-center justify-between">
<span className="text-base font-bold text-slate-900 dark:text-white">$12.50</span>
<button className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<ShoppingCart/>
</button>
</div>
</div>
</div>
)
}