# Nimixx.dev

[![](https://github.com/Nimixx/portfolio-v2/assets/51626851/cccca2ec-5fee-4be9-9f77-6f3defef32b9)](https://www.nimixx.dev/)

This project was build with modern stack and on this website you can find some information about me and also some of my projects.

This is first version. At this time i start work on next version with more functions and new style.

[Live web](https://www.nimixx.dev/ 'Live web')

#### TechSutck

For my project iam usualy pick the stuck where i can chill in code.

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

#### Libraries

- [shadcnui](https://ui.shadcn.com/)
- [CVA](https://cva.style/docs/getting-started/installation)
- [Lucide Icons](https://lucide.dev/icons/)

#### What i try to learn

In this project i try to write maintaible and clean code as i can in time. I try to use function like a map of object and also modern css.

```tsx
<ul className="flex flex-wrap items-center justify-start gap-5 text-gray-600 dark:text-gray-500">
  {project.technologies.map((tech, idx) => (
    <li key={idx} className={`${technologyColors[tech] || 'text-gray-600 dark:text-gray-500'}`}>
      <strong>{tech}</strong>
    </li>
  ))}
</ul>
```
