
import { Poppins } from 'next/font/google';
import RangeProduct from './RangeProduct';


const poppins = Poppins({
    subsets: ['latin'], 
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']  
});


const rangeCategories = [
    { url: '/assets/dining.png', title: 'Dining' },  
    { url: '/assets/living.png', title: 'Living' },  
    { url: '/assets/bedroom.png', title: 'Bedroom' },  
];

const Range = () => {
  return (
    <div className='px-[40px] md:px-[100px] py-[48px]'> 
      <div className={`${poppins.className} w-full`}>  
        
        {/* Header section for the range section */}
        <div className="text-center text-fontColor">  
        <h2 className="text-[40px] font-bold font-poppins text-center mb-8">Browse The Range</h2> 
          <p className='font-normal text-[16px] md:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
        </div>
        
       
        <div className="mt-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-5">  
           {rangeCategories.map((category, index) => (
            <RangeProduct key={index} url={category.url} title={category.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Range;  