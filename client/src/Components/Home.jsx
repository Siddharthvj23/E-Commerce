import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../apicalls/Product'
import { hideloading, showloading } from '../redux/loaderSlice'
import { useDispatch } from 'react-redux'
function Home() {
    const [products, setProduct] = useState([])
    const dispatch = useDispatch()
    const getData = async () => {

        try {
            dispatch(showloading())
            const response = await getAllProducts()

            if (response.success) {
                setProduct(response.data)
            }
            dispatch(hideloading())
        } catch (error) {
            dispatch(hideloading())
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-4xl mb-5">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map(product => {
                            return (

                                <div className="group">
                                    <img src={product.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg  object-contain group-hover:opacity-75 xl:aspect-7/8" />
                                    <div className="flex justify-between">

                                        <div>
                                            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                                        </div>
                                        <button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />

                                        </svg></button>
                                    </div>
                                </div>)
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home