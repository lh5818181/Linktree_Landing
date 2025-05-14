import React from 'react';
import { HeroWrapper, HeroText, HeroTitle, HeroSubtitle, HeroButton, HeroImage } from './Hero.styles';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroText>
      <HeroTitle>
        Link na bio que <span>converte</span>.
      </HeroTitle>
      <HeroSubtitle>
        Crie sua página profissional de links, com visual moderno, responsivo e feito sob medida para destacar seus serviços.
      </HeroSubtitle>
      <HeroButton href="#price">Quero meu link profissional</HeroButton>
    </HeroText>
    <HeroImage src="/assets/mockup-hero.png" alt="Mockup Link na Bio" />
  </HeroWrapper>
);

export default Hero;
