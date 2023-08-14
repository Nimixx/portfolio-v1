import { Code2, Github, Globe2 } from "lucide-react";

const projects = [
  {
    title: "DevFinder",
    description:
      "Menší projekt, který jsem vytvořil v rámci výuky Reactu. Jedná se o jednoduchou aplikaci, která pomocí GitHub API vyhledává uživatele a zobrazuje jejich profilové informace. Dále je možné zobrazit uživatelovy repozitáře a podrobnější informace o nich. Design pochází z challenge na stránce Frontend Mentor.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    githubLink: "https://github.com/project1",
    liveWebLink: "https://devfinder-ten-zeta.vercel.app/",
    bgImage:
      "bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/devFinder-light.png?updatedAt=1692008333169)] dark:bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/devFinder-dark.png?updatedAt=1692008333235)]",
  },
  {
    title: "NIMIXX",
    description:
      "Moje osobní portfolio, které jsi právě prohlížíš. Vytvořeno pomocí Reactu a TailwindCSS slouží k prezentaci mých projektů a dovedností. Design je vytvořen mnou a jeho hlavním cílem bylo vytvořit jednoduchou a přehlednou stránku, která bude dobře fungovat na všech zařízeních. Aplikace je nasazená na Vercelu.",
    technologies: ["React", "TypeScript", "TailwindCSS", "shadcnui"],
    githubLink: "https://github.com/project2",
    liveWebLink: "https://nimixx.dev/",
    bgImage:
      "bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/nimixx-light.png?updatedAt=1692007936812)] dark:bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/nimixx-dark.png?updatedAt=1692008047424)]",
  },
];
const technologyColors: Record<string, string> = {
  React: "text-sky-400",
  TypeScript: "text-blue-500",
  TailwindCSS: "text-teal-500 dark:text-teal-300",
  shadcnui: "text-gray-500 dark:text-gray-300",
};

export default function Projects() {
  return (
    <section className="w-full mt-14 flex flex-col gap-10">
      <h2 className="text-2xl font-bold flex items-center space-x-2 -mb-5">
        <Code2 className="text-teal-500 dark:text-teal-300" />
        <span>Projekty</span>
      </h2>
      {projects.map((project, index) => (
        <article key={index} className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div
            className={`relative h-32 xl:h-full rounded-xl ${project.bgImage} bg-no-repeat bg-center bg-cover justify-center items-center overflow-hidden shadow-lg group border border-zinc-200 dark:border-zinc-700 hidden xl:flex`}
          >
            <a
              className={`w-full h-full absolute top-0 left-0 right-0 text-4xl font-bold flex justify-center items-center`}
              href={project.liveWebLink}
            />
            <a className="absolute -top-16 -right-16" href={project.githubLink}>
              <div
                className={`w-32 h-32 bg-zinc-400 dark:bg-zinc-700  rotate-45 hover:bg-zinc-500 dark:hover:bg-zinc-600 relative`}
              />
              <Github
                className={`w-8 h-8 absolute bottom-5 left-6 text-zinc-200 pointer-events-none`}
              />
            </a>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h4 className="text-2xl font-bold">{project.title}</h4>
            <section className="flex items-center gap-2">
              <a className="block xl:hidden" href={project.githubLink}>
                <Github />
              </a>
              <a href={project.liveWebLink}>
                <Globe2 className="text-gray-500 hover:text-gray-600 dark:text-gray-300 hover:dark:text-gray-400" />
              </a>
            </section>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <h6 className="text-xl font-semibold">Technologie</h6>
            <ul className="flex space-x-5 text-gray-600 dark:text-gray-500">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className={`${
                    technologyColors[tech] || "text-gray-600 dark:text-gray-500"
                  }`}
                >
                  <strong>{tech}</strong>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
