import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 24px 34px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    #search {
      width: 364px;
    }

    #options {
      width: auto;
      display: flex;
      align-items: center;
      gap: 12px;

      > button {
        border-radius: 6px;
      }
    }
  }

  > ul {
    margin-top: 24px;

    > li {
      padding: 12px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
      list-style: none;
    }
  }
`
