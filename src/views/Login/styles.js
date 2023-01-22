import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  > img {
    object-fit: contain;
    width: 184px;
    position: fixed;
    top: 14px;
    left: 24px;
  }
`

export const Form = styled.form`
  width: 580px;
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 28px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url('/assets/img-principal.svg') no-repeat center center;
  background-size: cover;
`

export const HStack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  a {
    font-size: 12px;
    line-height: 3px;

    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
