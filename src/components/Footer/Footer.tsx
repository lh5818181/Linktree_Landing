import React from 'react';
import { FooterWrapper, FooterText, FooterLinks, FooterLink, ScrollTopButton } from './Footer.styles';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterText>© {year} devriqueoliver. Todos os direitos reservados.</FooterText>
      <FooterLinks>
        <FooterLink href="#">Política de Privacidade</FooterLink>
        <FooterLink href="#">Termos de Uso</FooterLink>
      </FooterLinks>
      <ScrollTopButton onClick={scrollToTop} aria-label="Voltar ao topo">
        <ArrowUp size={20} />
      </ScrollTopButton>
    </FooterWrapper>
  );
};

export default Footer;
