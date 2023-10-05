import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Footer } from "@/partials/Footer";
import { Nav } from "@/partials/Nav";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
