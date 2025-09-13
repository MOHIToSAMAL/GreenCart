import React, { useState } from 'react'
import { assets, categories } from '../../assets/assets';

const AddProduct = () => {

    const [files, setFiles] = useState([]);
    const [name,Setname] = useState("");
    const [description,Setdescription] = useState("");
    const [category,Setcategory] = useState("Men");
    const [price,Setprice] = useState("");
    const [offerPrice, setofferPrice] = useState("");

        const onSubmitHandler = async(e) => {
            e.preventDefault();
        }
    
  return (
    <div className=' no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between ' >

        <form onSubmit={onSubmitHandler} action="" className=' md:p-10 p-4 space-y-5 max-w-lg ' >
            <div>
                <p className=' text-base font-medium ' >Product Image</p>
                <div className=' flex flex-wrap items-center gap-3 mt-2 ' >
                    {Array(4).fill('').map((_,idx) =>(
                        <label key={idx} htmlFor={`image${idx}`}>
                            <input onChange={(e)=>{
                                const updatedFiles = [...files];
                                updatedFiles[idx] = e.target.files[0]
                                setFiles(updatedFiles)
                            }} type="file" id={`Image${idx}`} hidden />
                            <img className=' max-w-24 cursor-pointer '
                            src={ files[idx] ? URL.createObjectURL(files[idx]) 
                              : assets.upload_area} alt="" width={100} height={100} />
                        </label>
                    ))}
                </div>
            </div>

            <div className=' flex flex-col gap-1 max-w-md  ' >

                <label className=' text-base font-medium '  htmlFor="product-value">Product Name</label>
                <input onChange={(e)=>Setname(e.target.value)} value={name} type="text" id="product-value" placeholder='Type here' 
                className=' outline-none md:py-2.5 py-2 px-3 rounded border
                border-e-gray-500/40 ' required />

            </div>
            <div className=' flex flex-col gap-1 max-w-md  ' >

                <label className=' text-base font-medium '  htmlFor="product-value">Product Description</label>
                <textarea name="" id="product-value" onChange={(e)=>Setdescription(e.target.value)} value={description} type="text"  placeholder='Type here' 
                className=' outline-none md:py-2.5 py-2 px-3 rounded border
                border-e-gray-500/40 ' required ></textarea>

            </div>

            <div className='w-full flex flex-col gap-1 max-w-md  ' >

                <label className=' text-base font-medium '  htmlFor="product-value">Category</label>
                <select onChange={(e)=>Setcategory(e.target.value)} value={category} type="Number" id="product-value" placeholder='Type here' 
                className=' outline-none md:py-2.5 py-2 px-3 rounded border
                border-e-gray-500/40 ' required>
                    <option value="">Select Category</option>
                    {categories.map((item,idx) => (
                        <option key={idx} value={item.path} >{item.path}</option>
                    ))}
                </select>

            </div>

            <div className=' flex items-center gap-5 flex-wrap ' >

                 <div className='flex-1 flex flex-col gap-1 w-32  ' >
     
                     <label className=' text-base font-medium '  htmlFor="product-value">Product Price</label>
                     <input onChange={(e)=>Setprice(e.target.value)} value={price} type="text"  id="product-value" placeholder='Type here' 
                     className=' outline-none md:py-2.5 py-2 px-3 rounded border
                     border-e-gray-500/40 ' required />
     
                 </div>
                 <div className='flex-1 flex flex-col gap-1 w-32  ' >
     
                     <label className=' text-base font-medium '  htmlFor="product-value">Product Offer-Price</label>
                     <input onChange={(e)=>setofferPrice(e.target.value)} value={offerPrice} type="text"  id="product-value" placeholder='Type here' 
                     className=' outline-none md:py-2.5 py-2 px-3 rounded border
                     border-e-gray-500/40 ' required />
     
                 </div>

            </div>

            <button className='px-8 py-2.5 bg-primary cursor-pointer text-white font-medium rounded ' >
                ADD
            </button>


        </form>

    </div>
  )
}

export default AddProduct