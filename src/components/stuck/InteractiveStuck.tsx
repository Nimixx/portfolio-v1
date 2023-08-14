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
    <section className="w-full flex justify-start md:justify-around gap-2 items-center  flex-wrap pt-5">
      {skills.map((skill, index) => (
        <Icon key={index} className="w-10 h-10" icon={skill} />
      ))}
    </section>
  )
}
