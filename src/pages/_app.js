import "@/styles/globals.css";
import "@/styles/styles.scss";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function App({ Component, router, pageProps }) {
  return (
    <div className="main">
      <div className="header">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <AnimatePresence>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
