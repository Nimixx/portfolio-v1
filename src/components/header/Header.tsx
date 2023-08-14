import CopyEmail from "./CopyEmail";
import Name from "./Name";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-zinc-100/50 dark:bg-zinc-900/30 dark:border-zinc-900 sticky top-0 z-30 backdrop-blur-md">
      <div className="w-full h-16 xl:w-2/4 mx-auto flex justify-between items-center px-5 xl:px-0">
        <Name />
        <section className="flex items-center gap-2">
        <ThemeToggle />
        <CopyEmail />
        </section>
      </div>
    </header>
  );
}
