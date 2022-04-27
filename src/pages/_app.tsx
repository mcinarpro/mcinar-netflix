import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'
import { memoize } from 'lodash'

// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize((console: any) => ({
  ...console,
  warn: (...args: any) =>
    args[0].includes('Duplicate atom key') ? null : console.warn(...args),
}))
global.console = mutedConsole(global.console)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
