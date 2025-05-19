export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <main className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Final Exam 343 <span role="img" aria-label="sparkles">✨</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1 text-center">
          Fuller, Dezekah <span role="img" aria-label="student">🎓</span>
        </h2>
        <h3 className="text-xl text-gray-600 text-center mb-4">
          Spring 2025 <span role="img" aria-label="calendar">📅</span>
        </h3>
      </main>
    </div>
  );
}