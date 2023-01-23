import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 32px;

  > input {
    width: 100%;
    padding: 12px;
    margin-bottom: 24px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }

  #Location,
  #Periods {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

    > input {
      margin: 12px;
    }
  }

  > button {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BLUE};

    width: 152px;
    padding: 12px;
    margin-top: 24px;
    margin-left: 52px;

    border-radius: 6px;
  }
`
