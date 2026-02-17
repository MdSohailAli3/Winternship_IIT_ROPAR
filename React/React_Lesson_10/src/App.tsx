import React, { Suspense, useState } from "react";
import ProductChart from "./components/ProductChart";

const AdminPanel = React.lazy(() => import("./components/AdminPanel"));

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <h1>ShopEase Dashboard</h1>

      <ProductChart />

      <button onClick={() => setShowAdmin(true)}>
        Load Admin Panel
      </button>

      {showAdmin && (
        <Suspense fallback={<p>Loading admin...</p>}>
          <AdminPanel />
        </Suspense>
      )}
    </div>
  );
}
