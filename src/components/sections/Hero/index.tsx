const Hero = () => {
  return (
    <section>
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>We are making </span>
            <br className="hidden lg:block"></br>
            Stunning websites
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            nine4 is a free to use template website for websites made with{" "}
            <a href="https://nextjs.org/" className="underline">
              Next.js
            </a>{" "}
            and styled with Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
