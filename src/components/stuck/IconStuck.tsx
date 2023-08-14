import { Icon } from '@iconify/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const skills = [
  { icon: 'skill-icons:html', tooltip: 'HTML' },
  { icon: 'skill-icons:css', tooltip: 'CSS' },
  { icon: 'skill-icons:javascript', tooltip: 'JavaScript' },
  { icon: 'skill-icons:typescript', tooltip: 'TypeScript' },
  { icon: 'skill-icons:sass', tooltip: 'Sass' },
  { icon: 'skill-icons:react-dark', tooltip: 'React' },
  { icon: 'skill-icons:nextjs-dark', tooltip: 'Next.js' },
  { icon: 'skill-icons:astro', tooltip: 'Astro' },
  { icon: 'skill-icons:tailwindcss-dark', tooltip: 'Tailwind CSS' },
  { icon: 'skill-icons:emotion-dark', tooltip: 'Emotion' },
  { icon: 'skill-icons:materialui-dark', tooltip: 'Material UI' },
  { icon: 'skill-icons:graphql-dark', tooltip: 'GraphQl' },
  { icon: 'skill-icons:redux', tooltip: 'Redux' },
  { icon: 'skill-icons:vercel-dark', tooltip: 'Vercel' },
  { icon: 'skill-icons:bash-dark', tooltip: 'Bash' },
  { icon: 'skill-icons:git', tooltip: 'Git' },
  { icon: 'skill-icons:figma-dark', tooltip: 'Figma' },
]

export default function IconStuck() {
  return (
    <section className="flex w-full flex-row flex-wrap items-start gap-2 pt-5 2xl:justify-between">
      {skills.map((skill, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="h-10 w-10">
                <Icon icon={skill.icon} width="100%" height="100%" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </section>
  )
}