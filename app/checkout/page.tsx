import Link from 'next/link'
import { ArrowRight, CheckCircleIcon, ChevronLeft, Plus } from 'lucide-react'
import React from 'react'

const CheckOut = () => {
  return (
    <div><div className="bg-background-light dark:bg-background-dark font-display text-[#0e1b13] dark:text-white antialiased">
<header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
<div className="flex items-center p-4 justify-between max-w-xl mx-auto">
<div className="flex items-center gap-4">
<Link href={'/'}>
<ChevronLeft/>
</Link>
<h2 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">Checkout</h2>
</div>
<div className="w-6"></div> 
</div>
</header>
<main className="max-w-xl mx-auto pb-40">
<div className="px-6 py-8">
<div className="flex items-center justify-between relative">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-primary -translate-y-1/2 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-primary">Shipping</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-primary">Payment</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-400 flex items-center justify-center text-sm font-bold">3</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Review</span>
</div>
</div>
</div>
<section className="px-4 mb-8">
<h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Shipping Address</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-600 dark:text-gray-400 ml-1">First Name</label>
<input className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-600 dark:text-gray-400 ml-1">Last Name</label>
<input className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-600 dark:text-gray-400 ml-1">Street Address</label>
<input className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="123 Eco Avenue" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-600 dark:text-gray-400 ml-1">City</label>
<input className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="San Francisco" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-gray-600 dark:text-gray-400 ml-1">Zip Code</label>
<input className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="94103" type="text"/>
</div>
</div>
</div>
</section>
<section className="px-4 mb-8">
<h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Payment Method</h3>
<div className="grid grid-cols-2 gap-3 mb-6">
<button className="bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl flex items-center justify-center font-bold">
<span className="mr-1">Apple</span>Pay
            </button>
<button className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 py-3 rounded-xl flex items-center justify-center font-bold">
<span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> Pay
            </button>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
<span className="text-[10px] font-bold text-gray-400 uppercase">Or Pay with Card</span>
<div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
</div>
<div className="space-y-3">
<div className="p-4 bg-primary/5 border-2 border-primary rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-7 bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
<img alt="Mastercard" className="h-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Q2zWBRT5GOxfBJkpIGKFrloSeW6jNYEqNcZc09uIhZ5wYO2NYao2W-4EvG22Mi7wWlvwSBcTgpp8e1jTdQBlrubA93Cuygrc0T_32nKa5KroSlQLyRED_MrlRx6WWc7Cx1zJVw0Bj7LviT2NgwnsdotI_MoWqsY5_6U1fgC3sinTj7JGf28OIF1351m7He49cm4gicwrsV07IfURnBqesrjPnGvcWH3v3wqCZEASrhwfcfJqaZBVD6nXy9-lzU5TYuxmvqmPVKfU"/>
</div>
<div>
<p className="text-sm font-bold">Mastercard •••• 4242</p>
<p className="text-[10px] text-gray-500 font-medium">Expires 12/25</p>
</div>
</div>
<CheckCircleIcon className=" text-primary filled-icon "/>
</div>
<div className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-4 opacity-70">
<div className="w-10 h-7 bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
<img alt="Visa" className="h-2.5 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJZmRA_Ky_YgWrQUhB_MLLxhzhBdc4XJ9yGmHv26j8RNIbPjKp7imQcNswe-YUtvRhQsNiFqRPuc032IdPUM8xIiJP0oolUW1873MzXqnlVon7gAQoolDxWLNfBIKLLWoQlx_KSiPnkWe0yU-nop7qnrafbYbsLK2HyI8IA0tcyH-Q2dWJyPqAS5EMWcRAZU6Fac3Jf_vpVMHu5Gq1_whNkT5cxnJL67m2CR9zKKbQ0Re0gMTNPm1JDEPO8UYI98Yj_5nmN-ogwRY"/>
</div>
<div>
<p className="text-sm font-bold">Visa •••• 9876</p>
<p className="text-[10px] text-gray-500 font-medium">Expires 08/24</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700"></div>
</div>
<button className="w-full py-4 flex items-center justify-center gap-2 text-primary font-bold text-sm border-2 border-dashed border-primary/20 rounded-2xl hover:bg-primary/5 transition-colors">
<Plus/>                Add New Card
            </button>
</div>
</section>
<section className="px-4 mb-10">
<div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
<h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Order Summary</h3>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-gray-500">Subtotal</span>
<span className="font-semibold">$89.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Shipping</span>
<span className="font-semibold">$5.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Estimated Tax</span>
<span className="font-semibold">$7.12</span>
</div>
<div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
<div className="flex justify-between items-center">
<span className="font-bold">Total</span>
<span className="text-xl font-bold text-primary">$101.12</span>
</div>
</div>
</div>
</section>
</main>
<div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 p-4 z-50">
<div className="max-w-xl mx-auto">
<button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
            Place Order • $101.12
<ArrowRight/>
</button>
<p className="text-[10px] text-center text-gray-400 mt-3 px-4">
            By placing your order, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
        </p>
</div>
</div>

</div></div>
  )
}

export default CheckOut