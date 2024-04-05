import styled from "styled-components";

export const PageContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px;

    @media(width < 1280px){
        flex-direction: column;
    }
`