import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MyChart from "./components/Mycharts";
import Hero from "./components/Hero";
import Quarter1 from "./components/Quarter 1";
import Quarter2 from "./components/Quarter 2";
import Quarter3 from "./components/Quarter 3";
import Quarter4 from "./components/Quarter 4";

function App() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [startExit, setStartExit] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);

  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Olá",
    "안녕하세요",
    "नमस्ते",
  ];

  /* Rotate greetings */
  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setStartExit(true), 400);
          return prev;
        }
      });
    }, 320);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* MAIN APP ALWAYS RENDERED */}
      <div className="min-h-screen bg-white flex flex-col">
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
      </div>

      {/* SPLASH OVERLAY */}
      {!hideSplash && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50 overflow-hidden">
          <motion.span
            key={languageIndex}
            className="text-5xl font-extrabold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              startExit
                ? { scale: 6, opacity: 0 }   // 🔥 reduced scale, removed blur
                : { scale: 1, opacity: 1 }
            }
            transition={
              startExit
                ? { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.4 }
            }
            onAnimationComplete={() => {
              if (startExit) {
                setHideSplash(true);
              }
            }}
          >
            {greetings[languageIndex]}
          </motion.span>
        </div>
      )}
    </>
  );
}

export default App;