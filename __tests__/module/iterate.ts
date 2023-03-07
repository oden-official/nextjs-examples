export const itIter = (msg: string, ratio: number, func: () => void) => {
  process.env.ITER_WEIGHT
  for (let i = 0; i < ratio * +(process.env.ITER_WEIGHT || 1); i++) {
    it(msg, func)
  }
}

export const itAsyncIter = (msg: string, ratio: number, func: () => Promise<void>) => {
  for (let i = 0; i < ratio * +(process.env.ITER_WEIGHT || 1); i++) {
    it(msg, func)
  }
}