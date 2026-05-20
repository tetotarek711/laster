import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-sky-50"
      dir="rtl"
    >
<section className="bg-gradient-to-l from-sky-500 to-sky-300 text-white py-32 text-center px-5">

  <h1 className="text-6xl font-bold mb-10">
    مرحبًا بك في Laster
  </h1>

  <div className="bg-white text-sky-700 max-w-5xl mx-auto rounded-3xl p-8 shadow-2xl mb-10">

    <h2 className="text-4xl font-bold mb-6">
      ليه تختار لاستر ؟
    </h2>

    <p className="text-xl leading-loose">

      تُعد منتجات لاستر (Luster) خياراً مثالياً لأنها تقدم تركيبة فعالة وآمنة 100%
      لإزالة الدهون الصعبة، تنظيف المفروشات، والتخلص من الحشرات.

      <br /><br />

      بفضل خبرة تتجاوز 10 سنوات، أثبتت فعاليتها في توفير حلول عملية وسريعة
      للعناية بالمنزل.

      <br /><br />

      إليك أبرز ما يميز منتجات لاستر لتعتمد عليها في بيتك:

      <br /><br />

      ✅ قوة التنظيف:
      منتجات مثل "لاستر قاهر الدهون" مصممة خصيصاً لتفكيك وإزالة البقع
      العنيدة والدهون المحترقة بسهولة من الأفران.

      <br /><br />

      ✅ عناية فائقة بالمفروشات:
      يوفر منظف السجاد والمفروشات رغوة كثيفة تزيل البقع العميقة دون
      إتلاف الأقمشة.

      <br /><br />

      ✅ أمان تام:
      منتجاتها معتمدة وآمنة للاستخدام المنزلي ضمن مجموعة واسعة تشمل
      المبيدات الحشرية والمعطرات.

      <br /><br />

      ✅ تغطية واسعة:
      إمكانية الوصول السريع لمنتجاتها وخدمات التوصيل.

    </p>

  </div>

  <Link
    to="/products"
    className="bg-white text-sky-600 px-10 py-4 rounded-2xl text-2xl font-bold hover:bg-sky-100 transition"
  >
    ابدأ التسوق
  </Link>

  <div className="mt-10">

  <p className="text-2xl font-bold mb-4">
    تابعنا على يوتيوب 🎥
  </p>

  <a
    href="https://youtube.com/@laster.masr.1?si=zFcK98yGFW3_RFwc"
    target="_blank"
    rel="noreferrer"
    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-xl font-bold inline-block transition"
  >
    قناة Laster على YouTube
  </a>

</div>

</section>
    </div>
  );
}