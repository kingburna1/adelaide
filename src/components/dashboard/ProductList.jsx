'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg border p-4 shadow-sm">
          <div className="h-40 bg-gray-100 rounded overflow-hidden">
            <img
              src={item.images?.[0] || '/placeholder.png'}
              className="w-full h-full object-cover"
              alt={item.name}
            />
          </div>
          <h3 className="mt-3 font-semibold text-green-700">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.subtitle}</p>
          <div className="mt-3 flex gap-2">
            <Link
              href={`/dashboard/products/${item.id}`}
              className="px-3 py-1 bg-green-700 text-white rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 border rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
