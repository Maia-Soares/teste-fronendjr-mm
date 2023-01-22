import styled from 'styled-components'

export const Container = styled.header`
  height: 105px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button img {
    object-fit: contain;
    width: 184px;
    margin-left: -18px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${({ title }) => (title ? '24px' : '14px')};
    font-weight: ${({ title }) => (title ? '600' : '400')};
  }
`
