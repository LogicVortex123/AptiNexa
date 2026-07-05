import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }

      if (sectionIds.length > 0) setActiveId(sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
