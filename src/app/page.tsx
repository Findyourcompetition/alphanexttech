'use client';

import Footer from '@/components/footer/page';
import RequestCallModal from '@/components/request-call-modal/page';
import {
  countryCodes,
  csUseCases,
  marketingUseCases,
  operationsUseCases,
  packages,
} from '@/utils/data';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

type CountryCode = {
  flag: string;
  code: string;
  country: string;
};

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    countryCodes[0]
  );
  const [isActive, setIsActive] = useState(false);
  const [showRequestCallModal, setShowRequestCallModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value.trim() !== '') {
      setShowErrorMessage(false);
    }
  };
  const handleRequestCall = () => {
    if (phoneNumber.trim() === '') {
      setShowErrorMessage(true);
    } else {
      setShowRequestCallModal(true);
      setShowErrorMessage(false);
    }
  };

  return (
    <div className='bg-[#F4EFEE] w-full h-full'>
      <div className='p-5 sm:px-16'>
        <Image
          src={'/images/logo.svg'}
          alt='logo'
          width={89}
          height={40}
          className='object-cover'
        />
      </div>

      <main>
        <div className='flex flex-col items-center justify-center mt-16 p-5 sm:px-16'>
          <div className=' mb-5'>
            <Image
              src={'/images/image5.png'}
              alt='call'
              width={328}
              height={51}
              className=''
            />
          </div>
          <h1 className='helvetica font-bold text-3xl leading-[32.2px] sm:text-5xl max-w-[800px] text-center'>
            Never Miss a Customer&apos;s Call Again
          </h1>
          <div className='mt-14 mb-10'>
            <Image
              src={'/images/iphone.png'}
              alt='iphone'
              width={430}
              height={877}
              className=''
            />
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center py-1 '>
          <div className='relative px-5 md:px-16'>
            <div className='bg-[#E8E5E5] w-[93vw] md:w-[684px] h-[66px] rounded-[16px] flex py-4 pl-6 text-lg font-medium items-center '>
              <div
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  setIsActive(!isActive);
                }}
                className={`flex gap-1 rounded-lg items-center p-1 cursor-pointer transition-colors duration-200 w-[118px] ${
                  isActive ? 'bg-[#CBCBCB]' : ''
                }`}
              >
                <Image
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.country} flag`}
                  width={35}
                  height={24}
                  className='object-cover'
                />
                <p className=''>{selectedCountry.code}</p>
                <MdOutlineKeyboardArrowUp size={24} />
              </div>
              <input
                type='tel'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder='Enter your phone number'
                className='outline-none w-full md:w-[342px] h-[26px] bg-transparent pl-1 pr-5'
              />

              <button
                onClick={handleRequestCall}
                className='w-[200px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow hidden md:flex items-center justify-center'
              >
                Request a call
              </button>
            </div>
            {showErrorMessage && (
              <p className='text-red-600 text-center text-xs mt-2'>
                Please enter a valid phone number
              </p>
            )}

            {showDropdown && (
              <div className=' absolute bg-[#E8E5E5] p-4 rounded-[16px] w-[330px] mt-2 z-10'>
                {countryCodes.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleCountrySelect(item);
                      setIsActive(false);
                    }}
                    className={`cursor-pointer grid grid-cols-10 ${
                      index === 0
                        ? 'pb-3'
                        : index === countryCodes.length - 1
                        ? 'pt-3'
                        : 'py-3'
                    } ${
                      index !== countryCodes.length - 1
                        ? 'border-b border-b-[#CFCFCF]'
                        : ''
                    }`}
                  >
                    <div className=' col-span-3 flex items-center gap-1 mr-5'>
                      <div className='w-[35px] h-[24px]'>
                        <Image
                          src={item.flag}
                          alt={`${item.country} flag`}
                          width={35}
                          height={24}
                          className='object-cover'
                        />
                      </div>

                      <p className=''>{item.code}</p>
                    </div>

                    <div className='col-span-7 flex items-center'>
                      {item.country}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className='flex justify-center'>
              <button
                onClick={handleRequestCall}
                className='w-[200px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow md:hidden mt-6'
              >
                Request a call
              </button>
            </div>
          </div>
          <div className='max-w-[900px] mt-[150px] px-5 sm:px-16'>
            <p className=' text-xl sm:text-4xl text-center'>
              We{' '}
              <span className='font-bold text-[#BC5238] italic'>
                build and manage AI-agents
              </span>{' '}
              that can handle over 1,000 incoming & outgoing calls at the same
              time.
            </p>

            <div className='flex justify-center py-14 items-center'>
              <Image
                src={'/images/avatar1.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover w-[40px] h-[40px] sm:w-[100px] sm:h-[100px]'
              />
              <Image
                src={'/images/avatar2.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover sm:ml-[-30px] ml-[-15px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'
              />
              <Image
                src={'/images/avatar3.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover sm:ml-[-30px] ml-[-15px] w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]'
              />
              <Image
                src={'/images/avatar4.png '}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover sm:ml-[-30px] ml-[-15px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'
              />
              <Image
                src={'/images/avatar5.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover sm:ml-[-30px] ml-[-15px] w-[40px] h-[40px] sm:w-[100px] sm:h-[100px]'
              />
            </div>
          </div>
          <p className='text-[16px] sm:text-3xl font-medium text-center mb-16 dm-sans'>
            Tailored to your business, with human-like voices and multilingual
            capabilities.
          </p>

          <div className='bg-[#E8E5E5A3] px-5 py-16 sm:px-16 w-full '>
            <h3 className='font-bold text-2xl sm:text-4xl sm:text-center text-[#2C3D37]'>
              Use Cases
            </h3>

            <div className='flex flex-col usecase_arrange gap-5 justify-center mt-10'>
              <div className='bg-[#A5A88F] rounded-[30.16px] pt-6 pl-6 text-[#F4EEEE]'>
                <h3 className='text-2xl sm:text-3xl font-bold pr-6'>
                  Marketing & Sales
                </h3>
                {marketingUseCases.map((item, index) => (
                  <div key={index} className='flex gap-1 mt-3 pr-6'>
                    <Image
                      src={'/images/check-circle.svg'}
                      alt='check'
                      width={16}
                      height={16}
                    />
                    <p>{item}</p>
                  </div>
                ))}

                <div className='w-full flex justify-end items-end pt-6'>
                  <Image
                    src={'/images/image2.png'}
                    alt='cellphone'
                    width={400}
                    height={400}
                    className=' '
                  />
                </div>
              </div>
              <div className='text-[#F4EEEE]'>
                <div className='bg-[#566955] rounded-[30.16px] pt-6 pl-6 flex flex-col usecase_arrange w-full'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl font-bold pr-6'>
                      Customer Support
                    </h3>
                    {csUseCases.map((item, index) => (
                      <div key={index} className='flex gap-1 mt-3 pr-6'>
                        <Image
                          src={'/images/check-circle.svg'}
                          alt='check'
                          width={16}
                          height={16}
                        />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className=' flex justify-end'>
                    <Image
                      src={'/images/image3.png'}
                      alt='cellphone'
                      width={250}
                      height={250}
                    />
                  </div>
                </div>

                <div className='bg-[#2C3D37] rounded-[30.16px] pt-6 pl-6 mt-5'>
                  <h3 className='text-2xl sm:text-3xlfont-bold pr-6'>
                    Operations & Logistics
                  </h3>
                  <div className='flex flex-col usecase_arrange w-full'>
                    <div className=''>
                      {operationsUseCases.map((item, index) => (
                        <div key={index} className='flex gap-1 mt-3 pr-6'>
                          <Image
                            src={'/images/check-circle.svg'}
                            alt='check'
                            width={16}
                            height={16}
                          />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className='mt-5 flex justify-end'>
                      <Image
                        src={'/images/image4.png'}
                        alt='cellphone'
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 p-5 sm:p-16 my-10'>
          <div>
            <h3 className='font-bold text-xl sm:text-5xl text-[#2C3D37] '>
              What&apos;s <br className='hidden sm:flex' /> Included
            </h3>
          </div>

          <div className='mt-7 sm:mt-0'>
            {packages.map((item, index) => (
              <div
                key={index}
                className={`pb-6 ${
                  index === 1
                    ? 'border-y border-y-[#2C3D37] pt-6'
                    : index === 2
                    ? 'pt-6'
                    : ''
                }`}
              >
                <Image src={item.icon} alt='icon' width={32} height={32} />
                <p className='mt-4'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {showRequestCallModal && (
        <RequestCallModal
          show={showRequestCallModal}
          onClose={() => setShowRequestCallModal(false)}
          PhoneNumber={phoneNumber}
          countryCode={selectedCountry.code}
        />
      )}
    </div>
  );
};

export default Home;
