import React from 'react';
import { StepsSection, StepsGrid, StepCard, StepIcon, StepTitle, StepDesc } from './Steps.styles';
import { MessageCircle, Calendar, CheckSquare } from 'lucide-react';

const steps = [
  { icon: <MessageCircle size={28} />, title: 'Briefing rápido', desc: 'Você envia referências e objetivos via WhatsApp.' },
  { icon: <Calendar size={28} />, title: 'Criação em 48h', desc: 'Seu link pronto e revisado em até 2 dias.' },
  { icon: <CheckSquare size={28} />, title: 'Publicação', desc: 'Receba o link final e comece a usar.' },
];

const Steps: React.FC = () => (
  <StepsSection>
    <h2>Como funciona</h2>
    <StepsGrid>
      {steps.map((s, i) => (
        <StepCard key={i}>
          <StepIcon>{s.icon}</StepIcon>
          <StepTitle>{s.title}</StepTitle>
          <StepDesc>{s.desc}</StepDesc>
        </StepCard>
      ))}
    </StepsGrid>
  </StepsSection>
);

export default Steps;
