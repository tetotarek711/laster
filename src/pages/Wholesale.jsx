export default function Wholesale() {
  return (
    <div
      className="min-h-screen bg-sky-50 py-20 px-5"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-sky-700 text-center mb-10">
          قسم الجملة
        </h1>

        <p className="text-2xl text-gray-700 leading-loose text-center">

          نوفر أسعار خاصة للتجار وأصحاب المحلات
          مع إمكانية التوريد بكميات كبيرة
          بأفضل الأسعار.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

          <div className="bg-sky-100 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              أسعار خاصة
            </h3>

            <p className="text-xl">
              خصومات قوية للكميات الكبيرة
            </p>
          </div>

          <div className="bg-sky-100 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              توريد مستمر
            </h3>

            <p className="text-xl">
              توفير المنتجات بشكل دائم
            </p>
          </div>

          <div className="bg-sky-100 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              دعم سريع
            </h3>

            <p className="text-xl">
              تواصل مباشر وسريع مع التجار
            </p>
          </div>

        </div>

        <div className="text-center mt-14">

          <a
            href="https://wa.me/201013079429"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-3xl text-2xl font-bold inline-block transition"
          >
            تواصل واتساب للجملة
          </a>

        </div>

      </div>
    </div>
  );
}