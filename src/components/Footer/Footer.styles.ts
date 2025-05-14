import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.white}80;
  font-size: 0.9rem;
`;

export const FooterLinks = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white}80;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ScrollTopButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
