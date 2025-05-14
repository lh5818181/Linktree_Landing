import styled from 'styled-components';

export const StepsSection = styled.section`
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

export const StepsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const StepCard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.75rem;
  padding: 2rem;
  transition: box-shadow 0.3s;
  &:hover { box-shadow: 0 10px 20px rgba(0,191,255,0.15); }
`;

export const StepIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const StepDesc = styled.p`
  color: ${({ theme }) => theme.colors.white}CC;
  font-size: 0.9rem;
`;
