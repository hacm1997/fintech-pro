// app/api/products/route.ts

import { NextResponse } from "next/server";
import { Product } from "@/types/product";

// Mock data representing a list of financial products
const products: Product[] = [
  {
    id: "1",
    name: "Cuenta Ahorro Plus",
    type: "Cuenta",
    interestRate: 1.5,
    category: "Cuentas",
    riskLevel: "Bajo",
    description: "High-interest savings account with no maintenance fees.",
    benefits: [
      "1.5% annual interest rate",
      "No maintenance fees",
      "Access to mobile and web banking",
    ],
  },
  {
    id: "2",
    name: "Tarjeta Platinum",
    type: "Tarjeta",
    interestRate: 23.99,
    category: "Tarjetas",
    riskLevel: "Medio",
    description: "Premium credit card with exclusive travel benefits.",
    benefits: [
      "Double points on international purchases",
      "Access to airport VIP lounges",
      "Travel insurance included",
    ],
  },
  {
    id: "3",
    name: "Fondo de Inversión Global",
    type: "Fondo",
    interestRate: 7.2,
    category: "Fondos",
    riskLevel: "Alto",
    description:
      "Diversified fund investing in high-performing international markets.",
    benefits: [
      "Access to U.S., European, and Asian markets",
      "Average return of 7.2%",
      "Personalized advisory service",
    ],
  },
  {
    id: "4",
    name: "Cuenta Nómina Premium",
    type: "Cuenta",
    interestRate: 0.5,
    category: "Cuentas",
    riskLevel: "Medio",
    description: "Payroll deposit account with exclusive benefits.",
    benefits: [
      "Salary advance with no interest",
      "Discounts at partner stores",
      "Priority access to personal loans",
    ],
  },
  {
    id: "5",
    name: "Tarjeta Cashback Oro",
    type: "Tarjeta",
    interestRate: 19.5,
    category: "Tarjetas",
    riskLevel: "Bajo",
    description: "Credit card offering cash back on purchases.",
    benefits: [
      "5% cashback at supermarkets",
      "3% cashback at gas stations",
      "Exclusive rewards program",
    ],
  },
  {
    id: "6",
    name: "Fondo Conservador Plus",
    type: "Fondo",
    interestRate: 3.8,
    category: "Fondos",
    riskLevel: "Bajo",
    description: "Low-risk investment fund for conservative profiles.",
    benefits: [
      "Capital protection",
      "Weekly liquidity",
      "Ideal for short-term goals",
    ],
  },
  {
    id: "7",
    name: "Depósito a Plazo Flexible",
    type: "Cuenta",
    interestRate: 2.2,
    category: "Cuentas",
    riskLevel: "Alto",
    description: "Fixed-term deposit with partial withdrawal flexibility.",
    benefits: [
      "Competitive interest rates",
      "Flexible withdrawals",
      "Ideal for scheduled savings",
    ],
  },
  {
    id: "8",
    name: "Tarjeta de Crédito Universitaria",
    type: "Tarjeta",
    interestRate: 29.5,
    category: "Tarjetas",
    riskLevel: "Medio",
    description: "Credit card designed for university students.",
    benefits: [
      "Accessible credit limits",
      "No annual fee for the first year",
      "Exclusive promotions for students",
    ],
  },
  {
    id: "9",
    name: "Fondo Verde Sostenible",
    type: "Fondo",
    interestRate: 5.5,
    category: "Fondos",
    riskLevel: "Medio",
    description: "Fund investing in sustainable projects and companies.",
    benefits: [
      "Responsible investment with positive environmental impact",
      "Competitive returns",
      "Access to sustainability reports",
    ],
  },
  {
    id: "10",
    name: "Cuenta Digital Zero",
    type: "Cuenta",
    interestRate: 0.8,
    category: "Cuentas",
    riskLevel: "Bajo",
    description: "100% digital bank account with no hidden costs.",
    benefits: [
      "Open an account in minutes via the app",
      "Unlimited free transfers",
      "Free international debit card",
    ],
  },
];

/**
 * Handles GET requests to retrieve products.
 * Supports filtering by id, category, type, risk level, and interest rate range.
 *
 * @param request - The incoming request object
 * @returns A JSON response containing the filtered list of products
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Retrieve possible filter parameters from the query string
  const id = searchParams.get("id");
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const riskLevel = searchParams.get("riskLevel");
  const interestRateMin = searchParams.get("interestRateMin");
  const interestRateMax = searchParams.get("interestRateMax");

  // Initialize the filtered products list
  let filteredProducts = products;

  // Filter by product ID
  if (id) {
    filteredProducts = filteredProducts.filter((product) => product.id === id);
  }

  // Filter by product category (case-insensitive)
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by product type (case-insensitive)
  if (type) {
    filteredProducts = filteredProducts.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase()
    );
  }

  // Filter by risk level (case-insensitive)
  if (riskLevel) {
    filteredProducts = filteredProducts.filter((product) =>
      product.riskLevel
        ? product.riskLevel.toLowerCase() === riskLevel.toLowerCase()
        : undefined
    );
  }

  // Filter by interest rate range
  if (interestRateMin || interestRateMax) {
    const min = interestRateMin
      ? parseFloat(interestRateMin)
      : Number.NEGATIVE_INFINITY;
    const max = interestRateMax
      ? parseFloat(interestRateMax)
      : Number.POSITIVE_INFINITY;

    filteredProducts = filteredProducts.filter((product) =>
      product.interestRate
        ? product.interestRate >= min && product.interestRate <= max
        : undefined
    );
  }

  // Return the filtered products as a JSON response
  return NextResponse.json(filteredProducts);
}
