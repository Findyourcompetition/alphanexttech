import Image from 'next/image';

const Home = () => {
  return (
    <div className='bg-[#F4EFEE] w-full h-full'>
      <Image src={'/images/logo.svg'} alt='logo' width={89} height={40} />
    </div>
  );
};

export default Home;
