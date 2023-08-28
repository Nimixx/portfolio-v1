import { FolderGit2, Github } from 'lucide-react'
import Link from '../ui/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import projectsData from './projectsData.json'; 

export default function Archive() {
  return (
    <section className="mt-14 flex w-full flex-col items-start space-y-5">
      <h2 className="flex items-center space-x-2 text-2xl font-bold">
        <FolderGit2 className="text-rose-500 dark:text-rose-300" />
        <span>Archív</span>
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Projekt</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Popis</TableHead>
            <TableHead className="text-right">Hostováno</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {projectsData.map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <Link
                  className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  link={project.link}
                  target="_blank"
                  ariaLabel="Link to Github page of my project"
                >
                  <Github />
                </Link>
              </TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell className="text-right text-sky-400">
                <Link
                  link={project.statusLink}
                  target="_blank"
                  ariaLabel="Link to live website of my project"
                  className={
                    project.statusLink === '/'
                      ? 'pointer-events-none text-rose-500 dark:text-rose-400 '
                      : 'text-blue-500 dark:text-sky-400'
                  }
                >
                  <strong>{project.status}</strong>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <section className="text-gray-600 dark:text-gray-400 ">
        <p>
          Jsou projekty, které nemám ani v archivu, ale je možné se na ně podívat přímo na mém
          profilu na platformách jako je{' '}
          <strong className="text-teal-400">
            <Link link="https://www.frontendmentor.io/profile/Nimixx">Front End Mentor</Link>
          </strong>
          . Většinou se jedná o komponenty, challenge, které jsem si vybral a vytvořil je podle
          zadání.
        </p>
      </section>
    </section>
  )
}
