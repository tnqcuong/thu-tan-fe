"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/motion-variants";
import { formatPrice } from "@/lib/utils";
import { ProductModal } from "./ProductModal";
import type { Product, Category } from "@/types";

interface ProductGridProps {
  products: Product[];
  categories: Category[];
}

function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.button
        variants={cardHover}
        onClick={onClick}
        className="w-full text-left glass-card rounded-2xl overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`View ${product.name} details`}
      >
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Price badge */}
          <div className="absolute bottom-3 right-3">
            <span className="glass px-2.5 py-1 rounded-lg text-xs font-semibold text-foreground shadow-sm">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="p-4">
          <h3 className="font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </motion.button>
    </motion.article>
  );
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <div className="space-y-10">
        {categories.map((cat) => {
          const items = products.filter((p) => p.categoryId === cat.id);
          if (items.length === 0) return null;

          return (
            <section key={cat.id} id={cat.id} aria-labelledby={`heading-${cat.id}`}>
              {/* Section heading */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-center gap-3 mb-5"
              >
                <h2
                  id={`heading-${cat.id}`}
                  className="text-lg font-semibold text-foreground"
                >
                  {cat.label}
                </h2>
                <div className="flex-1 h-px bg-border" aria-hidden="true" />
                <span className="text-xs text-muted-foreground font-medium">
                  {items.length} món
                </span>
              </motion.div>

              {/* Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelected(product)}
                  />
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Product Detail Modal */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
