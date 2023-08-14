import { Icon } from '@iconify/react';

const skills = [
  'skill-icons:html',
  'skill-icons:css',
  'skill-icons:javascript',
  'skill-icons:typescript',
  'skill-icons:sass',
  'skill-icons:react-dark',
  'skill-icons:nextjs-dark',
  'skill-icons:astro',
  'skill-icons:tailwindcss-dark',
  'skill-icons:emotion-dark',
  'skill-icons:materialui-dark',
  'skill-icons:graphql-dark',
  'skill-icons:redux',
  'skill-icons:vercel-dark',
  'skill-icons:bash-dark',
  'skill-icons:git',
  'skill-icons:figma-dark',
];

export default function IconStuck() {
  return (
    <section className="flex flex-row flex-wrap items-start 2xl:justify-between gap-2 w-full pt-5">
      {skills.map((skill, index) => (
        <div key={index} className="w-10 h-10">
          <Icon icon={skill} width="100%" height="100%" />
        </div>
      ))}
    </section>
  );
}
