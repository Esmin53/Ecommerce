'use client'

import { storage } from '@/app/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, {useState} from 'react'
import { v4 } from 'uuid'
import { FaTrash } from 'react-icons/fa'

export default function Form() {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImageUpload] = useState("");
    const [form, setForm] = useState({
        title: "",
        price: "",
        brand: "",
        category: "",
        color: "",
        shipping: "",
        description: "",
        image: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }

      const createProduct = async (url) => {
        console.log(url)
        try {
            const res = await fetch('http://localhost:3000/api/admin/create', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    image: url
                }
            )})
            
            const res_data = await res.json()
            console.log(res_data)
        } catch (error) {
            console.log(error)
        }
      }

      const imageUpload = () => {
        if(!imageUpload) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then((url) => {
                createProduct(url);
            })
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        imageUpload()
       
      }


  return (
    <form>
        <div className='flex gap-2 w-full'>
              <input type='text' placeholder='Title' name='title' value={form.title} onChange={(e) => handleChange(e)}
              className='border border-offwhite_100 shadow-sm shadow-offwhite_200 h-9 w-6/12 pl-2 outline-none'/>
              <input type='text' placeholder='Price'name='price' value={form.price} onChange={(e) => handleChange(e)}
               className='border border-offwhite_100 shadow-sm shadow-offwhite_200 w-3/12 pl-2 outline-none'/>
              <input type='text' placeholder='Brand' name='brand' value={form.brand} onChange={(e) => handleChange(e)}
              className='border border-offwhite_100 shadow-sm shadow-offwhite_200 w-3/12 pl-2 outline-none'/>
            </div>
            
            <div className='flex w-full'>
            <div className='flex gap-2 pr-2 pt-2 flex-col w-6/12'>
              <div className='flex gap-2 w-full'>
              <input type='text' placeholder='Category' name='category' value={form.category} onChange={(e) => handleChange(e)}
              className='border border-offwhite_100 shadow-sm shadow-offwhite_200 w-1/3 h-9 pl-2 outline-none'/>
              <input type='text' placeholder='Color' name='color' value={form.color} onChange={(e) => handleChange(e)}
              className='border border-offwhite_100 shadow-sm shadow-offwhite_200 w-1/3 h-9 pl-2 outline-none'/>
              <input type='text' placeholder='Shipping' name='shipping' value={form.shipping} onChange={(e) => handleChange(e)}
              className='border border-offwhite_100 shadow-sm shadow-offwhite_200 w-1/3 h-9 pl-2 outline-none'/>
              </div>
              <div className='w-full'>
                <textarea className='w-full h-72 border border-offwhite_100 shadow-sm shadow-offwhite_200 outline-none p-2'
                placeholder='Description' name='description' value={form.description} onChange={(e) => handleChange(e)}>

                </textarea>
              </div>
            </div>
              <div className='w-6/12 flex flex-col gap-2 relative overflow-hidden pt-2'>
                    {imagePreview && <img src={imagePreview} className='absolute w-full h-72 top-2 absolute border-2 border-lightgray
                    border-dashed rounded-lg' />}
                    {imagePreview && <button onClick={() => {
                      setImagePreview(null)
                      setImageUpload(null)
                    }} className='absolute top-4 right-2 z-30 text-red text-xl'> <FaTrash /> </button>}
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-lightgray
                    border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, or JPG</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" onChange={(e) => {
                            setImageUpload(e.target.files[0])
                            let imgUrl = URL.createObjectURL(event.target.files[0])
                            setImagePreview(imgUrl);
                            }}/>
                    </label>
              
                <button className='w-full h-10 bg-mainorange text-white font-semibold' onClick={(e) => handleSubmit(e)}>Create Product</button>
              </div>
            </div>
    </form>
  )
}
