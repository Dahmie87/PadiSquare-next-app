import { Heart, ShoppingCart } from "lucide-react";
import avocado from "../assets/avocado.png"

export default function ProductCard({}){
const PODUCT_IMG_DICT={

}
return(
<div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
<div className="relative aspect-square md:aspect-auto">
<img src="/avocado.png" className="w-full"/>
<div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-[10px] font-bold text-white uppercase tracking-wider">New</div>
<button className="absolute top-2 right-2 size-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-800">
<Heart/>
</button>
</div>
<div className="p-3">
<p className="text-[11px] text-primary font-bold uppercase tracking-tighter">Fruits</p>
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