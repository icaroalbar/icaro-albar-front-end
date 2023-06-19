import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#2563eb" height={4} />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
