import {
  csUseCases,
  marketingUseCases,
  operationsUseCases,
} from '@/utils/data';
import Image from 'next/image';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Home = () => {
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
          <h1 className='helvetica font-bold text-6xl max-w-[800px] text-center'>
            Never Miss a Customer&apos;s Call Again
          </h1>

          <p className='text-[#1E1E1E] text-lg text-center max-w-[640px] mt-10'>
            You probably think this is a waste of your time & AI can&apos;t
            understand and respond to your customers properly.
          </p>

          <p className='text-[#1E1E1E] text-lg text-center mt-2 mb-10'>
            But you be the judge of that and try it for yourself (for free)
          </p>
        </div>
        <div className='w-full h-[180px] relative'>
          <Image
            src='/images/image2.png'
            alt='image1'
            layout='fill'
            className='w-full h-[180px]'
          />
        </div>

        <div className='w-full flex flex-col items-center justify-center py-16'>
          <div className='bg-[#E8E5E5] w-full sm:w-[684px] h-[66px] rounded-[16px] flex py-4 pl-6 text-lg font-medium items-center '>
            <div className='bg-[#CBCBCB] flex gap-1 rounded-lg items-center p-1 cursor-pointer '>
              <Image
                src={'/images/emirates-flag.png'}
                alt='flag'
                width={35}
                height={24}
                className=''
              />
              <p>+971</p>
              <MdOutlineKeyboardArrowUp size={24} />
            </div>
            <input
              type='tel'
              placeholder='Enter your phone number'
              className='outline-none w-[342px] h-[26px] bg-transparent pl-1'
            />

            <button className='w-[200px] h-[58px] bg-[#BC5238] rounded-[16px] text-[#F4EFEE] button-shadow'>
              Request a call
            </button>
          </div>

          <div className='max-w-[900px] pt-16'>
            <p className='text-5xl text-center'>
              We{' '}
              <span className='font-bold text-[#BC5238]'>
                build and manage AI-agents
              </span>{' '}
              that can handle over 1,000 incoming & outgoing calls at the same
              time.
            </p>

            <div className='flex justify-center py-14'>
              <Image
                src={'/images/avatar1.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover'
              />
              <Image
                src={'/images/avatar2.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover ml-[-30px]'
              />
              <Image
                src={'/images/avatar3.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover ml-[-30px]'
              />
              <Image
                src={'/images/avatar4.png '}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover ml-[-30px]'
              />
              <Image
                src={'/images/avatar5.png'}
                alt='avatar'
                width={100}
                height={100}
                className='object-cover ml-[-30px]'
              />
            </div>
          </div>
          <p className='text-3xl font-medium text-center mb-14'>
            Tailored to your business, with human-like voices and multilingual
            capabilities.
          </p>

          <div className='bg-[#E8E5E5A3] px-5 py-12 sm:px-16 w-full '>
            <h3 className='font-bold text-4xl text-center'>Use Cases</h3>

            <div className='flex gap-5 justify-center mt-10'>
              <div className='bg-[#A5A88F] rounded-[30.16px] pt-6 pl-6 text-[#F4EEEE]'>
                <h3 className='text-4xl font-bold pr-6'>Marketing & Sales</h3>
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

                <div className='w-full flex justify-end'>
                  <Image
                    src={'/images/image2.png'}
                    alt='cellphone'
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className='text-[#F4EEEE]'>
                <div className='bg-[#566955] rounded-[30.16px] pt-6 pl-6'>
                  <h3 className='text-4xl font-bold pr-6'>Customer Support</h3>
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
                <div className='bg-[#2C3D37] rounded-[30.16px] pt-6 pl-6 mt-5'>
                  <h3 className='text-4xl font-bold pr-6'>
                    Operations & Logistics
                  </h3>
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
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
