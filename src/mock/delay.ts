const MIN_DELAY_MS = 300;
const MAX_DELAY_MS = 800;

const randomInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const withRandomDelay = async <T>(factory: () => T | Promise<T>): Promise<T> => {
  const delay = randomInRange(MIN_DELAY_MS, MAX_DELAY_MS);

  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

  return factory();
};
