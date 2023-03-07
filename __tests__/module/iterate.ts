export const itIter = (msg: string, ratio: number, func: () => void) => {
  it(msg, () => {
    for (let i = 0; i < ratio * +(process.env.ITER_WEIGHT || 1); i++) {
      func();
    }
  })
}

export const itAsyncIter = (msg: string, ratio: number, func: () => Promise<void>) => {
  it(msg, async () => {
    for (let i = 0; i < ratio * +(process.env.ITER_WEIGHT || 1); i++) {
      await func();
    }
  })
  
}