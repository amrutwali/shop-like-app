import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--white);
    border-bottom: 1px solid var(--medGrey);
    height: 70px;  
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    height: inherit;
    position: relative;
    display: flex;
    align-items: center;
    
    span {
        padding:  10px;
    }

    input {
        height: auto;
        width: 400px;
        padding: 10px;
        float: left;
        border: none;
        background-color: var(--medGrey);
        border-radius: 5px;
        font-weight: 400;

        :focus {
            outline: none;
        }
    }

    button {
        padding: 10px;
        min-width: 80px;
        float: right;
        background: var(--secondary);
        color: var(--white);
        border-radius: 10px;
        box-shadow: rgba(66, 200, 183, 0.4) 0px 3px 8px;
        border: none;
        
        :hover {
            cursor: pointer;
        }
        
        :active {
            transform: scale(0.95);
            background-color: rgba(66, 200, 183, 0.4);
        }
    }

`;

export const LogoImg = styled.div`
    width: 140px;
    height: 45px;
    float: left;
    background: var(--secondary);
    border-radius: ${45/2}px;
    margin-right: 20px;
`;


