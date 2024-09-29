import Link from "next/link";
import Footer from "../footer/page";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            aria-label="Faizan Anjum Logo"
          >
            <img
              src="https://e1.pngegg.com/pngimages/536/365/png-clipart-f-type-logos-for-sale-black-and-red-f-logo-thumbnail.png"
              alt="f logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">Faizan Anjum</span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link className="ml-2 mr-5 hover:bg-red-500 hover:text-white inline-block p-2 rounded" href="/">
              Home
            </Link>
            <Link className="mr-5 hover:bg-blue-500 hover:text-white inline-block p-2 rounded" href="/about">
              About Us
            </Link>
            <Link className="mr-5 hover:bg-green-500 hover:text-white inline-block p-2 rounded" href="/contact-us">
              Contact Us
            </Link>
            <Link className="mr-5 hover:bg-sky-500 hover:text-white inline-block p-2 rounded" href="/service">
              Services
            </Link>
            <Link className="mr-5 hover:bg-pink-500 hover:text-white inline-block p-2 rounded" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base">
              Login
            </button>

            <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base">
              Sign up
            </button>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

