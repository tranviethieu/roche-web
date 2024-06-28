import { useMemo } from 'react';

function useFormatArrayKey(arr: string[]): string {
  return useMemo(() => {
    const sortedArray = arr.sort((a, b) => parseInt(a) - parseInt(b));
    return sortedArray.join('/');
  }, [arr]);
}
function useReversedFormatkey(input: string): string[] {
  return useMemo(() => {
    const splitArray = input.split('/');
    const reversedArray = splitArray.reverse();

    return reversedArray;
  }, [input]);
}
export { useFormatArrayKey, useReversedFormatkey };
