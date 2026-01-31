'use client';
import React from 'react'
import { useState } from 'react';

import ProductCard from './ProductCard'
import Link from 'next/link'
import { ChevronLeft,ChevronRight } from 'lucide-react'

type Prods={
    id: string | number
    image:number
    category:string
    name:string
}


function ProductGrid({products}:{products:Record<string, Prods>}) {

const productsArr= Object.values(products) as Prods[]
const PRODUCTS_PER_PAGE = 4
  const [currentPage, setCurrentPage] = useState(1)

  // Total pages
  const totalPages = Math.ceil(productsArr.length / PRODUCTS_PER_PAGE)

   const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const paginatedProducts = productsArr.slice(startIndex, endIndex)


  return (
    <div><div className="grid grid-cols-2 gap-10 p-8">
  {paginatedProducts.map((product)=>(<Link key={product.id} href={'/products/1'}><ProductCard prods={product}/>
</Link>))}
</div>
{/* <!-- Pagination --> */}
<div className="flex items-center justify-center gap-2 mt-6 px-4">
<button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-40"
        >
          <ChevronLeft />
        </button>
{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`size-10 flex items-center justify-center rounded-lg font-bold
              ${currentPage === page
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-40"
        >
          <ChevronRight />
        </button>
</div></div>
  )
}

export default ProductGrid