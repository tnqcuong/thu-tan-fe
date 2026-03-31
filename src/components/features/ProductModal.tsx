"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { modalContent } from "@/lib/motion-variants";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  // Reset image index when product changes
  const currentProduct = product;

  if (!currentProduct) return null;

  const images = currentProduct.images;
  const hasMultiple = images.length > 1;

  const prev = () => setImageIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImageIndex((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={currentProduct.name}
          >
            <motion.div
              key="modal"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-lg glass-card rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X size={15} />
              </button>

              {/* Image gallery */}
              <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[imageIndex]}
                      alt={`${currentProduct.name} – image ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 512px) 100vw, 512px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      <ChevronRight size={16} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-200 ${
                            i === imageIndex
                              ? "w-4 bg-white"
                              : "w-1.5 bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-foreground leading-tight">
                    {currentProduct.name}
                  </h2>
                  <span className="shrink-0 text-lg font-bold text-primary">
                    {formatPrice(currentProduct.price)}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {currentProduct.description}
                </p>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-sm shadow-primary/30 hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <ShoppingBag size={16} aria-hidden="true" />
                  Thêm vào giỏ hàng
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
