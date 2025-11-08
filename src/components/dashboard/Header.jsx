// src/components/dashboard/Header.jsx
import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded shadow-sm"><Search size={18} /></div>
        <h2 className="text-xl font-semibold">Products</h2>
      </div>
      <div>
        <div className="px-3 py-2 rounded bg-white text-sm">Admin</div>
      </div>
    </header>
  );
}
