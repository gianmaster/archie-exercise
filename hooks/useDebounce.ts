import { useUpdateEffect } from '@chakra-ui/react';

export const useDebounce = (fn: () => void, delay: number, deps: any[]) => {
  useUpdateEffect(() => {
    const timeout = setTimeout(fn, delay);
    return () => clearTimeout(timeout);
  }, deps);
};
