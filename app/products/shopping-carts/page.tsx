import { ChevronLeft, XIcon, Minus , MoreHorizontal, Plus, Tag, ArrowBigRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
const CartPage = () => {
  return (
    <div><div className="bg-background-light dark:bg-background-dark font-display text-[#0e1b13] dark:text-white antialiased">
<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
<div className="flex items-center p-4 justify-between max-w-xl mx-auto">
<div className="flex items-center gap-4"><Link href={'/'}><ChevronLeft/></Link>
<h2 className="text-lg font-bold leading-tight tracking-tight">Your Cart (0 items)</h2>
</div>
<div className="flex items-center gap-3">
<MoreHorizontal/></div>
</div>
</header>
<main className="max-w-xl mx-auto pb-64">

<div className="px-4 mt-6">
<div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<Tag className=''/><div>
<p className="font-bold text-sm">Promo Code</p>
<p className="text-xs text-gray-500">Apply a discount code</p>
</div>
</div>
<button className="text-primary font-bold text-sm">Apply</button>
</div>
</div>
</main>
<div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 p-6 z-50">
<div className="max-w-xl mx-auto space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-gray-500 text-sm">
<span>Subtotal</span>
<span className="font-medium text-gray-900 dark:text-white">N0.00</span>
</div>
<div className="flex justify-between text-gray-500 text-sm">
<span>Shipping</span>
<span className="font-medium text-primary uppercase text-xs">Free</span>
</div>
<div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-50 dark:border-gray-800">
<span className="font-bold text-lg">Total</span>
<span className="font-bold text-xl text-primary">N0.00</span>
</div>
</div>
<button disabled={true} className="disabled:bg-gray-200 w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            Proceed to Checkout
<ArrowBigRight/>
</button>
</div>
</div>

</div></div>
  )
}

export default CartPage