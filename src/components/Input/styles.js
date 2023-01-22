import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 15px;
  padding: 12px 12px;

  > svg {
    margin-right: 12px;
  }

  > input {
    width: 100%;

    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  /* input[type='password']::-ms-reveal,
  input[type='password']::-ms-clear {
    display: none;
  } */
`
