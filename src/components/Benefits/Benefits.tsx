import React from 'react';
import { BenefitsSection, BenefitsGrid, BenefitCard, BenefitIcon, BenefitsTitle1, BenefitDesc, BenefitTitle2, BenefitsSubtitle } from './Benefits.styles';
import { Grid, BarChart2, Eye } from 'lucide-react';

const items = [
  { icon: <Grid size={32} />, title: 'Centralize seus links', desc: 'Todas as suas redes num só lugar.' },
  { icon: <BarChart2 size={32} />, title: 'Aumente engajamento', desc: 'Mais cliques em menos tempo.' },
  { icon: <Eye size={32} />, title: 'Visual único', desc: 'Alinhado à sua marca e personalidade.' },
];

const Benefits: React.FC = () => (
  <BenefitsSection>
    <BenefitTitle2>
      Maximize Seu <span>Impacto Digital</span>
    </BenefitTitle2>
    <BenefitsSubtitle>
      Descubra como nossa solução de link na bio pode impulsionar sua presença online.
    </BenefitsSubtitle>
    <BenefitsGrid>
      {items.map((b, i) => (
        <BenefitCard key={i}>
          <BenefitIcon>{b.icon}</BenefitIcon>
          <BenefitsTitle1>{b.title}</BenefitsTitle1>
          <BenefitDesc>{b.desc}</BenefitDesc>
        </BenefitCard>
      ))}
    </BenefitsGrid>
  </BenefitsSection>
);

export default Benefits;
