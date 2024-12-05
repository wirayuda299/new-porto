import { type MutableRefObject, useEffect } from 'react';

export default function useIntersectionObserver<T>(
  element: MutableRefObject<T | undefined>,
  stylesString: string
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add(stylesString);
        }
      },
      { threshold: 0.5, rootMargin: '100px' }
    );

    if (element.current) {
      observer.observe(element.current as unknown as Element);
    }
    return () => {
      if (element.current) {
        observer.unobserve(element.current as unknown as Element);
      }
    };
  }, []);
}
