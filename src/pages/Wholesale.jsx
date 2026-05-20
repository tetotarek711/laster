export default function Wholesale() {
  return (
    <div
      className="min-h-screen bg-sky-50 py-20 px-5"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-sky-700 mb-10 text-center">
          الجملة
        </h1>

        <p className="text-2xl leading-loose text-gray-700">
          للتعامل بالجملة والتوزيع يرجى التواصل معنا هاتفيا 01113630502 او عبر واتساب.
        </p>

        <a
          href="https://wa.me/201113630502"
          target="_blank"
          className="block mt-10 bg-green-500 hover:bg-green-600 text-white text-center py-5 rounded-2xl text-2xl font-bold"
        >
          تواصل واتساب
        </a>

      </div>
    </div>
  );
}