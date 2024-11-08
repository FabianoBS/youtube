import { Container, BackButton, FilterContainer, CategoryContainer, CategoryContent, NextButton, ImgBackButton, ImgNextButton } from "./styles";
import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import BackButtonImg from '../../assets/home/back-button.png';
import NextButtonImg from '../../assets/home/next-button.png';
import { isVisible } from "@testing-library/user-event/dist/utils";

interface IProps {
    openMenu: boolean;
}

function FilterComponent({ openMenu }: IProps) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const categoryContainerRef = useRef<HTMLDivElement | null>(null);
    const { user } = useContext(UserContext);

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
        "News",
        "Science",
        "Education",
        "Relationship"
    ];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const handleScroll = () => {
        if (categoryContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoryContainerRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        const container = categoryContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [categoryContainerRef]);
    
    const handleBackClick = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({
                left: -200,
                behavior: "smooth"
            });
        }
    };

    const handleNextClick = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({
                left: 200,
                behavior: "smooth"
            });
        }
    };

    return (
        <Container openMenu={openMenu}>
            <FilterContainer>
                <BackButton onClick={handleBackClick} isVisible={!isAtStart}>
                    <ImgBackButton src={BackButtonImg} alt="Back Button" />
                </BackButton>
                <CategoryContainer ref={categoryContainerRef}>
                    {categories.map((category) => (
                        <CategoryContent
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            style={{
                                backgroundColor: selectedCategory === category ? '#000' : 'rgba(0, 0, 0, 0.05)',
                                color: selectedCategory === category ? '#fff' : '#000',
                            }}>
                            {category}
                        </CategoryContent>
                    ))}
                </CategoryContainer>
                <NextButton onClick={handleNextClick} isVisible={!isAtEnd}>
                    <ImgNextButton src={NextButtonImg} alt="Next Button" />
                </NextButton>
            </FilterContainer>
        </Container>
    );
}

export default FilterComponent;
