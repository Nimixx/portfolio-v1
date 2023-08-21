import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function CopyEmail() {
  const { toast } = useToast()

  const copyEmailToClipboard = () => {
    const email = 'tadeasthelen@proton.me'
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: 'Email zkopírován do schránky',
        description: email,
      })
    })
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={copyEmailToClipboard}
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
