import { Mail } from 'lucide-react'
import { Button } from '../ui/button'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import useCopyEmail from '@/hooks/useCopyEmail'

export default function CopyEmail() {
  const copyEmailToClipboard = useCopyEmail();

  const handleCopyEmail = () => {
    copyEmailToClipboard('tadeasthelen@proton.me');
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleCopyEmail}
            variant="outline"
            size="icon"
            aria-label="copy contact email button"
          >
            <Mail className="h-[1.2rem] w-[1.2rem] dark:text-indigo-400" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Kopírovat email</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
