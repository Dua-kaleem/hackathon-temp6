import Image from "next/image";


const ShareSection = () => {
    return (
        <div className="py-[50px]">
            
            <div className="text-center text-fontColor mb-10 px-4">
              
                <p className="font-semibold text-[16px] md:text-[20px] text-anotherFontColor">
                    Share your setup with
                </p>
                
                <h2 className="text-[40px] font-bold font-poppins text-center mb-8">FuniroFurniture</h2>
            </div>

     
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-auto px-4">
                {/* First Column */}
                <div className="flex flex-col gap-4">
                  
                    <Image
                        src="/assets/firstimage.png"
                        alt="first image"
                        height={382}
                        width={274}
                        className="w-full object-cover"
                    />
                    
                    <Image
                        src="/assets/sixthimage.png"
                        alt="sixth image"
                        height={323}
                        width={381}
                        className="w-full object-cover"
                    />
                </div>

                {/* Second Column*/}
                <div className="flex flex-col gap-4 items-center justify-center">
                   
                    <Image
                        src="/assets/secondimage.png"
                        alt="second image"
                        height={312}
                        width={451}
                        className="w-full object-cover"
                    />
                  
                    <Image
                        src="/assets/seventhimage.png"
                        alt="seventh image"
                        height={242}
                        width={344}
                        className="w-full object-cover"
                    />
                </div>

                {/* Third Column*/}
                <div className="flex flex-col gap-4 items-center justify-center">
                   
                    <Image
                        src="/assets/thirdimage.png"
                        alt="third image"
                        height={392}
                        width={295}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fourth Column*/}
                <div className="flex flex-col gap-4 items-center justify-center">
                   
                    <Image
                        src="/assets/fourthimage.png"
                        alt="fourth image"
                        height={348}
                        width={290}
                        className="w-full object-cover"
                    />
                   
                    <Image
                        src="/assets/eightimage.png"
                        alt="eighth image"
                        height={242}
                        width={178}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fifth Column */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Fifth Image */}
                    <Image
                        src="/assets/fifthimage.png"
                        alt="fifth image"
                        height={433}
                        width={425}
                        className="w-full object-cover"
                    />
                    
                    <Image
                        src="/assets/nineimage.png"
                        alt="ninth image"
                        height={196}
                        width={258}
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShareSection;