import React from 'react';
import { CTASection, CTAText, CTAButton } from './CTA.styles';

const CTA: React.FC = () => (
  <CTASection>
    <CTAText>Pronto para profissionalizar seu perfil?</CTAText>
    <CTAButton href="https://wa.me/5581999429143?text=Quero%20meu%20link%20único!">Me chamar no WhatsApp</CTAButton>
  </CTASection>
);

export default CTA;
