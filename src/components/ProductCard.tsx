
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, brand, category, imageUrl } = product;

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{name}</h3>
          <div className="text-sm text-gray-600 mb-1">{brand}</div>
          <div className="text-xs text-gray-500 mb-2">{category}</div>
          <div className="mt-auto">
            <div className="text-primary font-bold">${price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
