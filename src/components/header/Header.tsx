
import CopyEmail from './CopyEmail';
import Name from './Name';
import Resume from './Resume';
import { ThemeToggle } from './ThemeToggle';
import useHeaderVisibility from '@/hooks/useHeaderVisibility';

export default function Header() {
  const visible = useHeaderVisibility(); // Use the custom hook to get the visibility state

  return (
    <header
      className={`sticky top-0 z-30 w-full border-b border-zinc-200 bg-zinc-100/50 backdrop-blur-md dark:border-zinc-900 dark:bg-zinc-900/30 ${
        visible ? 'header-show' : 'header-hide'
      }`}
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 lg:w-2/3 lg:px-0 2xl:w-2/4">
        <Name />
        <section className="flex items-center gap-2">
          <ThemeToggle />
          <CopyEmail />
          <Resume />
        </section>
      </div>
    </header>
  );
}
