import Image from 'next/image';
import LocalModal from '../local-modal/page';

type RequestCallModalProps = {
  show: boolean;
  onClose: () => void;
};
const RequestCallModal = ({ onClose, show }: RequestCallModalProps) => {
  return (
    <LocalModal
      isOpen={show}
      contentClassName='w-[85vw] md:w-[728px] md:h-[559px] p-6 flex flex-col items-center'
    >
      <div className='flex flex-col items-center max-w-[500px]'>
        <h2 className='text-lg sm:text-2xl font-bold text-center'>
          Enter your details, and our AI agent will give you a call within five
          minutes.
        </h2>
        <input
          type='text'
          placeholder='Enter your name'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-10 text-[16px] sm:text-xl sm:font-medium'
        />
        <input
          type='text'
          placeholder='Enter your email'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-8 text-[16px] sm:text-xl sm:font-medium'
        />

        <div className='flex flex-col text-xl items-center font-medium mt-10'>
          <button className='w-[300px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow flex items-center justify-center gap-1'>
            <Image src={'/images/cell.svg'} alt='cell' width={20} height={20} />
            <p>Call me</p>
          </button>
          <button
            onClick={onClose}
            className='w-[300px] h-[58px] bg-transparent  text-[#BC5238] mt-5'
          >
            Go back
          </button>
        </div>
      </div>
    </LocalModal>
  );
};

export default RequestCallModal;
