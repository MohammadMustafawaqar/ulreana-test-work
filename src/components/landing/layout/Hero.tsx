export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 opacity-60"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm uppercase font-medium text-gray-600 dark:text-gray-400 tracking-wide">
          👋 Hey there! I’m <span className="text-blue-600 dark:text-blue-400 font-semibold">Mustafa Waqar</span>
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Crafting <span className="text-blue-600 dark:text-blue-400">scalable web experiences</span> that empower users
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          I help startups and businesses accelerate launch velocity with clean code, dynamic performance, and user-first design.
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <a
            href="https://mustafawaqar.vercel.app/"
            target="__blank"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="https://mustafawaqar.vercel.app/contact"
            target="__blank"
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-neutral-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
