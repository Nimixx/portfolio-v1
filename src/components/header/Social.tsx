import { Github, Linkedin, Twitter} from "lucide-react";

export default function Social() {
  return (
    <ul className=" flex items-center gap-2 text-gray-500 dark:text-gray-400">
      <li>
        <a  href="https://github.com/Nimixx">
          <Github className="w-5 h-5 hover:text-zinc-950 dark:hover:text-white" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/NimixxDev">
          <Twitter className="w-5 h-5 hover:text-zinc-950 dark:hover:text-white" />
        </a>
      </li>
      <li>
        <a href="/">
          <Linkedin className="w-5 h-5 hover:text-zinc-950 dark:hover:text-white" />
        </a>
      </li>
    </ul>
  );
}
