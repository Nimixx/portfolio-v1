import { FolderGit2, Github } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const projects = [
  {
    name: 'Social Dashboard',
    github: <Github />,
    link: 'https://github.com/Nimixx/Social-Dashboard',
    status: 'In progress',
    statusLink: '/',
    description: 'Challenge z Frontend Mentor',
  },
  {
    name: 'Fylo Landing Page',
    github: <Github />,
    link: '/',
    status: 'In progress',
    statusLink: '/',
    description: 'Challenge z Frontend Mentor',
  },
  {
    name: 'Score card',
    github: <Github />,
    link: 'https://github.com/Nimixx/Summary-card-component',
    status: 'Live',
    statusLink: 'https://nimixx.github.io/Summary-card-component/',
    description: 'Challenge z Frontend Mentor',
  },
  {
    name: 'QR Code',
    github: <Github />,
    link: 'https://github.com/Nimixx/QR-Code',
    status: 'Live',
    statusLink: 'https://nimixx.github.io/QR-Code/',
    description: 'Challenge z Frontend Mentor',
  },
]

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
            <TableHead className="w-[200px]">Project</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Website</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <a
                  className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  href={project.link}
                >
                  {project.github}
                </a>
              </TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell className="text-right text-sky-400">
                <a
                  href={project.statusLink}
                  className={
                    project.statusLink === '/'
                      ? 'pointer-events-none text-rose-500 dark:text-rose-400 '
                      : 'text-blue-500 dark:text-sky-400'
                  }
                >
                  <strong>{project.status}</strong>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <section className="text-gray-600 dark:text-gray-400 ">
        <p>
          Jsou věci, které nemám ani v archivu ale dá se na ně podívat přímo na
          mém profilu na platformách jako je{' '}
          <strong className="text-teal-400">
            <a href="/">Front End Mentor</a>
          </strong>
          ,{' '}
          <strong className="text-amber-400">
            <a href="/">Codepen</a>
          </strong>{' '}
          nebo třeba{' '}
          <strong className="text-sky-400">
            <a href="/">I Code This</a>
          </strong>
          . Většinou se jedná o komponenty, challenge které jsem si vybral a
          vytvořil je.
        </p>
      </section>
    </section>
  )
}
