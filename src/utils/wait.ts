// No, this does not cause any hydration errors,
// leave it and deal with it.
export default async function wait(ms: number): Promise<void> {
  return new Promise((res) => {
    const now = performance.now();

    setTimeout(() => {
      console.log(`Waited for ${(performance.now() - now).toFixed(2)}ms`);
      res();
    }, ms);
  });
}
