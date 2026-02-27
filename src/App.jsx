import { useEffect, useState, useContext, useRef } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Header from './components/Header';
import Footer from './components/Footer';
import MyChart from './components/Mycharts';
import Hero from './components/Hero';
import "animate.css";
import Quarter1 from './components/Quarter 1';
import Quarter2 from './components/Quarter 2';
import Quarter3 from './components/Quarter 3';
import Quarter4 from './components/Quarter 4';
function App() {
  const myref = useRef(null);

  // Splash starts immediately
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

  // Greeting rotation logic
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);

          // Immediately trigger exit animation
          setLoading(false);

          return prev;
        }
      });
    }, 320);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-white text-black overflow-hidden">
            <motion.span
              key="greeting"
              className="text-5xl font-extrabold"
              initial={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{
                scale: 20,
                opacity: 0,
                filter: "blur(20px)",
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {greetings[languageIndex]}
            </motion.span>
          </div>
        )}
      </AnimatePresence>
{!loading && (
  <motion.div
    className="min-h-screen bg-white flex flex-col"
  >
    <Header />
    <main className="flex-1 flex items-center justify-center">
      <Hero />
    </main>
    <MyChart />
        <Quarter1/>
        <Quarter2/>
        <Quarter3/>
        <Quarter4/>

    <Footer />
  </motion.div>
)}
    </>
  );
}

export default App;
