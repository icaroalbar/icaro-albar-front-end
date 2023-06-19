import { About } from "@/components/About";
import Head from "next/head";

export default function Contact(): JSX.Element {
  return (
    <>
      <Head>
        <title>Icaro Albar</title>
        <meta name="description" content="Portifólio do Icaro Albar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-body-primary">
        <About />
      </main>
    </>
  );
}
