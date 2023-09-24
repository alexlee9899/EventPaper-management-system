import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider {...pageProps}>
      <Component {...pageProps} />
    </SessionProvider>

  );
};

export default App;