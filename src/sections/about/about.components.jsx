import React from 'react'

import {
    AboutContainer,
    AboutHeader,
    ContentsContainer,
    TextContainer,
    DescriptionContainer,
    Description,
    ListOuterContainer,
    ListContainer,
    List,
    ImageContainer
} from './about.styles'

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>About Me</AboutHeader>
            <ContentsContainer>
            <TextContainer>
                <DescriptionContainer>
                    <Description>Hi! I'm Jake, a software engineer based in New York, NY who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</Description>
                    <Description>Shortly after graduating from Stony Brook University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</Description>
                    <Description>Here are a few technologies I've been working with recently:</Description>
                </DescriptionContainer>
                <ListOuterContainer>
                    <ListContainer>
                        <List>Javascript (ES6+)</List>
                        <List>React</List>
                        <List>Redux</List>
                        <List>HTML & (S)CSS</List>
                    </ListContainer>
                    <ListContainer>
                        <List>C#</List>
                        <List>.NET MVC</List>
                    </ListContainer>
                </ListOuterContainer>
            </TextContainer>
            <ImageContainer>

            </ImageContainer>
            </ContentsContainer>
        </AboutContainer>
    )
}

export default About