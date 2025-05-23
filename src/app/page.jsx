export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Dezekahf
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-300">
          Your spiritual journey starts here. Explore the Quran, Hadith, and inspiring lectures.
        </p>
        <a
          href="#explore"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Explore Now
        </a>
      </section>

      {/* Your Original Final Exam Card */}
      <main className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto text-black">
        <div className="bg-pink-100 rounded-lg px-6 py-4 mb-6">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Final Exam 343 <span role="img" aria-label="sparkles">✨</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1 text-center">
            Fuller, Dezekah <span role="img" aria-label="student">🎓</span>
          </h2>
          <h3 className="text-xl text-gray-600 text-center">
            Spring 2025 <span role="img" aria-label="calendar">📅</span>
          </h3>
        </div>
        {/* You can add more content below */}
      </main>
    </div>
  );
}