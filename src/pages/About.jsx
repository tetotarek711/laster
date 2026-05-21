export default function About() {
  return (
    <div
      className="min-h-screen bg-sky-50 py-20 px-5"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-sky-700 mb-10 text-center">
          من نحن
        </h1>

        <p className="text-2xl leading-loose text-gray-700">

          لاستر (Laster) علامة متخصصة في منتجات النظافة،
          العناية المنزلية، المعطرات، والمبيدات الحشرية.

          <br /><br />

          بخبرة تتجاوز 10 سنوات نسعى لتقديم منتجات
          فعالة وآمنة تساعد كل منزل في الحصول على
          أعلى مستوى من النظافة والراحة.

          <br /><br />

          نتميز بتقديم حلول قوية لإزالة الدهون،
          تنظيف المفروشات، مكافحة الحشرات،
          وتعطير المنزل بأفضل جودة ممكنة.

          <br /><br />

          هدفنا هو توفير منتجات عملية وسريعة
          بأسعار مناسبة مع خدمة توصيل سريعة
          لجميع العملاء.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

          <div className="bg-sky-100 p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              +10 سنوات خبرة
            </h3>

            <p className="text-xl">
              خبرة طويلة في منتجات التنظيف والعناية
            </p>
          </div>

          <div className="bg-sky-100 p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              منتجات آمنة
            </h3>

            <p className="text-xl">
              تركيبات فعالة وآمنة للاستخدام المنزلي
            </p>
          </div>

          <div className="bg-sky-100 p-8 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-sky-700 mb-4">
              توصيل سريع
            </h3>

            <p className="text-xl">
              خدمة توصيل لجميع المناطق
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}