
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getProductById } from '@/services/productService';
import { Product } from '@/types/product';
import axios from 'axios';
const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = axios.get('http://localhost:8181/products/'+id).then(res => {
        setProduct(res.data);
        console.log(res.data)
        setLoading(false)
      }).catch(err =>{
        console.log(err)
        setLoading(true)
      });
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to Search</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-primary hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} />
          <span>Back to Search</span>
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 items-center flex justify-center">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="h-[70vh] object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="mb-2 text-sm font-medium text-gray-600">
                {product.category} / {product.brand}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
              <div className="text-xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </div>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </div>
                <div>
                  <span className="font-semibold">Category:</span> {product.category}
                </div>
                <div>
                  <span className="font-semibold">Product ID:</span> {product.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
