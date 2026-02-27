import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// 🔥 Lazy load heavy components
const MyChart = lazy(() => import("./components/Mycharts"));
const Quarter1 = lazy(() => import("./components/Quarter 1"));
const Quarter2 = lazy(() => import("./components/Quarter 2"));
const Quarter3 = lazy(() => import("./components/Quarter 3"));
const Quarter4 = lazy(() => import("./components/Quarter 4"));

/* ===========================
   Lazy Section Component
=========================== */
function LazySection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load once
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <Suspense fallback={<div className="h-40" />}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {children}
          </motion.div>
        </Suspense>
      )}
    </div>
  );
}

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

  /* ================= SPLASH ROTATION ================= */

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
      {/* ================= MAIN APP ================= */}
      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        {/* Hero loads immediately */}
        <main className="flex-1 flex items-center justify-center">
          <Hero />
        </main>

        {/* Lazy sections load on scroll */}
        <LazySection>
          <MyChart />
        </LazySection>

        <LazySection>
          <Quarter1 />
        </LazySection>

        <LazySection>
          <Quarter2 />
        </LazySection>

        <LazySection>
          <Quarter3 />
        </LazySection>

        <LazySection>
          <Quarter4 />
        </LazySection>

        <Footer />
      </div>

      {/* ================= SPLASH OVERLAY ================= */}
      {!hideSplash && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50 overflow-hidden">
          <motion.span
            key={languageIndex}
            className="text-5xl font-extrabold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              startExit
                ? { scale: 6, opacity: 0 } // light animation (no heavy blur)
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