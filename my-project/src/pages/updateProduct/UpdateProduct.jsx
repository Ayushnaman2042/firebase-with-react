import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function UpdateProduct() {
    const context = useContext(myContext);
    const { products, setProducts, editProducts } = context;

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 px-8 py-8 rounded-xl w-80 lg:w-96 shadow-lg transition-transform transform hover:scale-105">
                <div className="flex space-x-2 items-center mb-4">
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white hover:text-gray-400 transition duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                    <h1 className='text-center text-white text-2xl font-bold'>Update Product</h1>
                </div>
                <div>
                    <input
                        value={products.title}
                        onChange={(e) => setProducts({ ...products, title: e.target.value })}
                        type="text"
                        name='title'
                        className='bg-gray-700 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        placeholder='Product Title'
                    />
                </div>
                <div>
                    <input
                        value={products.price}
                        onChange={(e) => setProducts({ ...products, price: e.target.value })}
                        type="text"
                        name='price'
                        className='bg-gray-700 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        placeholder='Product Price'
                    />
                </div>
                <div>
                    <input
                        value={products.imageUrl}
                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                        type="text"
                        name='imageUrl'
                        className='bg-gray-700 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        placeholder='Product Image URL'
                    />
                </div>
                <div>
                    <input
                        value={products.category}
                        onChange={(e) => setProducts({ ...products, category: e.target.value })}
                        type="text"
                        name='category'
                        className='bg-gray-700 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        placeholder='Product Category'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={() => editProducts()}
                        className='bg-orange-600 hover:bg-orange-700 transition duration-300 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg'
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
