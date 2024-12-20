
import { Poppins } from 'next/font/google';


import Image from "next/image";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const AnotherHeroSection = () => {
  return (
    <div className={`${poppins.className} w-full h-[316px] relative flex flex-col items-center justify-center`}>
      <Image src={'/assets/backgroundimage1.png'} alt="backgroundimage" fill className="object-cover" />
      <p className="text-[48px] font-medium text-black">Shop</p>
      <div className='flex gap-2'>
        <p className='font-medium text-[16px]'>Home</p>
        <Image src={'/assets/greaterarrow.svg'} alt='left arrow' width={8} height={8} />
        <p className='font-light text-[16px]'>Shop</p>
      </div>
    </div>
  )
}

export default AnotherHeroSection