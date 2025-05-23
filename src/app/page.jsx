export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <header className="bg-gray-100 shadow">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <ul className="flex space-x-6 justify-center">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section id="hero" className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Dezia&apos;s Recipes</h1>
          <p className="text-lg text-gray-600">Explore delicious recipes for all occasions.</p>
        </section>

        {/* Featured Recipes Section */}
        <section id="featured-recipes" className="space-y-10">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Recipes</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Fried Chicken Recipe */}
            <div className="recipe-card border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img
                src="/fried-chicken.jpg"
                alt="Fried Chicken"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Fried Chicken</h3>
              <p className="text-gray-600 mb-4 text-center">
                Enjoy crispy, golden, and flavorful fried chicken made with a blend of spices.
              </p>
              <button
                onClick={() => window.location.href = 'recipe.html?name=Fried%20Chicken'}
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                View Recipe
              </button>
            </div>

            {/* Banana Bread Recipe */}
            <div className="recipe-card border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img
                src="/bananabread.jpg"
                alt="Banana Bread"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Banana Bread</h3>
              <p className="text-gray-600 mb-4 text-center">
                A moist and sweet banana bread, perfect for breakfast or a snack.
              </p>
              <button
                onClick={() => window.location.href = 'recipe.html?name=Banana%20Bread'}
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                View Recipe
              </button>
            </div>

            {/* Pizza Recipe */}
            <div className="recipe-card border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img
                src="/pizza.jpg"
                alt="Pizza"
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Pizza</h3>
              <p className="text-gray-600 mb-4 text-center">
                A delicious homemade pizza with a crispy crust, topped with fresh ingredients.
              </p>
              <button
                onClick={() => window.location.href = 'recipe.html?name=Pizza'}
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                View Recipe
              </button>
            </div>
          </div>
        </section>

        {/* Old Final Exam Card Section */}
        <section className="max-w-xl mx-auto">
          <main className="bg-white rounded-xl shadow-lg p-8 w-full">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600">
        <p>&copy; 2025 Food Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}