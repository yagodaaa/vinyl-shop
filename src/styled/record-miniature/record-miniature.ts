import styled from '@emotion/styled'

interface RecordMiniatureProps {
    backgroundColor?: string;
}
export const RecordMiniatureStyled = styled.div<RecordMiniatureProps>`
    background-color: #DADADA;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    box-shadow: 0px 1px 10px black;
`