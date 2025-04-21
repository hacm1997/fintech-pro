export interface Product {
  id: string;
  name: string;
  type: "Cuenta" | "Tarjeta" | "Fondo" | "Seguro";
  interestRate?: number;
  category: string;
  riskLevel?: "Bajo" | "Medio" | "Alto";
  description: string;
  benefits: string[];
}
