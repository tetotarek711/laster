import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Wholesale from "./pages/Wholesale";
import About from "./pages/About";

export default function App() {
  return (
    <div dir="rtl">

      <header className="bg-sky-500 text-white p-5 shadow-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <h1 className="text-4xl font-bold">
            Laster
          </h1>

          <div className="flex flex-wrap gap-3">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-2xl font-bold transition ${
                  isActive
                    ? "bg-sky-700 text-white"
                    : "bg-white text-sky-600 hover:bg-sky-100"
                }`
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-5 py-2 rounded-2xl font-bold transition ${
                  isActive
                    ? "bg-sky-700 text-white"
                    : "bg-white text-sky-600 hover:bg-sky-100"
                }`
              }
            >
              المنتجات
            </NavLink>

            <NavLink
              to="/wholesale"
              className={({ isActive }) =>
                `px-5 py-2 rounded-2xl font-bold transition ${
                  isActive
                    ? "bg-sky-700 text-white"
                    : "bg-white text-sky-600 hover:bg-sky-100"
                }`
              }
            >
              الجملة
            </NavLink>
<Link
  to="/about"
  className="bg-white text-sky-600 px-5 py-2 rounded-2xl font-bold"
>
  من نحن
</Link>
          </div>

        </div>

      </header>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/wholesale"
          element={<Wholesale />}
        />
        <Route
         path="/about"
         element={<About />}
/>

      </Routes>

    </div>
  );
}