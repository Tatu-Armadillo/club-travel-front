import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root { 
        background-color: ${props => props.theme.colors.primaryBg};
    }
    
    main {
        min-height: calc(100vh - 149px);
    }
`;