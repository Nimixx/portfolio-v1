import { Paperclip } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Resume() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            className=" hidden xl:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-700  w-8 h-8 dark:text-indigo-400 "
            href="/"
          >
            <Paperclip className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ukázat Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
