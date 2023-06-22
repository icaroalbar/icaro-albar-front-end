import { Header } from "@/components/Header";
import { About } from "@/components/About";
import Head from "next/head";
import { Stacks } from "@/components/Stacks";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Icaro Albar</title>
        <meta name="description" content="Portifólio do Icaro Albar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-body-primary">
        <Header />
        <About />
        <Stacks />
      </main>
    </>
  );
}
