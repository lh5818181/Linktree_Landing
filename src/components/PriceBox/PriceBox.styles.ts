import styled from 'styled-components';

export const PriceSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 1rem;
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 3rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
`;

export const PriceTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const PriceValue = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.white}CC;
`;
