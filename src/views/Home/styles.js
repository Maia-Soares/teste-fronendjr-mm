import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 800px;
  height: 100%;
  margin: auto;

  text-align: center;
  list-style: none;
  padding: 24px 46px 0;

  > h1 {
    margin-top: 64px;
    margin-bottom: 28px;
  }

  > div {
    width: 100%;
    height: 319px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    button {
      height: 100%;
      width: 184px;

      border: 4px solid #d3d3d3;
      border-radius: 24px;

      color: ${({ theme }) => theme.COLORS.BLACK};

      font-size: 24px;
      font-weight: 700;
    }
  }

  > div button:hover {
    border-color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > footer a {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url('/assets/img-principal.svg') no-repeat center center;
  background-size: cover;
`
