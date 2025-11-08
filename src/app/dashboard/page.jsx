
import ProductList from '@/components/dashboard/ProductList';
import dynamic from 'next/dynamic';
// const ProductList = dynamic(() => import('@/components/dashboard/ProductList'), { ssr: false });

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-800">Products</h2>
      <ProductList />
    </div>
  );
}
