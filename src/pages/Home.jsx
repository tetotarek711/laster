export default function Home() {
  return (
    <div
      className="min-h-screen bg-sky-50"
      dir="rtl"
    >
      <section className="bg-gradient-to-l from-sky-500 to-sky-300 text-white py-32 text-center">
        
        <h1 className="text-6xl font-bold mb-6">
          مرحبًا بك في Laster
        </h1>

        <p className="text-2xl">
          أفضل عروض المنظفات والعناية
        </p>

      </section>

      <section className="max-w-7xl mx-auto py-20 px-5">

        <h2 className="text-4xl font-bold text-sky-700 mb-10 text-center">
          عروض اليوم 🔥
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">
              خصومات حتى 50%
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">
              شحن سريع
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">
              منتجات أصلية
            </h3>
          </div>

        </div>

      </section>
    </div>
  );
}