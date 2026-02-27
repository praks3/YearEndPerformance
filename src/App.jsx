import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Lazy heavy components
const MyChart = lazy(() => import("./components/Mycharts"));
const Quarter1 = lazy(() => import("./components/Quarter 1"));
const Quarter2 = lazy(() => import("./components/Quarter 2"));
const Quarter3 = lazy(() => import("./components/Quarter 3"));
const Quarter4 = lazy(() => import("./components/Quarter 4"));

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
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <Hero />
        </main>

        <Suspense fallback={null}>
          <MyChart />
          <Quarter1 />
          <Quarter2 />
          <Quarter3 />
          <Quarter4 />
        </Suspense>

        <Footer />
      </div>

      {/* SPLASH */}
      {!hideSplash && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50 overflow-hidden">
          <motion.span
            key={languageIndex}
            className="text-5xl font-extrabold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              startExit
                ? { scale: 10 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              startExit
                ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.4 }
            }
            onAnimationComplete={() => {
              if (startExit) {
                setHideSplash(true); // remove instantly
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