import "@/styles/globals.css";
import "@/styles/styles.scss";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, router, pageProps }) {
  return (
    <div className="main">
      <AnimatePresence>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
