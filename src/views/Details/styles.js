import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 500px;

  > div {
    margin-top: 300px;
    display: flex;
    flex-direction: column;

    > div {
      position: absolute;
      margin-left: -72px;
      margin-top: 34px;
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
export const PageBack = styled(Link)`
  margin-top: 30px;
  width: 300px;
`
