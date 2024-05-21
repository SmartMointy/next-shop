import { useEffect, useRef } from "react";

export default function useDebounceCallback<T>(
  func: (...args: any) => void,
  time: number,
) {
  const funcRef = useRef(func);
  const timerId = useRef<NodeJS.Timeout>();
  const mounted = useRef(false);
  funcRef.current = func;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (...args: any) => {
    clearTimeout(timerId.current);

    const timeout = setTimeout(() => {
      funcRef.current(...args);
    }, time);

    timerId.current = timeout;
  };
}
