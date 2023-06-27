import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { Roboto } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#F000B8" options={{ showSpinner: false }} />
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
