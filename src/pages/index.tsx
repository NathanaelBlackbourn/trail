import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Interlude from "@/components/Interlude/Interlude";
import Menu from "@/components/Menu/Menu";
import MenuProvider from "@/contexts/MenuContext";
import { inventory } from "@/data/inventory";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuProvider>
        <main>
          <Hero />
          <Category category={inventory[0]} />
          <Interlude />
          <Category category={inventory[1]} />
          <Footer />
        </main>
        <Menu />
      </MenuProvider>
    </>
  );
}
