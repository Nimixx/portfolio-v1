import { useState, useEffect } from 'react';

const useHeaderVisibility = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const mobileThreshold = 25;
  const desktopThreshold = 350;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDown = prevScrollPos < currentScrollPos;

      const threshold = window.innerWidth < 768 ? mobileThreshold : desktopThreshold;

      if (scrollDown && visible && currentScrollPos > threshold) {
        setVisible(false);
      } else if (!scrollDown || currentScrollPos <= threshold) {
        setVisible(true);
      }

      setPrevScrollPos((prevPos) => {
        // Update prevScrollPos using functional update
        if (prevPos !== currentScrollPos) {
          return currentScrollPos;
        }
        return prevPos;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return visible;
};

export default useHeaderVisibility;
