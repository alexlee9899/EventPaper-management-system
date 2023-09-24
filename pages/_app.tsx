import { SessionProvider } from 'next-auth/react';
// import { AppProps } from 'next/app';
import { AppProps as NextAppProps } from 'next/app';

interface AppProps extends NextAppProps {
  pageProps: {
    session?: any; // 你可以替换 `any` 为你的 session 对象的具体类型
  };
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;