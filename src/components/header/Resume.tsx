import { Paperclip } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function Resume() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            className="hidden h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-sm font-medium ring-offset-white transition-colors  hover:bg-zinc-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-700  dark:text-indigo-400  dark:ring-offset-zinc-950 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-300 sm:inline-flex"
            href="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="show resume online in PDF format"
          >
            <Paperclip className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ukázat Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
