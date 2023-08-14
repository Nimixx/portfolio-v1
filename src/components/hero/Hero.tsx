export default function Hero() {
  return (
    <section className="w-full  bg-gradient-to-b from-white to-slate-200 dark:from-zinc-950 dark:to-slate-900 relative">
      <article className="w-full h-96 xl:w-1/2 m-auto left-0 right-0 hidden xl:absolute xl:flex items-start flex-col justify-center">
        <h2 className="text-6xl font-extrabold uppercase text-slate-600 dark:text-slate-300">
          <span className="text-orange-300 dark:text-indigo-400">{"{"}</span>Tadeas
          <span className="text-orange-300 dark:text-indigo-400">{"}"}</span>
        </h2>
        <h6 className="text-xl text-gray-600 dark:text-gray-400">
          Junior Front End Developer
        </h6>
      </article>
      <svg
        className="dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f4f4f5"
          fillOpacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,266.7C480,299,600,309,720,293.3C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="hidden dark:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#09090b"
          fillOpacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,266.7C480,299,600,309,720,293.3C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
