import ProductCard from './ProductCard'; 
import Button from './Button'; 

const productArray = [{
    url: '/assets/Syltherine.png',
    popUp: '-30%',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    discountPrice: 'Rp 2.500.000',
    actualPrice: 'Rp 3.500.000'
},
{
    url: '/assets/leviosa.png',
    popUp: '',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    discountPrice: 'Rp 2.500.000',
    actualPrice: '',
    forceHover: true },
{
    url: '/assets/Lolito.png',
    popUp: '-50%',
    title: 'Lolito',
    description: 'Luxury big sofa',
    discountPrice: 'Rp 7.000.000',
    actualPrice: 'Rp 14.000.000'
},
{
    url: '/assets/Respira.png',
    popUp: 'New',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    discountPrice: 'Rp 500.000',
    actualPrice: ''
},
{
    url: '/assets/Grifo.png',
    popUp: '',
    title: 'Grifo',
    description: 'Night lamp',
    discountPrice: 'Rp 1.500.000',
    actualPrice: ''
},
{
    url: '/assets/Muggo.png',
    popUp: 'New',
    title: 'Muggo',
    description: 'Small mug',
    discountPrice: 'Rp 150.000',
    actualPrice: ''
},
{
    url: '/assets/Pingky.png',
    popUp: '-50%',
    title: 'Pingky',
    description: 'Cute bed set',
    discountPrice: 'Rp 7.000.000',
    actualPrice: 'Rp 14.000.000'
},
{
    url: '/assets/Potty.png',
    popUp: 'New',
    title: 'Potty',
    description: 'Minimalist flower pot',
    discountPrice: 'Rp 500.000',
    actualPrice: ''
},
]


const Products = () => {
    return (
        <div className='px-[30px] md:px-[60px] pb-[48px]'>
           
            <h2 className="text-[40px] font-bold font-poppins text-center mb-8">Our Products</h2>
            
            {/* Container for product cards */}
            <div className='mt-10 flex flex-wrap items-center justify-center gap-7'>
                {
                    
                    productArray.map((product, index) => (
                        <ProductCard
                            key={index} 
                            url={product.url} 
                            label={product.popUp} 
                            title={product.title}
                            description={product.description} 
                            discount={product.discountPrice} 
                            actual={product.actualPrice} 
                            forceHover={product.forceHover || false} 
                        />
                    ))
                }
            </div>
            
            <Button />
        </div>
    )
}
export default Products