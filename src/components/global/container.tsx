"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Props {
    className?: string;
    children: ReactNode;
    delay?: number;
    reverse?: boolean;
    simple?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse, simple }: Props) => {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-20% 0px",
    });
    const [hasFallback, setHasFallback] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion || isInView) {
            setHasFallback(true);
            return;
        }

        const timeout = window.setTimeout(() => {
            setHasFallback(true);
        }, 450);

        return () => window.clearTimeout(timeout);
    }, [prefersReducedMotion, isInView]);

    const shouldShow = prefersReducedMotion || isInView || hasFallback;
    const initial = prefersReducedMotion ? undefined : { opacity: 0, y: reverse ? -20 : 20 };
    const animate = prefersReducedMotion
        ? undefined
        : {
              opacity: shouldShow ? 1 : 0,
              y: shouldShow ? 0 : reverse ? -20 : 20,
          };

    return (
        <motion.div
            ref={ref}
            className={cn("w-full h-full", className)}
            initial={initial}
            animate={animate}
            transition={{
                delay: prefersReducedMotion ? 0 : delay,
                duration: simple ? 0.2 : 0.4,
                type: simple ? "keyframes" : "spring",
                stiffness: simple ? 100 : undefined,
            }}
        >
            {children}
        </motion.div>
    );
};

export default Container;
