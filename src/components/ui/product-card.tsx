"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

/**
 * Props interface for the ProductCard component.
 * 
 * @property {string} id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 * @property {"Cuenta" | "Tarjeta" | "Fondo" | "Seguro"} type - The type of the product, which can be "Cuenta" (Account), "Tarjeta" (Card), "Fondo" (Fund), or "Seguro" (Insurance).
 * @property {number} [interestRate] - The interest rate of the product (optional).
 * @property {string} [category] - The category of the product (optional).
 * @property {"Bajo" | "Medio" | "Alto"} [riskLevel] - The risk level of the product, which can be "Bajo" (Low), "Medio" (Medium), or "Alto" (High) (optional).
 */
export interface Props {
    id: string;
    name: string;
    type: "Cuenta" | "Tarjeta" | "Fondo" | "Seguro";
    interestRate?: number;
    category?: string;
    riskLevel?: "Bajo" | "Medio" | "Alto";
}

// Styled Components with Tailwind
const CardWrapper = styled.div.attrs({
    className:
        "w-[320px] sm:w-[340px] bg-[#131212] p-4 rounded-[5px] border border-transparent hover:border-[#2563eb]",
})``;

const Group = styled.div.attrs({
    className: "group relative",
})``;

const Title = styled.h2.attrs({
    className: "text-white text-lg font-semibold",
})``;

const InfoTitle = styled.h3.attrs({
    className: "text-sm text-gray-300",
})``;

const InfoText = styled.p.attrs({
    className: "mt-1 text-sm text-gray-300",
})``;

const InterestRate = styled.p.attrs({
    className: "text-sm text-gray-500 font-semibold",
})``;

/**
 * ProductCard component displays a card with information about a financial product.
 * The card includes the product's name, type, interest rate, risk level, and category.
 * Clicking on the card navigates to the detailed product page.
 * 
 * @param {Props} props - The props containing product details to be displayed.
 * @returns {JSX.Element} - A styled card containing product information.
 */
export const ProductCard = ({
    id,
    name,
    interestRate,
    type,
    riskLevel,
    category,
}: Props) => {
    return (
        <Link href={`/product/${id}`} title={name} className="cursor-pointer">
            <CardWrapper>
                <Group>
                    <Title>{name}</Title>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <InfoTitle>
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                Tasa de interés
                            </InfoTitle>
                            <InfoText>Categoría: {category}</InfoText>
                            <InfoText>Tipo: {type}</InfoText>
                            <InfoText>
                                Nivel de riesgo:{" "}
                                <span
                                    className={
                                        riskLevel === "Bajo"
                                            ? "text-green-500"
                                            : riskLevel === "Medio"
                                                ? "text-yellow-300"
                                                : "text-red-500"
                                    }
                                >
                                    {riskLevel}
                                </span>
                            </InfoText>
                        </div>
                        <InterestRate>{interestRate}%</InterestRate>
                    </div>
                </Group>
            </CardWrapper>
        </Link>
    );
};
