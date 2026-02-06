'use client';
import React from 'react'
import { useState, useMemo } from 'react';

import ProductCard from './ProductCard'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react'

type Prods = {
    id: number
    image: number
    category: string
    name: string
    price: string
    createdAt?: string  // Add these if they exist in your data
    sales?: number
}

function ProductGrid({products}: {products: Record<string, Prods>}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('newest')
  
  const PRODUCTS_PER_PAGE = 4

  // Sort products
  const sortedProducts = useMemo(() => {
    const productsArr = Object.values(products) as Prods[]
    
    switch(sortBy) {
      case 'newest':
        return [...productsArr].sort((a, b) => 
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
        )
      case 'oldest':
        return [...productsArr].sort((a, b) => 
          new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime()
        )
      case 'popular':
        return [...productsArr].sort((a, b) => (b.sales || 0) - (a.sales || 0))
      case 'price-low':
        return [...productsArr].sort((a, b) => 
          parseFloat(a.price) - parseFloat(b.price)
        )
      case 'price-high':
        return [...productsArr].sort((a, b) => 
          parseFloat(b.price) - parseFloat(a.price)
        )
      default:
        return productsArr
    }
  }, [products, sortBy])

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex)

  // Reset to page 1 when sort changes
  const handleSortChange = (newSort: string) => {
    setSortBy(newSort)
    setCurrentPage(1)
  }

  return (
    <div>
      {/* Control Bar */}
      <div className="flex items-center gap-4 bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-100 dark:border-gray-800 sticky top-[109px] z-40">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium flex-1">
          {sortedProducts.length} products
        </p>
        <div className="shrink-0">
          <select 
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="flex items-center gap-1 cursor-pointer rounded-lg h-9 px-3 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200 text-xs font-semibold"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        <button className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg size-9">
          <Filter className="w-5"/>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-10 p-8">
        {paginatedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard prods={product}/>
          </Link>
        ))}
      </div>

      {/* Pagination */}
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
      </div>
    </div>
  )
}

export default ProductGrid