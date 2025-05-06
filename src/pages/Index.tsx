
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import Navbar from '@/components/Navbar';
import { searchProducts } from '@/services/productService';
import { Product } from '@/types/product';
import axios from 'axios';

const Index: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchProducts = () => axios.get('http://localhost:8181/products',{
      params: { search: query }
    })
    .then(response => {
      console.log(response.data); // Array of posts
      setProducts(response.data); // ← THIS WAS MISSING
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      toast.error('Failed to load products');
      setLoading(false);
    });
  
    
    fetchProducts();
  }, [query]);

  const handleSearch = (term: string) => {
    if (term) {
      setSearchParams({ q: term });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">Find Your Perfect Product</h1>
          <SearchBar onSearch={handleSearch} initialValue={query} />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {products.length > 0 
                ? `Found ${products.length} product${products.length === 1 ? '' : 's'}${query ? ` for "${query}"` : ''}`
                : query 
                  ? `No products found for "${query}"`
                  : 'All products'
              }
            </div>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products found.</p>
                {query && (
                  <button 
                    onClick={() => handleSearch('')}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear search and show all products
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
