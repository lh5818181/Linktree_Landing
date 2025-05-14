import React from 'react';
import { BenefitsSection, BenefitsGrid, BenefitCard, BenefitIcon, BenefitTitle, BenefitDesc } from './Benefits.styles';
import { Grid, BarChart2, Eye } from 'lucide-react';

const items = [
  { icon: <Grid size={32} />, title: 'Centralize seus links', desc: 'Todas as suas redes num só lugar.' },
  { icon: <BarChart2 size={32} />, title: 'Aumente engajamento', desc: 'Mais cliques em menos tempo.' },
  { icon: <Eye size={32} />, title: 'Visual único', desc: 'Alinhado à sua marca e personalidade.' },
];

const Benefits: React.FC = () => (
  <BenefitsSection>
    <h2>Por que um link único?</h2>
    <BenefitsGrid>
      {items.map((b, i) => (
        <BenefitCard key={i}>
          <BenefitIcon>{b.icon}</BenefitIcon>
          <BenefitTitle>{b.title}</BenefitTitle>
          <BenefitDesc>{b.desc}</BenefitDesc>
        </BenefitCard>
      ))}
    </BenefitsGrid>
  </BenefitsSection>
);

export default Benefits;
