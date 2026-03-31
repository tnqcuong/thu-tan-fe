import { StoreHeader } from "@/components/features/StoreHeader";
import { CategorySidebar } from "@/components/features/CategorySidebar";
import { ProductGrid } from "@/components/features/ProductGrid";
import { STORE_DATA, CATEGORIES, PRODUCTS } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-6">
        {/* Store Header */}
        <StoreHeader store={STORE_DATA} />

        {/* Mobile category bar */}
        <div className="lg:hidden">
          <CategorySidebar categories={CATEGORIES} />
        </div>

        {/* Body: Sidebar + Product Grid */}
        <div className="flex gap-6 items-start">
          {/* Desktop sidebar */}
          <div className="hidden lg:block shrink-0">
            <CategorySidebar categories={CATEGORIES} />
          </div>

          {/* Product sections */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={PRODUCTS} categories={CATEGORIES} />
          </div>
        </div>
      </div>
    </main>
  );
}
