// src/components/dashboard/ProductForm.jsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductForm({ initial = null }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: initial?.name || '',
    subtitle: initial?.subtitle || '',
    description: initial?.description || '',
    oldPrice: initial?.oldPrice || '',
    newPrice: initial?.newPrice || '',
    images: initial?.images || [null, null, null, null]
  });

  const [previews, setPreviews] = useState(form.images.map(i => i || null));

  useEffect(() => {
    setPreviews(form.images.map(i => (typeof i === 'string' ? i : (i ? URL.createObjectURL(i) : null))));
    return () => {
      previews.forEach(p => { if (p && p.startsWith('blob:')) URL.revokeObjectURL(p) });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.images]);

  const onFile = (idx, file) => {
    const newImgs = [...form.images];
    newImgs[idx] = file;
    setForm({...form, images: newImgs});
  };

  const submit = async (e) => {
    e.preventDefault();
    const images = await Promise.all(form.images.map(async (img) => {
      if (!img) return '/placeholder.png';
      if (typeof img === 'string') return img;
      return await new Promise((res) => {
        const reader = new FileReader();
        reader.onload = () => res(reader.result);
        reader.readAsDataURL(img);
      });
    }));

    const payload = {
      name: form.name,
      subtitle: form.subtitle,
      description: form.description,
      oldPrice: form.oldPrice,
      newPrice: form.newPrice,
      images
    };

    if (initial?.id) {
      await fetch(`/api/products/${initial.id}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      router.push('/dashboard');
      return;
    }

    await fetch('/api/products', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    router.push('/dashboard');
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-lg p-6 shadow max-w-3xl">
      <h2 className="text-2xl font-bold text-green-800 mb-4">{initial ? 'Edit' : 'Add New'} Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Product Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm">Sub Title</label>
          <input value={form.subtitle} onChange={e=>setForm({...form, subtitle:e.target.value})} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Old Price</label>
          <input value={form.oldPrice} onChange={e=>setForm({...form, oldPrice:e.target.value})} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">New Price</label>
          <input value={form.newPrice} onChange={e=>setForm({...form, newPrice:e.target.value})} className="w-full border p-2 rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm">Description</label>
          <textarea value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="w-full border p-2 rounded h-28" />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {Array.from({length:4}).map((_, idx) => (
            <div key={idx} className="border p-2 rounded">
              <input type="file" accept="image/*" onChange={e => onFile(idx, e.target.files[0])} />
              {previews[idx] && <img src={previews[idx]} className="mt-2 w-full h-28 object-cover rounded" alt={`preview-${idx}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-right">
        <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">Save</button>
      </div>
    </form>
  );
}
