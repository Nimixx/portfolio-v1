import { Wallpaper } from "lucide-react";

const courses = [
  {
    name: "JoyForReact",
    url: "https://www.joyofreact.com/",
    instructor: "Josh W Comeau",
  },
  {
    name: "HTML, CSS a JavaScript",
    url: "https://www.joyofreact.com/",
    instructor: "Jonas Schmedtmann",
  },
  {
    name: "Sass & Animation",
    url: "https://www.joyofreact.com/",
    instructor: "Jonas Schmedtmann",
  },
];

export default function Courses() {
  return (
    <section className="w-full mt-14 space-y-5">
      <h2 className="text-2xl font-bold flex items-center space-x-2">
        <Wallpaper className="text-emerald-500 dark:text-emerald-300" />
        <span>Kurzy</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Většinu věcí jsem se naučil sám tím že jsem je prostě zkoušel a zkoušel.
        Některé věci jsem se naučil z kurzů, případně z článků a videí na
        internetu.
      </p>
      <ul className="text-gray-600 dark:text-gray-400 flex flex-col items-start justify-start gap-2">
        {courses.map((course, index) => (
          <li key={index} className="flex items-center space-x-2">
            <a href={course.url} className="text-zinc-950 dark:text-white ">
              <strong>{course.name}</strong> - Kompletní kurz od{" "}
              <strong className="text-blue-500 dark:text-indigo-400">
                {course.instructor}
              </strong>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
