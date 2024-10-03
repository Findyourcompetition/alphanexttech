'use client';
import { ReactNode } from 'react';
import Modal, { Props } from 'react-modal';

export type LocalModalProps = Props & {
  children?: ReactNode;
  contentClassName?: string;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0px',
    overflow: 'unset',
  },
  overlay: {
    background: '#3C3C43A3',
    backdropFilter: 'blur(1px)',
    zIndex: 10000,
  },
};
const LocalModal = ({
  children,
  contentClassName,
  ...modalProps
}: LocalModalProps) => {
  if (typeof window === 'undefined') return null;

  return (
    <Modal
      style={customStyles}
      ariaHideApp={false}
      {...modalProps}
      appElement={document.getElementById('__next') as HTMLElement}
      className={`
         bg-[#F4EFEE] fixed inset-0
          rounded-[32px] modal-shadow
      `}
    >
      <div className='p-6'>
        <div className={`${contentClassName}`}>
          <div className=' mt-3 h-full'>{children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default LocalModal;
