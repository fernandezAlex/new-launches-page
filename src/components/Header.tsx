import React from "react";
import styled from 'styled-components';
import imgMobile from "../img/header/header_new_launches_xss.jpg";
import imgTablet from "../img/header/header_new_launches_xs.jpg";
import imgDesktop from "../img/header/header_new_launches_m.jpg";
import imgDesktopXL from "../img/header/header_new_launches_l.jpg";

export const Header = ({data}) => {
    return (
        <HeaderContainer>
            <TitleContainer>
                <Container>
                    <Title>{data.text}</Title>
                </Container>
            </TitleContainer>
        </HeaderContainer>
    )
}
const HeaderContainer = styled.div`
    background-image: url(${imgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 100%;
    font-size: ${props => props.theme.fontSize.h3.fontSize};
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        background-image: url(${imgDesktop});
        height: 450px;
    }     
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        background-image: url(${imgDesktop});
        height: 600px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktopXL}) {
        background-image: url(${imgDesktopXL});
        height: 800px;
    }    
`
const TitleContainer = styled.div`
    margin-bottom: -50px;
    border-radius: 6px;
    z-index: 1;
    padding: 0 0 0 0;
    align-items: center;
    display: flex;
    padding-right: 8%;
    max-width: 1472px;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        padding-right: 0%;
    }    
`
const Container = styled.div`
    max-width: 1472px;
    background-color: #fff;
    box-sizing: border-box;
    color: black;
    padding: 24px;
    position: relative;
    width: 100%;
    z-index: 2;
    border-radius: 4px;
    box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.07);
    &::after {
        content: " ";
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        z-index: -1;
        -webkit-transform: skew(-19.7deg);
        -ms-transform: skew(-19.7deg);
        transform: skew(-19.7deg);
        height: 100%;
        right: -50px;
        border-top-right-radius: 6.4px;
        border-bottom-right-radius: 32px;
        box-shadow: 8px 0 8px 0 rgba(0, 0, 0, 0.07);
        background: #fff;
    }
`
const Title = styled.h2`
    font-family: ${props => props.theme.font.headline}; 
    color:  ${props => props.theme.color.dark};
    margin: 16px 6px;
`
