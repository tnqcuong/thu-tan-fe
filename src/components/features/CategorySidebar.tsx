"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInLeft, fadeIn } from "@/lib/motion-variants";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  categories: Category[];
}

export function CategorySidebar({ categories }: CategorySidebarProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? "");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Update sliding indicator position
  useEffect(() => {
    if (!listRef.current || !indicatorRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );
    if (!activeEl) return;
    indicatorRef.current.style.top = `${activeEl.offsetTop}px`;
    indicatorRef.current.style.height = `${activeEl.offsetHeight}px`;
  }, [activeId]);

  // Intersection observer: track which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollTo = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <motion.aside
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        className="hidden lg:block sticky top-6 h-fit"
        aria-label="Category navigation"
      >
        <div className="glass-sidebar rounded-2xl p-3 shadow-sm w-52">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground px-3 pt-1 pb-2">
            Danh mục
          </p>
          <nav>
            <ul ref={listRef} className="relative space-y-0.5">
              {/* Sliding highlight */}
              <div
                ref={indicatorRef}
                className="absolute left-0 right-0 bg-primary/10 dark:bg-primary/15 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none"
                aria-hidden="true"
              />
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    data-id={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className={cn(
                      "relative z-10 w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      activeId === cat.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-current={activeId === cat.id ? "location" : undefined}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {/* Mobile Horizontal Scroll Bar */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="lg:hidden w-full overflow-x-auto scrollbar-hide"
        aria-label="Category navigation"
      >
        <ul className="flex gap-2 pb-1">
          {categories.map((cat) => (
            <li key={cat.id} className="shrink-0">
              <button
                onClick={() => scrollTo(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeId === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "glass border-border/60 text-muted-foreground hover:text-foreground"
                )}
                aria-current={activeId === cat.id ? "location" : undefined}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
