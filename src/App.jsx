import { useEffect, useState, useRef } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MyChart from "./components/Mycharts";
import Hero from "./components/Hero";
import Quarter1 from "./components/Quarter 1";
import Quarter2 from "./components/Quarter 2";
import Quarter3 from "./components/Quarter 3";
import Quarter4 from "./components/Quarter 4";

function App() {
  const myref = useRef(null);

  const [loading, setLoading] = useState(true);
  const [languageIndex, setLanguageIndex] = useState(0);

  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Olá",
    "안녕하세요",
    "नमस्ते",
  ];

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);

          // Allow last greeting to fully render before exit
          setTimeout(() => {
            setLoading(false);
          }, 250); // small delay = smooth transition

          return prev;
        }
      });
    }, 320);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="splash"
            className="fixed inset-0 flex justify-center items-center bg-white text-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              key={languageIndex}
              className="text-5xl font-extrabold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 18,
                opacity: 0,
                filter: "blur(25px)",
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {greetings[languageIndex]}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <motion.div
          ref={myref}
          className="min-h-screen bg-white flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Header />

          <main className="flex-1 flex items-center justify-center">
            <Hero />
          </main>

          <MyChart />
          <Quarter1 />
          <Quarter2 />
          <Quarter3 />
          <Quarter4 />

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;