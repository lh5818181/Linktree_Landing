import React from 'react';
import { PriceSection, PriceContainer, PriceTitle, PriceValue, PriceText } from './PriceBox.styles';

const PriceBox: React.FC = () => (
  <PriceSection id="price">
    <PriceContainer>
      <PriceTitle>Investimento</PriceTitle>
      <PriceValue>R$300</PriceValue>
      <PriceText>Entrega garantida em até 48h após briefing.</PriceText>
    </PriceContainer>
  </PriceSection>
);

export default PriceBox;
