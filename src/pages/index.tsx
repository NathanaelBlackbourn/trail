import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Interlude from "@/components/Interlude/Interlude";
import { inventory } from "@/data/inventory";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Category category={inventory[0]} />
        <Interlude />
        <Category category={inventory[1]} />
        <Footer />
      </main>
    </>
  );
}
