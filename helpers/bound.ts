export const bound = ({
  min,
  number,
  max,
}: {
  min: number;
  number: number;
  max: number;
}): number => Math.max(min, Math.min(number, max));
