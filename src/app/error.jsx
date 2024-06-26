"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-500 text-white">
      <FaExclamationTriangle className="text-9xl animate-pulse mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-lg md:text-2xl mb-8">
        Oops! The page you&#39;re looking for isn&#39;t here.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-white text-indigo-600 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Go Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
