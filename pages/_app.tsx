import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={(pageProps as any).session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;