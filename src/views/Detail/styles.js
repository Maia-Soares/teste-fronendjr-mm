import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 500px;
  text-align: justify;

  > div {
    margin-top: 32px;
    display: flex;
    flex-direction: column;

    > p {
      margin-top: 12px;
      padding-left: 84px;
    }

    > div {
      position: absolute;
      margin-left: -2px;
      margin-top: 72px;
      border-radius: 50%;
      overflow: hidden;

      width: 64px;
      height: 64px;

      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        position: absolute;
        width: 124px;
        height: 124px;
      }
    }
  }

  > section a {
    display: flex;
  }
`
export const PageBack = styled.div`
  width: 300px;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
`
