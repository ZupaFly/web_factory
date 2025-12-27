import { useEffect } from "react";

const useScrollBounce = () => {
  useEffect(() => {
    let ticking = false;

    const el = document.scrollingElement as HTMLElement | null;

    if (!el) return;

    const update = () => {
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - window.innerHeight;

      let offset = 0;

      if (scrollTop <= 0) {
        offset = scrollTop * 0.2;
      } else if (scrollTop >= maxScroll) {
        offset = (scrollTop - maxScroll) * 0.2;
      }

      el.style.transform = `translateY(${offset}px)`;

      if (offset !== 0) {
        requestAnimationFrame(() => {
          el.style.transition = "transform 0.3s ease";
          el.style.transform = "translateY(0)";
        });
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

export default useScrollBounce;
