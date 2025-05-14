import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 4rem 1rem;
  text-align: center;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const CTAText = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const CTAButton = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
