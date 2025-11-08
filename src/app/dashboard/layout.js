
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
// import '@/globals.css';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-72 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-green-800">Adela Admin</h1>
        </div>
        <Sidebar />
      </aside>

      <div className="flex-1 p-6">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
