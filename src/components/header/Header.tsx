import { useState, useEffect } from "react";
import CopyEmail from "./CopyEmail";
import Name from "./Name";
import Resume from "./Resume";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const mobileThreshold = 25; // Adjust this value for mobile
  const desktopThreshold = 350; // Adjust this value for desktop

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDown = prevScrollPos < currentScrollPos;

      // Determine the threshold based on the device width
      const threshold =
        window.innerWidth < 768 ? mobileThreshold : desktopThreshold;

      // Show/hide the header based on scroll direction and threshold
      if (scrollDown && visible && currentScrollPos > threshold) {
        setVisible(false);
      } else if (!scrollDown || currentScrollPos <= threshold) {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`w-full border-b border-zinc-200 bg-zinc-100/50 dark:bg-zinc-900/30 dark:border-zinc-900 sticky top-0 z-30 backdrop-blur-md ${
        visible ? "header-show" : "header-hide"
      }`}
    >
      <div className="w-full h-16 xl:w-2/4 mx-auto flex justify-between items-center px-5 xl:px-0">
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
