import { Paperclip } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from '../ui/link'

export default function Resume() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className=" hidden h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-700 dark:text-indigo-400 dark:ring-offset-zinc-950  dark:hover:bg-zinc-700 dark:hover:bg-zinc-800/50 dark:focus-visible:ring-zinc-300 xl:inline-flex"
            link="/"
            target="_self"
          >
            <Paperclip className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ukázat Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

//TODO: add resume and change target to _blank
//TODO: Fix tooltip
