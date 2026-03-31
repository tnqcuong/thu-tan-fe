"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion-variants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { Store } from "@/types";

interface StoreHeaderProps {
  store: Store;
}

export function StoreHeader({ store }: StoreHeaderProps) {
  const isOpen = store.status === "open";

  return (
    <header className="w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="glass rounded-2xl p-6 md:p-8 shadow-sm"
      >
        <div className="flex items-start justify-between gap-4">
          {/* Left: Avatar + Info */}
          <div className="flex items-start gap-4 md:gap-6 flex-1 min-w-0">
            {/* Avatar */}
            <motion.div
              variants={fadeInUp}
              className="relative shrink-0"
            >
              <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 ring-border shadow-md">
                <Image
                  src={store.avatar}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>
              {/* Online indicator */}
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background ${
                  isOpen ? "bg-emerald-500" : "bg-red-400"
                }`}
                aria-hidden="true"
              />
            </motion.div>

            {/* Store details */}
            <div className="flex-1 min-w-0">
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-2 mb-1"
              >
                <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground truncate">
                  {store.name}
                </h1>
                {/* Status badge */}
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    isOpen
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60"
                      : "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60"
                  }`}
                  role="status"
                  aria-label={`Store is ${store.status}`}
                >
                  {isOpen ? (
                    <CheckCircle2 size={11} aria-hidden="true" />
                  ) : (
                    <XCircle size={11} aria-hidden="true" />
                  )}
                  {isOpen ? "Đang mở cửa" : "Đã đóng cửa"}
                </span>
              </motion.div>

              {/* Meta info row */}
              <motion.ul
                variants={staggerContainer}
                className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-muted-foreground"
              >
                <motion.li variants={fadeInUp} className="flex items-center gap-1.5">
                  <MapPin size={13} aria-hidden="true" className="shrink-0 text-primary/70" />
                  <span className="truncate max-w-[200px] md:max-w-none">{store.address}</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-1.5">
                  <Clock size={13} aria-hidden="true" className="shrink-0 text-primary/70" />
                  <span>{store.hours}</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center gap-1.5">
                  <Phone size={13} aria-hidden="true" className="shrink-0 text-primary/70" />
                  <a
                    href={`tel:${store.phone}`}
                    className="hover:text-foreground transition-colors"
                    aria-label={`Call ${store.phone}`}
                  >
                    {store.phone}
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </div>

          {/* Right: Theme toggle */}
          <motion.div variants={fadeInUp} className="shrink-0">
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
