import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  height: 56px;
  border: 0;
  padding: 0 16px;
  font-weight: 500;
  border-radius: 20px;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
  }
`
