# FAQ card

![](https://github.com/Nimixx/portfolio-v2/assets/51626851/87373dc1-7b46-41c0-9b2e-f88221f03c63)

This project was build with classic basic stuck for modern app

[Live web](https://www.nimixx.dev/ "Live web")

#### TechSutck

For my project iam usualy pick the stuck where i can chill in code.

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite](https://vitejs.dev/)

#### Libraries

- [Lucide Icons](https://lucide.dev/icons/)

#### What i try to learn

In this project i try to write maintaible and clean code as i can in time. I try to use function like a map of object and also modern css.

```tsx
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
```
