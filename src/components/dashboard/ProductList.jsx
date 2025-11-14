'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Loader2, Trash2, Edit } from 'lucide-react';

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null); // Tracks the itemId being deleted

  // Function to fetch products
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/products');
      if (!res.ok) {
        throw new Error('Failed to fetch products from API.');
      }
      const data = await res.json();
      
      // Data should contain Mongoose documents
      setItems(data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (itemId) => {
    // Using window.confirm as a temporary UI solution instead of the forbidden confirm()
    if (!window.confirm(`Are you sure you want to delete product ID: ${itemId}?`)) {
        return;
    }
    
    setIsDeleting(itemId);
    try {
      // Use the correct itemId in the path
      const res = await fetch(`/api/products/${itemId}`, { method: 'DELETE' });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to delete product.');
      }

      // Filter out the deleted item using its unique itemId
      setItems((prev) => prev.filter((i) => i.itemId !== itemId));
    } catch (err) {
      console.error("Delete Error:", err);
      setError(`Delete Failed: ${err.message}`);
    } finally {
      setIsDeleting(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="w-8 h-8 animate-spin text-green-600 mr-2" />
        <p className="text-lg text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <p className="font-bold">Error:</p>
        <p>{error}</p>
        <button onClick={fetchProducts} className="mt-2 text-sm text-red-500 hover:underline">Try Reloading</button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-lg shadow-inner">
        <p className="text-xl text-gray-600">No products found. Add a new product to get started!</p>
        <Link href="/dashboard/add-product" className="mt-4 inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
            Add New Product
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        // Key and Identity MUST use the Mongoose field 'itemId'
        <div key={item.itemId} className="bg-white rounded-xl border border-gray-200 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          {/* Main Image */}
          <div className="h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
            <img
              // Use the Mongoose field 'imageSource' (the first image URL)
              src={item.imageSource || 'https://placehold.co/150x150/f9fafb/374151?text=No+Image'}
              className="w-full h-full object-contain"
              alt={item.productName}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/f9fafb/374151?text=Load+Error' }}
            />
          </div>
          
          {/* Product Details */}
          <h3 className="mt-4 font-extrabold text-xl text-gray-900">{item.productName}</h3>
          <p className="text-sm text-green-700 font-semibold mb-1">{item.price}</p>
          <p className="text-xs text-gray-500 truncate">{item.subTitle}</p>
          <p className="text-xs text-gray-400 mt-1">ID: {item.itemId}</p>

          {/* Actions */}
          <div className="mt-4 flex gap-3 border-t pt-4">
            <Link
              // Use the Mongoose field 'itemId' for the edit path
              href={`/dashboard/products/${item.itemId}`}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition shadow-md"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Link>
            
            <button
              onClick={() => handleDelete(item.itemId)}
              disabled={isDeleting === item.itemId}
              className={`flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition ${
                isDeleting === item.itemId 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'border border-red-500 text-red-600 hover:bg-red-50'
              }`}
            >
              {isDeleting === item.itemId ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4 mr-2" />
              )}
              {isDeleting === item.itemId ? 'Deleting' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}