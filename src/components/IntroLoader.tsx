"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "meetallan-intro-seen";

export function IntroLoader() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === "true";

    if (alreadySeen || reduceMotion) {
      document.documentElement.setAttribute("data-intro", "seen");
      setIsVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-active");

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      document.documentElement.setAttribute("data-intro", "seen");
      setIsVisible(false);
      document.documentElement.classList.remove("intro-active");
    }, 2400);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("intro-active");
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="intro-screen"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <div className="intro-words">
            <motion.span
              initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [6, 0, 0, -4],
                filter: ["blur(3px)", "blur(0px)", "blur(0px)", "blur(2px)"],
              }}
              transition={{
                duration: 1.02,
                delay: 0.12,
                times: [0, 0.2, 0.72, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ALLAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [6, 0, 0, -4],
                filter: ["blur(3px)", "blur(0px)", "blur(0px)", "blur(2px)"],
              }}
              transition={{
                duration: 1.02,
                delay: 1.35,
                times: [0, 0.2, 0.72, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              PEREIRA
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
