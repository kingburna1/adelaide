// src/lib/productsStore.js
let products = [
    {
      id: "p1",
      name: "Fertilizer Spreader",
      subtitle: "Heavy Duty Spreader",
      description: "High quality fertilizer spreader.",
      oldPrice: "350.000 xaf",
      newPrice: "300.000 xaf",
      images: ["/placeholder.png","/placeholder.png","/placeholder.png","/placeholder.png"],
      createdAt: new Date().toISOString()
    }
  ];
  
  const generateId = () => `p${Date.now()}`;
  
  export function getAll() { return products; }
  export function getById(id) { return products.find(p => p.id === id); }
  export function create(product) { const newItem = { ...product, id: generateId(), createdAt: new Date().toISOString() }; products.unshift(newItem); return newItem; }
  export function update(id, patch) { const idx = products.findIndex(p => p.id === id); if (idx === -1) return null; products[idx] = { ...products[idx], ...patch }; return products[idx]; }
  export function remove(id) { const idx = products.findIndex(p => p.id === id); if (idx === -1) return false; products.splice(idx,1); return true; }
  