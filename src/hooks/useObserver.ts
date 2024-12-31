import { DependencyList, useEffect } from "react";

export const useObserver = (
  {
    targetElementId,
    action,
  }: {
    targetElementId: string;
    action?: (target?: Element) => void;
  },
  deps?: DependencyList
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          observer.disconnect();
          if (action) action(entry.target);
        }
      });
    });
    const target = document.getElementById(targetElementId);
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, deps ?? []);
};
