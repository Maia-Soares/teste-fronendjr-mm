import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Fade, ContentModal } from './styles';

export function Modal({ onClose, title, icon: Icon, customContent: CustomContent }) {
  return (
    <Container>
      <Fade onClick={onClose}/>

      <ContentModal>
        <div className='header-modal'>
          <div>
            <span>{title}</span>
            {Icon && <Icon size={20} />}
          </div>

          <button onClick={onClose}>
            <AiOutlineClose size={28} />
          </button>
        </div>

        {CustomContent && <CustomContent/>}
      </ContentModal>
    </Container>
  );
}
