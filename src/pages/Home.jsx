import CarouselComponent from "../components/Carousel";

const Home = () => {
    return ( 
        <div className="home">
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://tinyurl.com/y3a29etf)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        {/* Let us find your */}

        <strong className="block font-extrabold text-rose-500 overflow-hidden inline-block border-r-4 animate-typewriter">
        ZURU TOURS
      </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
          Discover the World with Zuru Tours
          🌍 Your Gateway to Unforgettable Adventures!
          Embark on a journey of a lifetime—explore breathtaking destinations, immerse yourself in vibrant cultures, and create memories that last forever.
          Let us guide you to your next great escape.
          
          Ready to explore?
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/register"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</section>
<CarouselComponent />
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-rose-600 sm:text-4xl dark:text-white">
    Why Travelers Love Zuru Tours
    </h2>

    <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
    Join thousands of satisfied adventurers who’ve trusted us to make their dream vacations a reality.
    </p>
  </div>

  <dl
    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-gray-900"
  >
    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">$4000</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
      Rated by Our Customers
      </dt>

      <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">4.9/5 </dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Years of Experience</dt>

      <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">10+</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Happy Travelers</dt>

      <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">10,000+ </dd>
    </div>
  </dl>
</div>
        </div>
     );
}
 
export default Home;