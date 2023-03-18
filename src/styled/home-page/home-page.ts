import styled from '@emotion/styled'

interface HomePageStyledProps {
    backgroundColor?: string;
}
export const HomePageStyled = styled.div<HomePageStyledProps>`
    text-align: center;
    background-color: #616A6B;
    width: 100%;
    display: grid;
    padding-top: 20px;
    padding-bottom: 20px;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
`