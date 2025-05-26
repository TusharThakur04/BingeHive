import { styled } from "styled-components";
import { media } from "../../styles/theme/theme";

export const FooterWrapper = styled.footer`
    padding-top: 60px;
    padding-left:30px;
    padding-right:10px;


    ${media.xl`
        padding-top: 40px;
        padding-left:20px;
    `}

   ${media.lg`
        padding-top: 30px;
        padding-left:10px;
    `}

    ${media.sm`
        padding-top: 20px;
        padding-left:5px;
    `}

    .footer-top {
    margin-bottom: 60px;

    ${media.lg`
        margin-bottom: 40px;
    `}

    .footer-list{
    grid-template-columns: repeat(6,1fr);
    gap:20px

    ${media.xl`
        grid-template-columns: repeat(3, 1fr);
        
    `}

  ${media.sm`
        grid-template-columns: repeat(2, 1fr);
    `}
    
    ${media.xs`
        grid-template-columns: 100%;
        text-align: center;
    `}



    }








`;
export const FooterItemWrapper = styled.div``;
