import { useToast } from '@/components/ui/use-toast';

type CopyEmailFunction = (email: string) => void;

const useCopyEmail = (): CopyEmailFunction => {
  const { toast } = useToast();

  const copyEmailToClipboard: CopyEmailFunction = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: 'Email zkopírován do schránky',
        description: email,
      });
    });
  };

  return copyEmailToClipboard;
};

export default useCopyEmail;
