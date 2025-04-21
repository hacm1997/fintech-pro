import styled from "styled-components";

interface TabsProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export const Tabs = ({ categories, activeCategory, onSelectCategory }: TabsProps) => (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-normal space-x-4 overflow-x-auto">
        {categories.map(category => (
            <TabButton
                key={category}
                $active={activeCategory === category}
                onClick={() => onSelectCategory(category)}
            >
                {category}
            </TabButton>
        ))}
    </div>
);

const TabButton = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? "#2563EB" : "#E5E7EB")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
`;
