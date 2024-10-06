'use client';

import Image from 'next/image';
import LocalModal from '../local-modal/page';
import { useState } from 'react';
import { toast } from 'react-toastify';

type RequestCallModalProps = {
  show: boolean;
  onClose: () => void;
  PhoneNumber: string;
  countryCode: string;
};

type FormData = {
  UserName: string;
  Email: string;
  PhoneNumber: string;
  countryCode: string;
};

const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!;

const RequestCallModal = ({
  onClose,
  show,
  PhoneNumber,
  countryCode,
}: RequestCallModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    UserName: '',
    Email: '',
    PhoneNumber,
    countryCode,
  });

  const disableSubmit = !formData.UserName || !formData.Email || loading;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.UserName || !formData.Email) return;
    setLoading(true);

    const fullPhoneNumber = `${
      formData.countryCode
    }${formData.PhoneNumber.replace(/\D/g, '')}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { countryCode: _, ...dataWithoutCountryCode } = formData;

    const payload = {
      ...dataWithoutCountryCode,
      PhoneNumber: fullPhoneNumber,
    };
    const params = new URLSearchParams(payload);
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const result = await response.json();
      console.log(result, 'response');
      if (result.result === 'success') {
        toast.success('Your details have been submitted successfully');
        onClose();
      } else {
        toast.error('Failed to submit your details');
      }
    } catch (error) {
      console.error('Error submitting your email', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalModal
      isOpen={show}
      contentClassName='w-[85vw] md:w-[728px] md:h-[559px] p-6 flex flex-col items-center'
    >
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center max-w-[500px]'
      >
        <h2 className='text-lg sm:text-2xl font-bold text-center'>
          Enter your details, and our AI agent will give you a call within five
          minutes.
        </h2>
        <input
          type='text'
          name='name'
          required
          value={formData.UserName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, UserName: e.target.value }))
          }
          placeholder='Enter your name'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-10 text-[16px] sm:text-xl sm:font-medium'
        />
        <input
          type='email'
          name='email'
          required
          value={formData.Email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, Email: e.target.value }))
          }
          placeholder='Enter your email'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-8 text-[16px] sm:text-xl sm:font-medium'
        />

        <div className='flex flex-col text-xl items-center font-medium mt-10'>
          <button
            type='submit'
            disabled={disableSubmit}
            className={` ${
              disableSubmit ? 'cursor-not-allowed opacity-70' : ''
            } w-[300px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow flex items-center justify-center gap-1 `}
          >
            <Image src={'/images/cell.svg'} alt='cell' width={20} height={20} />
            <p>{loading ? 'Loading...' : 'Call me'}</p>
          </button>
          <button
            onClick={onClose}
            className='w-[300px] h-[58px] bg-transparent  text-[#BC5238] mt-5'
          >
            Go back
          </button>
        </div>
      </form>
    </LocalModal>
  );
};

export default RequestCallModal;
