import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Toaster />
    </>
  );
}
