import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display md:p-20">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center p-4 justify-between gap-3">
<div className="flex shrink-0 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-100 dark:border-gray-700" data-alt="Modern organic store minimalist leaf logo"
></div>
</div>
<div className="flex-1">
<h1 className="text-[#0e1b13] dark:text-white text-base font-bold leading-tight tracking-tight">GreenLeaf Organics</h1>
<p className="text-xs text-primary font-medium">Verified Vendor</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
{/* <!-- Search Bar in Header --> */}
<div className="px-4 pb-3">
<label className="flex flex-col w-full">
<div className="flex w-full items-stretch rounded-lg h-10 bg-gray-100 dark:bg-gray-800">
<div className="text-primary flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-gray-500 px-3" placeholder="Search in GreenLeaf Organics"/>
</div>
</label>
</div>
      </header>

<main className="pb-12">
{/* <!-- Hero Banner --> */}
<div className="@container">
<div className="p-0">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden min-h-[340px] relative" data-alt="Lush green organic farm landscape hero image" >
<div className="p-6 space-y-3">
<span className="inline-block px-2 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-widest">Limited Offer</span>
<h2 className="text-white text-3xl font-bold leading-tight">Fresh Summer <br/>Harvest 2024</h2>
<p className="text-white/80 text-sm max-w-[280px]">Experience the pure taste of nature with our newly arrived organic seasonal produce.</p>
<div className="pt-2">
<button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:px-16 transition-transform active:scale-95 shadow-lg shadow-primary/20">
<span>Shop Now</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Control Bar --> */}
<div className="flex items-center gap-4 bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-100 dark:border-gray-800 sticky top-[109px] z-40">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium flex-1">124 Products</p>
<div className="shrink-0">
<button className="flex items-center gap-1 cursor-pointer rounded-lg h-9 px-3 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 text-xs font-semibold">
<span className="material-symbols-outlined text-[18px]">swap_vert</span>
<span>Newest First</span>
</button>
</div>
<button className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg size-9">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
{/* <!-- Product Grid --> */}
<div className="grid grid-cols-2 gap-10 p-8">
<ProductCard/>
</div>
{/* <!-- Pagination --> */}
<div className="flex items-center justify-center gap-2 mt-6 px-4">
<button className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300">2</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300">3</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</main>

{/* <button
            className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 z-50"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            
          >
            
            Night
          </button> */}
    </div>
  );
}
