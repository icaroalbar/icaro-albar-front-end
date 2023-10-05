import { Header } from "@/partials/Header";
import { About } from "@/partials/About/";
import Head from "next/head";
import { Stacks } from "@/partials/Stacks";
import { Contact } from "@/partials/Contact";
import { Certification } from "@/partials/Certification";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Icaro Albar</title>
        <meta name="description" content="Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-body-primary">
        <Header />
        <About />
        <Stacks />
        <Certification />
        <Contact />
      </main>
    </>
  );
}
