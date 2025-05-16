import React from 'react';
import { HeroWrapper, HeroText, HeroTitle, HeroSubtitle, HeroButton, HeroImage } from './Hero.styles';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroText>
      <HeroTitle>
        Link na bio que <span>converte</span>.
      </HeroTitle>
      <HeroSubtitle>
       Transforme seu perfil do Instagram com uma página de links personalizada, profissional e otimizada para engajamento e apresentação de serviços.
      </HeroSubtitle>
      <HeroButton href="#price">Quero meu link profissional</HeroButton>
    </HeroText>
    <HeroImage src="./assets/Mockup-smartphone.png" alt="Mockup Link na Bio" />
  </HeroWrapper>
);

export default Hero;
