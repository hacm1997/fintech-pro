"use client";
import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";
import { Filters } from "./types";

/**
 * Custom hook to manage products, filters, and categories for a product listing.
 * It fetches products from the API based on the filters and category selected by the user.
 *
 * @returns {Object} - The state and methods related to products, filters, and categories.
 *
 * @property {Product[]} products - The list of products fetched from the API.
 * @property {Filters} filters - The current filters applied to the product list.
 * @property {string[]} categories - A list of product categories for filtering.
 * @property {string} activeCategory - The currently active category filter.
 * @property {Function} updateFilters - A function to update the current filters.
 * @property {Function} resetFilters - A function to reset all filters.
 * @property {Function} handleCategoryChange - A function to change the active category filter.
 */
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({});
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [categories, setCategories] = useState<string[]>([]);

  // Memoized query parameters to build the URL query string
  const queryParams = useMemo(() => {
    const params = new URLSearchParams();

    // Append the filters to the query string
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString());
      }
    });

    return params.toString();
  }, [filters]);

  // Memoized URL to fetch products based on filters
  const url = useMemo(() => {
    return queryParams ? `/api/products?${queryParams}` : `/api/products`;
  }, [queryParams]);

  // Fetch products from the API when the component mounts or when filters change
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);

      // Set the categories if not already set
      if (categories.length < 1 && data && Array.isArray(data)) {
        setCategories([
          "Todos",
          ...Array.from(new Set(data.map((p) => p.category))),
        ]);
      }
    };

    fetchProducts();
  }, [categories.length, url]);

  // Function to handle category changes and update the filters
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "Todos") {
      setFilters({
        ...filters,
        category: undefined,
      });
    } else {
      setFilters({
        ...filters,
        category,
      });
    }
  };

  // Function to update filters
  const updateFilters = (newFilters: Filters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Function to reset all filters
  const resetFilters = () => {
    setFilters({});
  };

  return {
    products,
    filters,
    categories,
    activeCategory,
    updateFilters,
    resetFilters,
    handleCategoryChange,
  };
};
