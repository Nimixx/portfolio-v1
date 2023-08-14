import { Icon } from '@iconify/react'

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
]

export default function InteractiveStuck() {
  return (
    <section className="flex w-full flex-wrap items-center justify-start gap-2  pt-5 md:justify-around">
      {skills.map((skill, index) => (
        <Icon key={index} className="h-10 w-10" icon={skill} />
      ))}
    </section>
  )
}
