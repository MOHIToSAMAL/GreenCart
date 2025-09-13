import React, { useState } from 'react'
import { assets } from '../assets/assets'

// Input Firld Component
const InputFeild = ({type, placeholder,name,handleChange,address}) => (
    <input className=' w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition '
    type={type} 
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required />
)

const AddAddress = () => {

    const [address,setaddress] = useState({
        firstname:'',
        lastname:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:'',

    })

    const handleChange = (e) => {
        const {name,value} = e.target;

        setaddress((prevAddress) => ({
            ...prevAddress,
            [name]:value,
        }))
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
    } 
  return (
    <div className=' mt-16 pb-16 ' >

        <p className='text-2xl md:text-3xl text-gray-500 ' >Add Shipping <span className=' font-semibold text-primary  ' >Address</span> </p>

        <div className=' flex flex-col-reverse md:flex-row justify-between mt-10 ' >

            <div className=' flex-1 max-w-md ' >
                <form onSubmit={onSubmitHandler} className=' space-y-3 mt-6 text-sm '  action="">
                    <div className=' grid grid-cols-2 gap-4 ' >
                        <InputFeild handleChange={handleChange} address={address} name='firstname' type="text" placeholder="First Name" />
                        <InputFeild handleChange={handleChange} address={address} name='lastname' type="text" placeholder="Last Name" />
                    </div>
                        <div>
                          <InputFeild handleChange={handleChange} address={address} name='email' type="email" placeholder="E-mail" />
                        </div>

                        <div className=' grid grid-cols-2 gap-4 '  >
                          <InputFeild handleChange={handleChange} address={address} name='zipcode' type="Number" placeholder="Zip-Code" />
                          <InputFeild handleChange={handleChange} address={address} name='city' type="text" placeholder="city" />
                        </div>

                        <div>
                          <InputFeild handleChange={handleChange} address={address} name='street' type="text" placeholder="Street" />
                        </div>

                        <div className=' grid grid-cols-2 gap-4 '  >
                          <InputFeild handleChange={handleChange} address={address} name='State' type="text" placeholder="State" />
                          <InputFeild handleChange={handleChange} address={address} name='Country' type="text" placeholder="Country" />
                        </div>

                        <div>
                          <InputFeild handleChange={handleChange} address={address} name='PhoneNumber' type="Number" placeholder="PhoneNumber" />
                        </div>

                        <button className=' w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase ' >
                            Save Address
                        </button>

                </form>
            </div>

            <img className=' md:mr-16 mb-16 md:mt-0 '  src={assets.add_address_iamge} alt="" />

        </div>
    </div>
  )
}

export default AddAddress