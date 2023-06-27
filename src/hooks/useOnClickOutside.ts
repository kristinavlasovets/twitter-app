import { RefObject, useEffect } from 'react';

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: (e: Event) => void;
}

export const useOnClickOutside = (props: UseOnClickOutsideProps) => {
  const { handler, ref } = props;

  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current;

      if (ref) {
        if (!element || element.contains(event.target as Node)) {
          return;
        }
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
