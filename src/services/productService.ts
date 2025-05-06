
import { Product, ProductsResponse } from "@/types/product";

// Mock data for our application
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Laptop",
    price: 1299.99,
    description: "High-performance laptop with the latest processor, 16GB RAM, and 512GB SSD storage. Perfect for professionals and gamers alike.",
    brand: "TechPro",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise-cancelling wireless headphones with 30-hour battery life. Features comfortable ear cups and premium sound quality.",
    brand: "AudioPlus",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    price: 349.99,
    description: "Advanced smartwatch with health monitoring, GPS, and water resistance. Compatible with iOS and Android devices.",
    brand: "FitTech",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 4,
    name: "Coffee Maker Deluxe",
    price: 129.99,
    description: "Programmable coffee maker with built-in grinder. Makes up to 12 cups and features multiple brew strength options.",
    brand: "HomeEssentials",
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 249.99,
    description: "Adjustable office chair with lumbar support and breathable mesh back. Designed for all-day comfort.",
    brand: "ComfortWork",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "Fast-charging wireless pad compatible with all Qi-enabled devices. Sleek and compact design.",
    brand: "PowerUp",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 7,
    name: "Fitness Tracker",
    price: 79.99,
    description: "Waterproof fitness tracker with heart rate monitoring, step counter, and sleep analysis. Battery lasts up to 7 days.",
    brand: "FitTech",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1576243345583-4d58f7155e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 8,
    name: "Smart Home Speaker",
    price: 129.99,
    description: "Voice-controlled smart speaker with premium sound quality. Controls smart home devices and plays music from popular streaming services.",
    brand: "SmartLife",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  }
];

// Simulate API delays
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const searchProducts = async (searchTerm: string): Promise<ProductsResponse> => {
  // Simulate API call
  await delay(800);
  
  // Filter products based on search term
  const filteredProducts = searchTerm 
    ? mockProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mockProducts;
  
  return {
    products: filteredProducts,
    total: filteredProducts.length
  };
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  // Simulate API call
  await delay(500);
  
  // Find product by ID
  return mockProducts.find(product => product.id === id);
};
