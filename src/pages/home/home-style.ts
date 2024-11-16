import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div<ContainerProps>`
  width: ${({openMenu}) => openMenu? 'calc(100% - 260px)' : 'calc(100% - 100px)'};
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '20px 10px' : '20px 10px'};
  margin-left: ${({openMenu}) => openMenu? '260px' : '100px'};
  box-sizing: border-box;
  position: absolute;
  top: 102px;

  @media(max-width: 834px) {
    padding: 140px 10px 0 100px;
  }

  @media(max-width: 688px) {
    padding: 140px 60px 0 150px;
  }

  @media(max-width: 414px) {
    padding: 140px 20px 0 20px;
  }
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;

  @media(max-width: 1024px) {
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }

  @media(max-width: 834px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media(max-width: 688px) {
    grid-template-columns: repeat(1, 1fr)
  }

`;