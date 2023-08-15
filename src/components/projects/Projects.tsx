import { Code2, Github, Globe } from 'lucide-react'
import Link from '../ui/link'

const projects = [
  {
    title: 'DevFinder',
    description:
      'Menší projekt, který jsem vytvořil v rámci výuky Reactu. Jedná se o jednoduchou aplikaci, která pomocí GitHub API vyhledává uživatele a zobrazuje jejich profilové informace. Dále je možné zobrazit uživatelovy repozitáře a podrobnější informace o nich. Design pochází z challenge na stránce Frontend Mentor.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    githubLink: 'https://github.com/project1',
    liveWebLink: 'https://devfinder-ten-zeta.vercel.app/',
    bgImage:
      'bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/devFinder-light.png?updatedAt=1692008333169)] dark:bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/devFinder-dark.png?updatedAt=1692008333235)]',
  },
  {
    title: 'NIMIXX',
    description:
      'Moje osobní portfolio, které jsi právě prohlížíš. Vytvořeno pomocí Reactu a TailwindCSS slouží k prezentaci mých projektů a dovedností. Design je vytvořen mnou a jeho hlavním cílem bylo vytvořit jednoduchou a přehlednou stránku, která bude dobře fungovat na všech zařízeních. Aplikace je nasazená na Vercelu.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'shadcnui'],
    githubLink: 'https://github.com/project2',
    liveWebLink: 'https://nimixx.dev/',
    bgImage:
      'bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/nimixx-light.png?updatedAt=1692007936812)] dark:bg-[url(https://ik.imagekit.io/ljtbrc2pd/Projects/nimixx-dark.png?updatedAt=1692008047424)]',
  },
]
const technologyColors: Record<string, string> = {
  React: 'text-sky-400',
  TypeScript: 'text-blue-500',
  TailwindCSS: 'text-teal-500 dark:text-teal-300',
  shadcnui: 'text-gray-500 dark:text-gray-300',
}

export default function Projects() {
  return (
    <section className="mt-14 flex w-full flex-col gap-10">
      <h2 className="-mb-5 flex items-center space-x-2 text-2xl font-bold">
        <Code2 className="text-teal-500 dark:text-teal-300" />
        <span>Projekty</span>
      </h2>
      {projects.map((project, index) => (
        <article key={index} className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div
            className={`relative h-32 rounded-xl lg:h-full ${project.bgImage} group hidden items-center justify-center overflow-hidden border border-zinc-200 bg-cover bg-center bg-no-repeat shadow-lg dark:border-zinc-700 lg:flex`}
          >
            <Link
              className={`absolute left-0 right-0 top-0 flex h-full w-full items-center justify-center text-4xl font-bold`}
              link={project.liveWebLink}
              target="_blank"
              ariaLabel='Link to live website of my project'
            />
            <Link className="absolute -right-16 -top-16" link={project.githubLink} target="_blank" ariaLabel='Link to Github pager of my project'>
              <div
                className={`relative h-32 w-32 rotate-45  bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-600`}
              />
              <Github
                className={`pointer-events-none absolute bottom-5 left-6 h-8 w-8 text-zinc-200`}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h4 className="text-2xl font-bold">{project.title}</h4>
            <section className="flex items-center gap-2">
              <Link className="block xl:hidden" link={project.githubLink} target="_blank" ariaLabel='Link to Github pager of my project'>
                <Github />
              </Link>
              <Link link={project.liveWebLink} target="_blank" ariaLabel='Link to Github pager of my project'>
                <Globe className="text-gray-500 hover:text-gray-600 dark:text-gray-300 hover:dark:text-gray-400" />
              </Link>
            </section>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            <h5 className="text-xl font-semibold">Technologie</h5>
            <ul className="flex flex-wrap items-center justify-start gap-5 text-gray-600 dark:text-gray-500">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className={`${technologyColors[tech] || 'text-gray-600 dark:text-gray-500'}`}
                >
                  <strong>{tech}</strong>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
