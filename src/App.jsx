import { useState } from "react";
import pesticidesImg from "./assets/Pesticides.png";
import cleanersImg from "./assets/Detergents.png";
import perfumesImg from "./assets/perfumes.png";
import skinImg from "./assets/Beauty.png";
import elnamlImg from "./assets/elnaml.png";
import elpakImg from "./assets/elpak.png";
import sraserImg from "./assets/sraser.png";
import elnamosImg from "./assets/elnamos.png";
export default function App() {

  const categories = [
  {
    name: "المبيدات",
    image: pesticidesImg,
  },
  {
    name: "المنظفات",
    image: cleanersImg,
  },
  {
    name: "المعطرات",
    image: perfumesImg,
  },
  {
    name: "العناية بالبشرة",
    image: skinImg,
  },
];

const products = [

  {
    id: 1,
    name: "مبيد النمل",
    price: 100,
    category: "المبيدات",
    image: elnamlImg,
  },

  {
    id: 2,
    name: "مبيد البق",
    price: 120,
    category: "المبيدات",
    image: elpakImg,
  },

  {
    id: 3,
    name: "مبيد الصراصير",
    price: 150,
    category: "المبيدات",
    image: sraserImg,
  },

  {
    id: 4,
    name: "مبيد الناموس",
    price: 130,
    category: "المبيدات",
    image: elnamosImg,
  },

  {
    id: 5,
    name: "منظف أرضيات",
    price: 80,
    category: "المنظفات",
  },

];
const deliveryPrices = {
  "القاهرة الجديدة": 120,
  "القاهرة": 105,
  "الجيزة": 110,
  "اكتوبر": 120,
  "الشيخ زايد": 120,
};
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");
  const addToCart = (product) => {

    const found = cart.find((item) => item.id === product.id);

    if (found) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([...cart, { ...product, qty: 1 }]);

    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
const delivery =
  deliveryPrices[selectedCity] || 0;

const finalTotal =
  totalPrice + delivery;
  return (

    <div className="min-h-screen bg-sky-50" dir="rtl">

      <header className="bg-sky-500 text-white p-5 shadow-lg">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

    <h1 className="text-4xl font-bold">
      Laster
    </h1>

    <div className="flex flex-wrap justify-center gap-3 items-center">

      <button
        onClick={() => setPage("home")}
        className="bg-white text-sky-600 px-5 py-2 rounded-2xl font-bold"
      >
        الرئيسية
      </button>

      <button
        onClick={() => setPage("cart")}
        className="bg-white text-sky-600 px-5 py-2 rounded-2xl font-bold"
      >
        السلة 🛒
      </button>

      <button
        className="bg-white text-sky-600 px-5 py-2 rounded-2xl font-bold"
      >
        الجملة
      </button>

    </div>

  </div>

</header>

      <section className="bg-gradient-to-l from-sky-400 to-sky-200 py-24 text-center text-white">

        <h2 className="text-6xl font-bold mb-5">
          أهلاً بك في Laster
        </h2>

        <p className="text-2xl">
          أفضل منتجات النظافة والعناية
        </p>

      </section>
       
       {page === "home" && (
         <>

      <section className="max-w-7xl mx-auto py-20 px-5">

        <h2 className="text-4xl font-bold text-center text-sky-700 mb-10">
          الأقسام
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {categories.map((category, index) => (

            <div
  key={index}
  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
>

  <img
    src={category.image}
    alt={category.name}
    className="w-full h-52 object-cover"
  />

  <div className="p-6 text-center">

    <h3 className="text-2xl font-bold text-sky-700 mb-5">
      {category.name}
    </h3>

    <button
  onClick={() => {
    setSelectedCategory(category.name);

    setTimeout(() => {
      document
        .getElementById("products-section")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
  className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-2xl font-bold"
>
  دخول القسم
</button>

  </div>

</div>

          ))}

        </div>

      </section>

      {selectedCategory && (

        <section
  id="products-section"
  className="max-w-7xl mx-auto py-10 px-5"
>

          <h2 className="text-4xl font-bold text-sky-700 mb-10">
            {selectedCategory}
          </h2>
           <input
  type="text"
  placeholder="ابحث عن منتج..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border rounded-2xl px-5 py-4 mb-8"
/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {products
  .filter(
    (product) =>
      product.category === selectedCategory &&
      product.name.includes(search)
  )
  .map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >

                  
                      <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-52 object-cover"
                  />
                  

                  <div className="p-5">

                    <h3 className="text-2xl font-bold">
                      {product.name}
                    </h3>

                    <p className="text-sky-600 text-3xl font-bold mt-4">
                      {product.price} ج
                    </p>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full mt-5 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-2xl font-bold"
                    >
                      أضف للسلة
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </section>

      )}
  </>
)}
      {page === "cart" && cart.length > 0 && (

        <section className="max-w-5xl mx-auto py-20 px-5">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-4xl font-bold text-sky-700 mb-10">
              السلة
            </h2>

            {cart.map((item) => (

              <div
  key={item.id}
  className="flex justify-between items-center border-b py-5"
>

  <div>

    <h3 className="text-2xl font-bold">
      {item.name}
    </h3>

    <div className="flex items-center gap-3 mt-3">

      <button
        onClick={() =>
          setCart(
            cart.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    qty:
                      cartItem.qty > 1
                        ? cartItem.qty - 1
                        : 1,
                  }
                : cartItem
            )
          )
        }
        className="bg-red-500 text-white w-8 h-8 rounded-full"
      >
        -
      </button>

      <span className="text-xl font-bold">
        {item.qty}
      </span>

      <button
        onClick={() =>
          setCart(
            cart.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    qty: cartItem.qty + 1,
                  }
                : cartItem
            )
          )
        }
        className="bg-green-500 text-white w-8 h-8 rounded-full"
      >
        +
      </button>

      <button
        onClick={() =>
          setCart(
            cart.filter(
              (cartItem) =>
                cartItem.id !== item.id
            )
          )
        }
        className="bg-gray-700 text-white px-4 py-2 rounded-xl mr-3"
      >
        حذف
      </button>

    </div>

  </div>

  <div className="text-2xl font-bold text-sky-600">
    {item.price * item.qty} ج
  </div>

</div>

            ))}

            
<div className="mt-10">

  <h3 className="text-3xl font-bold mb-5">
    اختر المنطقة
  </h3>

  <select
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.target.value)}
    className="w-full border rounded-2xl px-5 py-4"
  >

    <option value="">
      اختر المنطقة
    </option>

    {Object.keys(deliveryPrices).map((city) => (

      <option key={city} value={city}>
        {city} - {deliveryPrices[city]} ج
      </option>

    ))}

  </select>

  <div className="flex justify-between mt-8 text-2xl">

    <span>
      إجمالي المنتجات:
    </span>

    <span>
      {totalPrice} ج
    </span>

  </div>

  <div className="flex justify-between mt-4 text-2xl">

    <span>
      التوصيل:
    </span>

    <span>
      {delivery} ج
    </span>

  </div>

  <div className="flex justify-between mt-6 text-4xl font-bold text-sky-600">

    <span>
      الإجمالي النهائي:
    </span>

    <span>
      {finalTotal} ج
    </span>

  </div>

</div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

  <input
    type="text"
    placeholder="اسم العميل"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    className="border rounded-2xl px-5 py-4 w-full"
  />

  <input
    type="tel"
    placeholder="رقم الموبايل"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="border rounded-2xl px-5 py-4 w-full"
  />

</div>

<textarea
  placeholder="العنوان بالتفصيل"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="border rounded-2xl px-5 py-4 mt-5 w-full h-32"
></textarea>

<button
  onClick={() => {

    const orderText = cart
      .map(
        (item) =>
          `${item.name} × ${item.qty}`
      )
      .join("%0A");

    const message =
      `طلب جديد من Laster%0A%0A` +
      `الاسم: ${customerName}%0A` +
      `الموبايل: ${phone}%0A` +
      `العنوان: ${address}%0A` +
      `المنطقة: ${selectedCity}%0A%0A` +
      `الطلبات:%0A${orderText}%0A%0A` +
      `الإجمالي النهائي: ${finalTotal} ج`;

    window.open(
      `https://wa.me/201556827635?text=${message}`,
      "_blank"
    );
  }}
  className="w-full mt-8 bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-2xl text-2xl font-bold"
>
  تأكيد الطلب
</button>
          </div>

        </section>

      )}

    </div>
  );
}