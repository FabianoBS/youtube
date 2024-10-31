import { Container } from "./styles";
import { FilterContainer, CategoryContainer, CategoryContent, NextButton } from "./styles";
import { useState } from "react";

function FilterComponent() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Computer programming",
        "Podcasts",
        "Gaming",
        "Music",
        "Recording",
        "Live",
        "Mixes",
        "Entrepreneurship",
        "Game shows",
        "Lo-fi",
        "Live television",
    ];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <Container>
            <FilterContainer>
                <CategoryContainer>
                    {categories.map((category) => (
                        <CategoryContent
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            style={{
                                backgroundColor: selectedCategory === category ? '#000' : 'rgba(0, 0, 0, 0.05)',
                                color: selectedCategory === category ? '#fff' : '#000',
                            }}
                        >
                            {category}
                        </CategoryContent>
                    ))}
                    
                    <NextButton />
                </CategoryContainer>
            </FilterContainer>
        </Container>
        
    )
}
export default FilterComponent;