import styled from '@emotion/styled'

interface BarStyledProps {
    backgroundColor?: string;
}
export const BarStyled = styled.div<BarStyledProps>`
    text-align: center;
    height: 300px;
    background-color: #99A3A4;
    padding: 0%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`