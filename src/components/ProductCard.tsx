import Image from "next/image";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    subsets: ['latin'], 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']  
});

const ProductCard = ({ 
    url,          
    label,        
    title,        
    description,  
    discount,     
    actual,        
    forceHover     
}: { 
    url: string; 
    label: string; 
    title: string; 
    description: string; 
    discount: string; 
    actual: string; 
    forceHover: boolean; 
}) => {
    return (
        <div className={`${poppins.className} w-[285px] h-[446px] bg-productBackground relative overflow-hidden group cursor-pointer ${forceHover ? 'hovered' : ''}`}>
            {/* Product Image */}
            <Image
                src={url}
                alt={title}
                width={285}
                height={301}
                className={`transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}
            />

            {/* Discount Badge */}
            {label && (
                <span className={`${label === "New" ? 'bg-labelAnotherColorForProduct' : 'bg-labelColorForProduct'} w-[48px] h-[48px] absolute top-5 right-5 rounded-full text-center py-3 text-white font-medium text-[16px]`}>
                    {label}
                </span>
            )}

            {/* Card Content */}
            <div className="p-4">
                <div>
                   <p className="font-semibold text-[24px] text-fontColor">{title}</p>
                    <p className="font-medium text-[16px] text-anotherFontColor">{description}</p>
                        <div className="font-semibold text-[20px] text-fontColor">
                        {discount}
                        <span className="pl-2 font-normal text-[16px] text-anotherFontColor line-through">{actual}</span>
                    </div>
                </div>
            </div>

            {/* Overlay for Hover Effect */}
            <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}></div>

            {/* Add to Cart Button */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                
                {/* Add to Cart Button */}
                <button className="bg-white text-primaryColor py-3 px-16 font-semibold text-[16px] mb-4">
                    Add to Cart
                </button>

                {/* Action Icons  */}
                <div className="flex gap-4">
                  
                    <div className="flex items-center justify-center gap-1">
                        <Image src={'/assets/share.svg'} alt="share" width={12} height={13} />
                        <p className="font-semibold text-[16px]">Share</p>
                    </div>

                  
                    <div className="flex items-center justify-center gap-1">
                        <Image src={'/assets/compare.svg'} alt="compare" width={13} height={14} />
                        <p className="font-semibold text-[16px]">Compare</p>
                    </div>

                    
                    <div className="flex items-center justify-center gap-1">
                        <Image src={'/assets/like.svg'} alt="like" width={13} height={14} />
                        <p className="font-semibold text-[16px]">Like</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;