export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 p-3">
        <nav>
          <ul className="flex justify-center list-none">
            <li className="mx-5">
              <a href="#" className="text-white no-underline text-lg">
                Home
              </a>
            </li>
            <li className="mx-5">
              <a href="#" className="text-white no-underline text-lg">
                Recipes
              </a>
            </li>
            <li className="mx-5">
              <a href="#" className="text-white no-underline text-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="text-center bg-[#ff6347] text-white py-12 px-5"
      >
        <h1 className="text-4xl font-bold">Welcome to Dezia's Recipes</h1>
        <p className="mt-3">Explore delicious recipes for all occasions.</p>
      </section>

      {/* Featured Recipes */}
      <section
        id="featured-recipes"
        className="flex justify-around p-10 bg-white flex-wrap gap-8"
      >
        {/* Fried Chicken */}
        <div className="recipe-card bg-[#f9f9f9] p-5 w-full max-w-sm text-center rounded-lg shadow-md">
          <img
            src="/fried-chicken.jpg"
            alt="Fried Chicken"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Fried Chicken</h3>
          <p className="mt-2">
            Enjoy crispy, golden, and flavorful fried chicken made with a blend
            of spices.
          </p>
          <button
            className="mt-3 px-5 py-2 bg-[#ff6347] text-white rounded-md hover:bg-[#e5533f]"
            onClick={() =>
              (window.location.href = "recipe.html?name=Fried%20Chicken")
            }
          >
            View Recipe
          </button>
        </div>

        {/* Banana Bread */}
        <div className="recipe-card bg-[#f9f9f9] p-5 w-full max-w-sm text-center rounded-lg shadow-md">
          <img
            src="/bananabread.jpg"
            alt="Banana Bread"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Banana Bread</h3>
          <p className="mt-2">
            A moist and sweet banana bread, perfect for breakfast or a snack.
          </p>
          <button
            className="mt-3 px-5 py-2 bg-[#ff6347] text-white rounded-md hover:bg-[#e5533f]"
            onClick={() =>
              (window.location.href = "recipe.html?name=Banana%20Bread")
            }
          >
            View Recipe
          </button>
        </div>

        {/* Pizza */}
        <div className="recipe-card bg-[#f9f9f9] p-5 w-full max-w-sm text-center rounded-lg shadow-md">
          <img
            src="/pizza.jpg"
            alt="Pizza"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Pizza</h3>
          <p className="mt-2">
            A delicious homemade pizza with a crispy crust, topped with fresh
            ingredients.
          </p>
          <button
            className="mt-3 px-5 py-2 bg-[#ff6347] text-white rounded-md hover:bg-[#e5533f]"
            onClick={() => (window.location.href = "recipe.html?name=Pizza")}
          >
            View Recipe
          </button>
        </div>
      </section>

      {/* Old Final Exam Section */}
      <main className="min-h-screen flex items-center justify-center bg-orange-50 font-sans p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full mt-12 mx-auto">
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
          {/* Additional content can go here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-5 mt-12">
        <p>© 2025 Food Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}