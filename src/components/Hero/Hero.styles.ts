import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    padding: 2rem 8rem;
  }
`;

export const HeroText = styled.div`
  max-width: 600px;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  span { color: ${({ theme }) => theme.colors.primary}; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.white}CC;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  animation: ${fadeUp} 0.8s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeroImage = styled.img`
  margin-top: 3rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  animation: ${fadeUp} 1s ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
    width: 40%;
  }
`;
