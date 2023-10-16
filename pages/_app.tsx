import { AppProps } from 'next/app'
import '../styles/index.css'
import { GoogleAdSense } from "nextjs-google-adsense";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAdSense publisherId="pub-3282955545573150" />
      <Component {...pageProps} />
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
