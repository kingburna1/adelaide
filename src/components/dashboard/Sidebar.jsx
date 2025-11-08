// src/components/dashboard/Sidebar.jsx
import Link from 'next/link';
import { List, PlusSquare } from 'lucide-react';

export default function Sidebar() {
  return (
    <nav className="px-4">
      <ul className="space-y-2">
        <li><Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50"><List size={18}/> <span>Products</span></Link></li>
        <li><Link href="/dashboard/products/new" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50"><PlusSquare size={18}/> <span>Add Product</span></Link></li>
      </ul>
    </nav>
  );
}
