"use client";
import React from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

/**
 * Props interface for the PerformanceRiskChart component.
 * 
 * @property {("Bajo" | "Medio" | "Alto")} riskLevel - The risk level of the product. 
 * Options are: "Bajo" (Low), "Medio" (Medium), or "Alto" (High).
 * @property {number} interestRate - The interest rate of the product, which represents its performance.
 * @property {string} [name="Producto"] - The name of the product to be displayed on the chart.
 */
interface PerformanceRiskChartProps {
    riskLevel: "Bajo" | "Medio" | "Alto";
    interestRate: number;
    name?: string;
}

/**
 * PerformanceRiskChart component visualizes the relationship between risk level and performance (interest rate)
 * in a scatter chart format. The risk level is represented on the x-axis, and the performance (interest rate) is
 * represented on the y-axis.
 * 
 * @param {PerformanceRiskChartProps} props - The component's props containing the product's risk level, 
 * interest rate, and optional product name.
 * @returns {JSX.Element} - A scatter chart that shows the product's performance vs risk.
 */
export const PerformanceRiskChart: React.FC<PerformanceRiskChartProps> = ({
    riskLevel,
    interestRate,
    name = "Producto",
}) => {
    /**
     * Maps the risk level to a numerical value for positioning on the x-axis.
     * 
     * @param {PerformanceRiskChartProps["riskLevel"]} level - The risk level of the product.
     * @returns {number} - A numerical value corresponding to the risk level.
     */
    const mapRiskLevelToValue = (level: PerformanceRiskChartProps["riskLevel"]) => {
        switch (level) {
            case "Bajo":
                return 20; // Low risk
            case "Medio":
                return 50; // Medium risk
            case "Alto":
                return 80; // High risk
            default:
                return 50; // Fallback to medium if an invalid value is provided
        }
    };

    const data = [{
        risk: mapRiskLevelToValue(riskLevel), // X-axis: Risk level
        performance: interestRate, // Y-axis: Interest rate (performance)
    }];

    return (
        <div className="w-full h-80 bg-[#0A0A0A] rounded-xl p-4">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
                    {/* Grid lines for the chart */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                    {/* X-axis for risk level */}
                    <XAxis
                        type="number"
                        dataKey="risk"
                        name="Nivel de riesgo"
                        stroke="#cbd5e1"
                        domain={[0, 100]} // Max range for risk
                        label={{ value: "Riesgo", position: "insideBottom", fill: "#cbd5e1" }}
                    />
                    {/* Y-axis for performance (interest rate) */}
                    <YAxis
                        type="number"
                        dataKey="performance"
                        name="Rendimiento"
                        stroke="#cbd5e1"
                        domain={[0, 35]} // Max rate according to your products
                        label={{ value: "Rendimiento (%)", angle: -90, position: "insideLeft", fill: "#cbd5e1" }}
                    />
                    {/* Tooltip for displaying data points */}
                    <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        contentStyle={{ backgroundColor: "#1f2937", borderColor: "#2563eb", color: "#f1f5f9" }}
                        labelStyle={{ color: "#2563eb" }}
                        itemStyle={{ color: "#f1f5f9" }}
                        formatter={(value: number, name: string) => [`${value}%`, name]} // Formatting tooltip values
                    />
                    {/* Scatter plot for the data */}
                    <Scatter name={name} data={data} fill="#2563eb" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};
