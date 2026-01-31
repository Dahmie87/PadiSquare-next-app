import Link from "next/link";
import { ChevronDown, ChevronLeft, Expand, MoreVertical, Search, ShoppingBasket, ShoppingCart, Star } from "lucide-react";

export default async function ProductDetailsPage({params}:{params:{id:string}}){
    const product_id = params.id

    const res = await fetch(`http://localhost:3000/api/vendors/1/`)
    const vendor= await  res.json()
    const product=vendor.products[product_id]

    return(<div className="bg-background-light dark:bg-background-dark font-display text-[#0e1b13] dark:text-white antialiased">
{/* <!-- Top Navigation Bar --> */}
<header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
<div className="flex items-center p-4 justify-between max-w-xl mx-auto">
<Link href={'/'} className="flex items-center gap-4">
<ChevronLeft/>
<h2 className="text-lg font-bold leading-tight tracking-tight"> {vendor.name}</h2>
</Link>
<div className="flex items-center gap-3">
<Search/>
<div className="relative">
<ShoppingBasket/>
<span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
</div>
</div>
</div>
</header>
<main className="max-w-xl mx-auto pb-24">
{/* <!-- Image Gallery Section --> */}
<div className="px-4 py-3">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 rounded-xl min-h-96 relative shadow-sm" data-alt="Professional studio shot of a premium organic cotton hoodie" >
<div className="flex justify-center gap-2 p-5">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
<div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
<div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
</div>
</div>
{/* <!-- Thumbnails --> */}
<div className="flex gap-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
<div className="w-16 h-16 rounded-lg bg-cover border-2 border-primary shrink-0" data-alt="Product front view" 
></div>
<div className="w-16 h-16 rounded-lg bg-cover bg-gray-200 shrink-0" data-alt="Product back view" ></div>
<div className="w-16 h-16 rounded-lg bg-cover bg-gray-200 shrink-0" data-alt="Fabric detail view" ></div>
<div className="w-16 h-16 rounded-lg bg-cover bg-gray-200 shrink-0" data-alt="Lifestyle shot" ></div>
</div>
</div>
{/* <!-- Product Header Info --> */}
<div className="px-4 pt-2">
<div className="flex gap-2 mb-3">
<span className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-3 py-1 text-primary text-xs font-bold uppercase tracking-wider">
                    In Stock
                </span>
<span className="inline-flex items-center justify-center rounded-lg bg-blue-500/10 px-3 py-1 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                    New Arrival
                </span>
</div>
<h1 className="text-[28px] font-bold leading-tight mb-2">Sustainable Fleece Hoodie</h1>
<div className="flex items-center justify-between mb-4">
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-primary">$89.00</span>
<span className="text-gray-400 line-through text-sm">$110.00</span>
</div>
<div className="flex items-center gap-1">
<Star className="material-symbols-outlined text-yellow-400 filled-icon w-5"/>
<span className="font-bold text-sm">4.8</span>
<span className="text-gray-500 text-xs">(128 reviews)</span>
</div>
</div>
<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Handcrafted using 100% recycled organic cotton. This premium hoodie offers a modern fit with unmatched comfort for all-day wear.
            </p>
</div>
{/* <!-- Variant Selection --> */}
<div className="px-4 pt-8">
<h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Select Color</h3>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
<div className="w-7 h-7 rounded-full bg-[#1a3a3a]"></div>
</div>
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
<div className="w-7 h-7 rounded-full bg-[#e5e7eb]"></div>
</div>
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
<div className="w-7 h-7 rounded-full bg-[#b45309]"></div>
</div>
</div>
<h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-8 mb-4">Select Size</h3>
<div className="flex gap-3 flex-wrap">
<button className="px-5 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-medium text-sm hover:border-primary transition-colors">S</button>
<button className="px-5 py-2 rounded-lg border-2 border-primary bg-primary/5 font-bold text-sm text-primary">M</button>
<button className="px-5 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-medium text-sm hover:border-primary transition-colors">L</button>
<button className="px-5 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-medium text-sm hover:border-primary transition-colors">XL</button>
<button className="px-5 py-2 rounded-lg border border-gray-100 dark:border-gray-800 font-medium text-sm text-gray-300 dark:text-gray-600 cursor-not-allowed line-through">XXL</button>
</div>
</div>
{/* <!-- Accordion Sections --> */}
<div className="px-4 mt-8 space-y-2">
<div className="border-t border-gray-100 dark:border-gray-800 py-4 flex items-center justify-between cursor-pointer">
<span className="font-bold">Product Details</span>
<ChevronDown/>
</div>
<div className="border-t border-gray-100 dark:border-gray-800 py-4 flex items-center justify-between cursor-pointer">
<span className="font-bold">Shipping Info</span>
<ChevronDown/>
</div>
</div>
{/* <!-- Related Products --> */}
<div className="mt-8">
<h3 className="px-4 text-lg font-bold mb-4">You may also like</h3>
<div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
{/* <!-- Product Card 1 --> */}
<div className="w-40 shrink-0">
<div className="h-48 rounded-xl bg-gray-100 dark:bg-gray-800 mb-2 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Related product white tshirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg82tB41HAXzsv6rDo_r5xdzeQ2J2-mWminE70ExE57C4f35YuCzDFs0umfa1UUG2zkg4XdolhxcNcDxYT5nNcgZVfK2MLuSEkWR5Vs_pVmKLGs7gysXev0X3fV4cjme9jCBGmoDImInLUp_oKj_6t0Qkzi69DyG8c6E44KcJBC1w2Nc9PqAvQnNk-M_qnGloO_XxFCLvDeIVFHUSSjgekG3-qQEOWZvnJpCRVrhOK3PwsPHyllwZuohTqMuAqvnLpavOjHmTAd3Si"/>
</div>
<p className="font-bold text-sm truncate">Basic Tee</p>
<p className="text-primary font-bold text-sm">$32.00</p>
</div>
{/* <!-- Product Card 2 --> */}
<div className="w-40 shrink-0">
<div className="h-48 rounded-xl bg-gray-100 dark:bg-gray-800 mb-2 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Related product puffer jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiVkpFBRWv5Dg7Df2FD0K9h2ztvJwECVzUnn6fuGzvHRc3w-xKb1-KAXF-QihehoJ9D7AGptPDKM4ELWJLSWaxqiqAQYUqS7tEx4MZYIDExG_X-GGsKfYERahi8acGwCdrXT1HVsQFi0Pn_ZjXJ09V4ldzwkdliVZ9pFuXNQhJ-Uurg5UPMw2qAWKtEIwQusUQ8BPrkbj1WicjWQbpCh9xzVeQ_IWECksQrHRvvlh14v221fNFBOcrrU4NIwbtVlulDPhSrPWzJjnW"/>
</div>
<p className="font-bold text-sm truncate">Eco Puffer Jacket</p>
<p className="text-primary font-bold text-sm">$145.00</p>
</div>
{/* <!-- Product Card 3 --> */}
<div className="w-40 shrink-0">
<div className="h-48 rounded-xl bg-gray-100 dark:bg-gray-800 mb-2 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Related product sneakers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8rTxvts7FCzUA0ixOI7XXsaHyek22OqErvMlqoP27u28kH7AYOuv9EtaR5pGRhXrEKzH9PP9Qr4DRx014h-g3TINqfwiAdZyK8sW4jPZRY-niht7w2tE6hbni0jh3cbi3cwOgDzJ2Xf4rvhUlUyP-MIccNWGi4IIBJjmnoVWBqe6KhLwx-XrKFaPkTWc_4Nsr7cZ8CETwLuEn-flD0TXSa1gZHER_HpnYTy-rm-c506vime0KZ8b3is-xay5_sUvyLIrAIyIW5Kj"/>
</div>
<p className="font-bold text-sm truncate">Recycled Sneakers</p>
<p className="text-primary font-bold text-sm">$120.00</p>
</div>
</div>
</div>
</main>
{/* <!-- Sticky Bottom Actions --> */}
<div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 p-4 z-50">
<div className="max-w-xl mx-auto flex gap-3">
<button className="flex-1 border-2 border-primary text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
<ShoppingCart/>
                Add to Cart
            </button>
<button className="flex-[1.5] bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                Buy Now
            </button>
</div>
</div>
</div>)
}