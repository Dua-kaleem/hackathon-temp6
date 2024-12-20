
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],  
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']  
});


const Button = () => {
    return (
        <div className={`flex items-center justify-center pt-10 ${poppins.className}`}>
      
            <div className='flex items-center justify-center w-[245px] h-[48px] border-2 border-primaryColor font-semibold text-[16px] text-primaryColor'>
                Show More  
            </div>
        </div>
    )
}

export default Button;