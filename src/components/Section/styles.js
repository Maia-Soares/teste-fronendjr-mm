import styled from 'styled-components'

export const Container = styled.section`
  margin: 40px 0 28px;

  > h2 {
    padding-bottom: 8px;
    margin-bottom: 5px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`
