import { Wallpaper } from 'lucide-react'
import Link from '../ui/link'

const courses = [
  {
    name: 'JoyForReact',
    url: 'https://www.joyofreact.com/',
    instructor: 'Josh W Comeau',
  },
  {
    name: 'HTML, CSS a JavaScript',
    url: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
    instructor: 'Jonas Schmedtmann',
  },
  {
    name: 'Sass & Animation',
    url: 'https://www.udemy.com/course/advanced-css-and-sass/',
    instructor: 'Jonas Schmedtmann',
  },
]

export default function Courses() {
  return (
    <section className="mt-14 w-full space-y-5">
      <h2 className="flex items-center space-x-2 text-2xl font-bold">
        <Wallpaper className="text-emerald-500 dark:text-emerald-300" />
        <span>Kurzy</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Většinu věcí jsem se naučil sám tím, že jsem je prostě zkoušel a zkoušel. Některé věci jsem
        se naučil z kurzů, případně z článků a videí na internetu.
      </p>
      <ul className="flex flex-col items-start justify-start gap-2 text-gray-600 dark:text-gray-400">
        {courses.map((course, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Link link={course.url} target="_blank" className="text-zinc-950 dark:text-white ">
              <strong>{course.name}</strong> - Kompletní kurz od{' '}
              <strong className="text-blue-500 dark:text-indigo-400">{course.instructor}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
