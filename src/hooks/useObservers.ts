import { DependencyList, useEffect } from "react";

export const useObservers = (
  {
    targetElementClassName,
    action,
  }: {
    targetElementClassName: string;
    action?: (target?: Element) => void;
  },
  deps: DependencyList
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);

          if (action) action(entry.target);
        }
      });
    });
    const targets = document.querySelectorAll(targetElementClassName);
    if (targets) targets.forEach((target) => observer.observe(target));
    return () => {
      if (targets) targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, deps);
};
