"use client";

import React, { useEffect, useState } from "react";
import { navItems } from "@/data";
import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
{
  /*import Players from "@/components/Players";*/
}
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Features from "@/components/Features";

// Dynamically import components that might use `document`
const DynamicFloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar"),
  { ssr: false }
);

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Head>
        <link
          rel="icon"
          href="faviconTectrix.ico"
        />
      </Head>
      <div className="max-w-7xl w-full">
        {isClient && <DynamicFloatingNav navItems={navItems} />}
        <Hero />
        <Grid />
        {/*<Players />*/}
        <Features />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
