import { Container } from "./styles";
import { FilterContainer, CategoryContainer, CategoryContent, NextButton } from "./styles";

function FilterComponent() {
    return (
        <Container>
            <FilterContainer>
                <CategoryContainer>
                    {/* <CategoryContent>
                        All
                    </CategoryContent>
                    <CategoryContent>
                        Computer programming
                    </CategoryContent>
                    <CategoryContent>
                        Podcasts
                    </CategoryContent>
                    <CategoryContent>
                        Gaming
                    </CategoryContent>
                    <CategoryContent>
                        Music
                    </CategoryContent>
                    <CategoryContent>
                        Recording
                    </CategoryContent>
                    <CategoryContent>
                        Live
                    </CategoryContent>
                    <CategoryContent>
                        Mixes
                    </CategoryContent>
                    <CategoryContent>
                        Entrepreneurship
                    </CategoryContent>
                    <CategoryContent>
                        Game shows
                    </CategoryContent>
                    <CategoryContent>
                        Lo-fi
                    </CategoryContent>
                    <CategoryContent>
                        Live television
                    </CategoryContent> */}
                    
                    <NextButton />
                </CategoryContainer>
            </FilterContainer>
        </Container>
        
    )
}
export default FilterComponent;