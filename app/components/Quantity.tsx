'use client';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onQuantityChange?: (quantity: number) => void;
}

export default function QuantitySelector({ 
  initialQuantity = 1, 
  min = 1, 
  max = 99,
  onQuantityChange 
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onQuantityChange?.(value);
    }
  };

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
        Select quantity
      </h3>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          aria-label="Decrease quantity"
        >
          <Minus className="w-5 h-5" />
        </button>
        
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="w-20 h-10 text-center text-lg font-bold border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:outline-none"
        />
        
        <button
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          aria-label="Increase quantity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}