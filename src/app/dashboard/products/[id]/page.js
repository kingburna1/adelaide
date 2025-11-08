// src/app/dashboard/products/[id]/page.jsx
'use client';
import React, { useEffect, useState } from 'react';
import ProductForm from '@/components/dashboard/ProductForm';

export default function EditPage({ params }) {
  const { id } = params;
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`).then(r => r.json()).then(setInitial);
  }, [id]);

  if (!initial) return <div>Loading...</div>;
  return <ProductForm initial={initial} />;
}
