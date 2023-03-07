import type { AppProps } from 'next/app'
import 'src/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
