'use client';

import Image from 'next/image';
import LocalModal from '../local-modal/page';
import { useState } from 'react';
import { toast } from 'react-toastify';

type RequestCallModalProps = {
  show: boolean;
  onClose: () => void;
  phoneNumber: string;
  countryCode: string;
};

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
};

const GOOGLE_SHEETS_URL =
  'https://docs.google.com/spreadsheets/d/1y3anfChdnc2oX3oV7CeMb44xnn8t4tReogOm62tiy5I/edit?gid=0#gid=0';

const RequestCallModal = ({
  onClose,
  show,
  phoneNumber,
  countryCode,
}: RequestCallModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber,
    countryCode,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) return;
    setLoading(true);
    try {
      const fullPhoneNumber = `${
        formData.countryCode
      }${formData.phoneNumber.replace(/\D/g, '')}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { countryCode: _, ...dataWithoutCountryCode } = formData;

      const payload = {
        ...dataWithoutCountryCode,
        phoneNumber: fullPhoneNumber,
      };

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      toast.success('Your details have been submitted successfully');
      onClose();
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
      <div className='flex flex-col items-center max-w-[500px]'>
        <h2 className='text-lg sm:text-2xl font-bold text-center'>
          Enter your details, and our AI agent will give you a call within five
          minutes.
        </h2>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Enter your name'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-10 text-[16px] sm:text-xl sm:font-medium'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Enter your email'
          className='bg-[#DEDEDE] outline-none w-full h-[58px] rounded-[16px] placeholder:text-[#1E1E1E33] px-3 py-2 mt-8 text-[16px] sm:text-xl sm:font-medium'
        />

        <div className='flex flex-col text-xl items-center font-medium mt-10'>
          <button
            disabled={!formData.name || !formData.email || loading}
            onClick={handleSubmit}
            className='w-[300px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow flex items-center justify-center gap-1 disabled:cursor-not-allowed'
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
      </div>
    </LocalModal>
  );
};

export default RequestCallModal;
