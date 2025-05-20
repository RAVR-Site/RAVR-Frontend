import { useState, useEffect } from 'react';

type ElementSize = {
  width: number;
  height: number;
};

export function useElementSize<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): ElementSize {
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const updateSize = () => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [ref]); 

  return size;
}