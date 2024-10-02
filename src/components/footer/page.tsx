import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#BC5238] p-5 sm:py-10 sm:px-16 '>
      <div className='flex text-white w-full justify-between items-center border-b border-b-[#F4EFEE] pb-5'>
        <div className='flex gap-6'>
          <Image
            src={'/images/linkedin.svg'}
            alt='linkedin'
            width={24}
            height={24}
            className='cursor-pointer'
          />
          <Image
            src={'/images/sms.svg'}
            alt='linkedin'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </div>
        <div>
          <Image
            src={'/images/logo.svg'}
            alt='logo'
            width={89}
            height={40}
            className='object-cover text-white filter brightness-0 invert'
          />
        </div>
        <div>
          <p className='text-[16px] font-medium '>About us</p>
        </div>
      </div>

      <div className='text-white flex justify-between pt-5'>
        <div className='flex gap-1'>
          <Image
            src={'/images/copyright.svg'}
            alt='copyright'
            width={12}
            height={12}
            className='cursor-pointer'
          />
          <p className='text-[10px] font-medium'>2024 ALPHANEXTTECH.</p>
        </div>
        <div>
          <p className='text-[10px] font-medium'>allrightsreserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
