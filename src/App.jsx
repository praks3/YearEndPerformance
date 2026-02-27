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
  const [loading, setLoading] = useState(true);
  const [languageIndex, setLanguageIndex] = useState(0);
  const [startExit, setStartExit] = useState(false);

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

          // Wait so last greeting is fully visible
          setTimeout(() => {
            setStartExit(true); // trigger zoom animation
          }, 400);

          return prev;
        }
      });
    }, 320);

    return () => clearInterval(interval);
  }, [loading]);

  // After zoom finishes, hide splash
  useEffect(() => {
    if (startExit) {
      setTimeout(() => {
        setLoading(false);
      }, 1400); // match zoom duration
    }
  }, [startExit]);

  return (
    <>
      {/* SPLASH SCREEN */}
     {loading && (
  <div className="fixed inset-0 flex justify-center items-center bg-white z-50 overflow-hidden">
    <motion.span
      key={languageIndex}
      className="text-5xl font-extrabold"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={
        startExit
          ? { scale: 20, opacity: 0, filter: "blur(30px)" }
          : { scale: 1, opacity: 1 }
      }
      transition={
        startExit
          ? { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0.4 }
      }
    >
      {greetings[languageIndex]}
    </motion.span>
  </div>
)}

      {/* MAIN APP */}
      {!loading && (
        <motion.div
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