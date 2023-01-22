import styled, { keyframes }  from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Fade = styled.button`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0,0,0,0.45);
`;

const ModalAnimation = keyframes`  
  from { 
    transform: translateX(40vw);
  }
  to { 
    transform: translateX(0);
  }
`;

export const ContentModal = styled.div`
  width: 40vw;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;

  background: white;
  animation: ${ModalAnimation} 1500ms;
  padding: 24px 38px 24px 24px;

  div.header-modal {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-weight: 600;
      }

      svg {

      }
    }

    button {
      
    }
  }
`;