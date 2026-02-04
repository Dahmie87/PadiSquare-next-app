import { ChevronLeft, XIcon, Minus, MoreHorizontal, Plus, Tag, ArrowBigRight } from 'lucide-react'
import React from 'react'

const CartPage = () => {
  return (
    <div><div className="bg-background-light dark:bg-background-dark font-display text-[#0e1b13] dark:text-white antialiased">
<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
<div className="flex items-center p-4 justify-between max-w-xl mx-auto">
<div className="flex items-center gap-4">
<ChevronLeft/><h2 className="text-lg font-bold leading-tight tracking-tight">Your Cart (3 items)</h2>
</div>
<div className="flex items-center gap-3">
<MoreHorizontal/></div>
</div>
</header>
<main className="max-w-xl mx-auto pb-64">
<div className="px-4 py-4 space-y-4">
<div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex gap-4">
<div className="w-24 h-24 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0">
<img alt="Sustainable Fleece Hoodie" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBVP5nvnTjv3Tbkw4IM8jviKOBBsrKv5MeMFZIUKQhVX84_snsF7Uxs8r1iBR9Rse6o-J4EHrCgA_AQKaKNDYJdh7AFs7QfXqBD6XtzCkaWYLNGen9igcROI2tFhK694WhkIW4lzzISge6aSTkvRGeGtxmTWn7EigPZRgC3nn4OJe0wJfWiyD5QxjBI2Cka10MPng5xhVF9yEPB7oMXMz3jApgQAAx84KHZ-XR_T_qu9Fyzg3F9HDnK4qSHJdL2kasMrHf_coFgLVl"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-bold text-base leading-tight">Sustainable Fleece Hoodie</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors">
<XIcon/></button>
</div>
<p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-medium">Size: M • Color: Forest Green</p>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-lg font-bold text-primary">$89.00</span>
<div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Minus/></button>
<span className="w-8 text-center font-bold text-sm">1</span>
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Plus/></button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex gap-4">
<div className="w-24 h-24 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0">
<img alt="Eco Puffer Jacket" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiVkpFBRWv5Dg7Df2FD0K9h2ztvJwECVzUnn6fuGzvHRc3w-xKb1-KAXF-QihehoJ9D7AGptPDKM4ELWJLSWaxqiqAQYUqS7tEx4MZYIDExG_X-GGsKfYERahi8acGwCdrXT1HVsQFi0Pn_ZjXJ09V4ldzwkdliVZ9pFuXNQhJ-Uurg5UPMw2qAWKtEIwQusUQ8BPrkbj1WicjWQbpCh9xzVeQ_IWECksQrHRvvlh14v221fNFBOcrrU4NIwbtVlulDPhSrPWzJjnW"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-bold text-base leading-tight">Eco Puffer Jacket</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors">
<XIcon/></button>
</div>
<p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-medium">Size: L • Color: Midnight</p>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-lg font-bold text-primary">$145.00</span>
<div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Minus/></button>
<span className="w-8 text-center font-bold text-sm">1</span>
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Plus/></button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex gap-4">
<div className="w-24 h-24 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0">
<img alt="Basic Tee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg82tB41HAXzsv6rDo_r5xdzeQ2J2-mWminE70ExE57C4f35YuCzDFs0umfa1UUG2zkg4XdolhxcNcDxYT5nNcgZVfK2MLuSEkWR5Vs_pVmKLGs7gysXev0X3fV4cjme9jCBGmoDImInLUp_oKj_6t0Qkzi69DyG8c6E44KcJBC1w2Nc9PqAvQnNk-M_qnGloO_XxFCLvDeIVFHUSSjgekG3-qQEOWZvnJpCRVrhOK3PwsPHyllwZuohTqMuAqvnLpavOjHmTAd3Si"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-bold text-base leading-tight">Basic Tee</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors">
<XIcon/></button>
</div>
<p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-medium">Size: M • Color: White</p>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-lg font-bold text-primary">$32.00</span>
<div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Minus/></button>
<span className="w-8 text-center font-bold text-sm">1</span>
<button className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400">
<Plus/></button>
</div>
</div>
</div>
</div>
</div>
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
<span className="font-medium text-gray-900 dark:text-white">$266.00</span>
</div>
<div className="flex justify-between text-gray-500 text-sm">
<span>Shipping</span>
<span className="font-medium text-primary uppercase text-xs">Free</span>
</div>
<div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-50 dark:border-gray-800">
<span className="font-bold text-lg">Total</span>
<span className="font-bold text-xl text-primary">$266.00</span>
</div>
</div>
<button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            Proceed to Checkout
<ArrowBigRight/>
</button>
</div>
</div>

</div></div>
  )
}

export default CartPage