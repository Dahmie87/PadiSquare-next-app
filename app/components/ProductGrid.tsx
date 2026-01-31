'use client';
import React from 'react'
import { useState } from 'react';

import ProductCard from './ProductCard'
import Link from 'next/link'
import { ChevronLeft,ChevronRight } from 'lucide-react'
function ProductGrid({products}:any) {

const productsArr= Object.values(products)
const PRODUCTS_PER_PAGE = 4
  const [currentPage, setCurrentPage] = useState(1)

  // Total pages
  const totalPages = Math.ceil(productsArr.length / PRODUCTS_PER_PAGE)

   const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const paginatedProducts = productsArr.slice(startIndex, endIndex)


  return (
    <div><div className="grid grid-cols-2 gap-10 p-8">
  {paginatedProducts.map((product)=>(<Link href={'/products/1'}><ProductCard prods={product}/>
</Link>))}
</div>
{/* <!-- Pagination --> */}
<div className="flex items-center justify-center gap-2 mt-6 px-4">
<button className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300">
<ChevronLeft/>
</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300">2</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300">3</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300">
<ChevronRight/>
</button>
</div></div>
  )
}

export default ProductGrid