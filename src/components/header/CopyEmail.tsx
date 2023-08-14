import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { useToast } from '@/components/ui/use-toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function CopyEmail() {
  const { toast } = useToast()

  const copyEmailToClipboard = () => {
    const email = 'nimixx.dev@proton.me'
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
          <Button onClick={copyEmailToClipboard} variant="outline" size="icon">
            <Mail className="dark:text-indigo-400 h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Kopírovat email</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
