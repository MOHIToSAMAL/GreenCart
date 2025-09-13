import React from 'react'
import ProductCart from './ProductCart'
import { useAppContext } from '../Context/AppContext'

const BestSeller = () => {
    const {products} = useAppContext();
  return (
    <div className='mt-16' > {/*if u copy the below div css and paste in this lines css it would be give a nice playing cards bundle effect like in games maybe we can use it in future */}
        <p className=' text-2xl md:text-3xl font-medium ' >Best Seller</p>

        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-6 mt-6' >
            {
                products.filter((product)=> product.inStock).slice(0,8).map((product,index)=>(
                    
                    <ProductCart key={index} product={product} />
                ))
            }

        </div>
    </div>
  )
}

export default BestSeller