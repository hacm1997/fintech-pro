"use client";
import React from "react";
import { ProducDetailsModel } from "./produc-details.model";
import { Breadcrumbs, PerformanceRiskChart } from "../ui";
import styled from "styled-components";

// Styled Components

/**
 * Styled section component used to wrap the entire content of the product details page.
 * It ensures proper padding and height for the section.
 */
const Section = styled.section.attrs({
    className: "w-full py-8 px-4 min-h-screen",
})``;

/**
 * A container component for the content inside the section.
 * It is used for aligning and spacing the content.
 */
const Container = styled.div.attrs({
    className: "",
})``;

/**
 * Styled component for wrapping the breadcrumb navigation.
 * It ensures proper padding for the breadcrumb section.
 */
const BreadcrumbWrapper = styled.div.attrs({
    className: "pb-6",
})``;

/**
 * Styled component for the title of the page, which is the product name.
 * It uses large font size and bold styling.
 */
const Title = styled.h1.attrs({
    className: "text-4xl font-bold text-white mb-6",
})``;

/**
 * A styled card component used to wrap the product details.
 * It includes a dark background, padding, rounded corners, and a shadow effect.
 */
const Card = styled.div.attrs({
    className: "bg-gray-900/50 p-6 rounded-2xl shadow-lg space-y-6",
})``;

/**
 * A grid component used to layout the product information in two columns for larger screens.
 * It provides spacing between each grid item.
 */
const Grid = styled.div.attrs({
    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
})``;

/**
 * Styled title component for each section within the product details card.
 * It uses a blue color for emphasis.
 */
const SectionTitle = styled.h2.attrs({
    className: "text-lg font-semibold text-[#2563eb] mb-2",
})``;

/**
 * Styled paragraph component for general text in the product details page.
 * It is used to display information such as category, type, and other textual content.
 */
const SectionParagraph = styled.p.attrs({
    className: "text-gray-300",
})``;

/**
 * Styled paragraph component for displaying a more detailed description.
 * It uses a lighter shade of gray and adds extra line spacing for readability.
 */
const DescriptionParagraph = styled.p.attrs({
    className: "text-gray-400 leading-relaxed",
})``;

/**
 * A styled list component to display the product's benefits.
 * Each benefit is rendered as a list item with custom spacing and bullet points.
 */
const BenefitList = styled.ul.attrs({
    className: "list-disc list-inside space-y-2 text-gray-300",
})``;

/**
 * ProductDetails component displays detailed information about a specific product.
 * 
 * - Displays product name, category, type, risk level, interest rate, description, and benefits.
 * - Renders a risk vs. reward chart using the `PerformanceRiskChart` component.
 * - The `Breadcrumbs` component allows navigation back to the catalog.
 * 
 * @param {ProducDetailsModel} product - The product data to be displayed in this page.
 * @returns A detailed view of the product's attributes and related information.
 */
export const ProductDetails = ({ product }: ProducDetailsModel) => {
    const {
        name,
        benefits,
        category,
        description,
        type,
        interestRate,
        riskLevel,
    } = product;

    return (
        <Section>
            <Container>
                <BreadcrumbWrapper>
                    <Breadcrumbs redirect_url="/" title="Volver al catálogo" />
                </BreadcrumbWrapper>

                <Title>{name}</Title>

                <Card>
                    <Grid>
                        <div>
                            <SectionTitle>Categoría</SectionTitle>
                            <SectionParagraph>{category}</SectionParagraph>
                        </div>

                        <div>
                            <SectionTitle>Tipo</SectionTitle>
                            <SectionParagraph>{type}</SectionParagraph>
                        </div>

                        <div>
                            <SectionTitle>Nivel de Riesgo</SectionTitle>
                            <SectionParagraph>
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
                            </SectionParagraph>
                        </div>

                        <div>
                            <SectionTitle>Tasa de Interés</SectionTitle>
                            <SectionParagraph>{interestRate}%</SectionParagraph>
                        </div>
                    </Grid>

                    <div>
                        <SectionTitle>Descripción</SectionTitle>
                        <DescriptionParagraph>{description}</DescriptionParagraph>
                    </div>

                    {benefits && benefits.length > 0 && (
                        <div>
                            <SectionTitle>Beneficios</SectionTitle>
                            <BenefitList>
                                {benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </BenefitList>
                        </div>
                    )}

                    <div>
                        <SectionTitle>Rendimiento vs Riesgo</SectionTitle>
                        <PerformanceRiskChart
                            riskLevel={riskLevel ? riskLevel : "Bajo"}
                            interestRate={Number(interestRate)}
                            name={name}
                        />
                    </div>
                </Card>
            </Container>
        </Section>
    );
};
