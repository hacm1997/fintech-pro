"use client";

import { ProductCard, Tabs } from "@/components/ui";
import MainLayout from "@/components/layout/main-layout";
import { useProducts } from "@/hooks/use-products/use-products";

/**
 * HomePage component.
 * 
 * Displays a list of products filtered by category.
 * 
 * - Fetches products and categories using the `useProducts` hook.
 * - Allows users to select a category to filter the displayed products.
 * - Renders the `Tabs` component for category selection.
 * - Renders a list of `ProductCard` components for the available products.
 * 
 * @returns A React element representing the homepage with product listings.
 */
export default function HomePage() {
  const { products, categories, activeCategory, handleCategoryChange } =
    useProducts();

  return (
    <MainLayout>
      <section className="py-6 w-full">
        <Tabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        <div className="flex flex-wrap justify-center lg:justify-between gap-10 pt-8">
          {products.length > 0
            ? products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                riskLevel={item.riskLevel}
                type={item.type}
                interestRate={item.interestRate}
                category={item.category}
              />
            ))
            : null}
        </div>
      </section>
    </MainLayout>
  );
}
