export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        🏠 PropertyManager
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Effortlessly manage your rentals, tenants, and maintenance tasks.
      </p>
      <div className="flex gap-4">
        <a href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Sign Up
        </a>
        <a href="/login" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition">
          Log In
        </a>
      </div>
    </div>
  );
}
