const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Your one-stop solution for seamless transactions, account
            management, and more!
          </p>
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Fast Transactions
              </h3>
              <p className="text-gray-600">
                Enjoy secure and instant transactions with minimal fees.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Secure Accounts
              </h3>
              <p className="text-gray-600">
                Your data and transactions are secured with the latest
                encryption methods.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                A clean and intuitive design makes it easy to navigate our
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Our Users Say
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;This platform is amazing! Transactions are seamless, and
                the interface is so easy to use!&rdquo;
              </p>
              <p className="font-semibold text-blue-600">John Doe</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;I’ve never experienced a more secure and efficient
                financial platform. Highly recommended!&quot;
              </p>
              <p className="font-semibold text-blue-600">Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Our Platform. All rights reserved.</p>
          <div className="mt-4">
            <a href="#privacy" className="hover:text-blue-300 mx-2">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-300 mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
