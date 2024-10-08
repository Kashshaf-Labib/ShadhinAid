import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Navbar from "../components/Navbar";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title> Shadhin Aid </title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <div className={`pt-12 ${poppins.className} bg-[#c5ffc4]`}>
        {children}
      </div>
      <Toaster />
    </>
  );
}
