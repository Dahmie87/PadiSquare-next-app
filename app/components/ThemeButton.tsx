"use client";
import { Lightbulb } from "lucide-react";
export default function ThemeButton(){
    return(<button 
 onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
className="p-2 text-slate-600 dark:text-slate-300">
<Lightbulb/>
</button>)
}