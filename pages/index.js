"use server";

import Image from 'next/image'

export default function Home() {
  const headerList = await headers();
  
  // Convert to a plain object to easily stringify
  const headersObj = Object.fromEntries(headerList.entries());
  const headersString = JSON.stringify(headersObj, null, 2);

  
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h2 className="inter text-4xl mb-3 font-bold text-gray-800">
          Welcome to Your Next.js App{" "}
          <span className="block text-blue-500 text-2xl font-normal">
            Deployed to Hostman!
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Deploy API routes, static frontend, databases, and more.
        </p>

        <div className="sm:flex">
          { headersString }
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 relative">
        <svg
          className="hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <Image
          src="background.jpg"
          alt="Ocean Image"
          className="lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
}
