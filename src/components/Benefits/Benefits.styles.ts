import styled from 'styled-components';

export const BenefitsSection = styled.section`
  padding: 4rem 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h2 { font-size: 2.5rem; }
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BenefitCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.75rem;
  padding: 2rem;
  transition: box-shadow 0.3s;
  &:hover { box-shadow: 0 10px 20px rgba(0,191,255,0.15); }
`;

export const BenefitIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const BenefitDesc = styled.p`
  color: ${({ theme }) => theme.colors.white}CC;
  font-size: 0.9rem;
`;
