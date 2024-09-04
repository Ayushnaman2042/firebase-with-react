import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function ProductTable() {
    const context = useContext(myContext);
    const { allProducts, deleteProduct, editProductHandle } = context;

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="relative overflow-x-auto shadow-md sm:rounded-xl bg-gray-800 p-6">
                    <div className="flex justify-between mb-4">
                        <Link to={'/addproduct'}>
                            <button className='bg-teal-500 hover:bg-teal-600 transition duration-300 text-white font-bold px-6 py-2 rounded-lg'>
                                Add Product
                            </button>
                        </Link>
                    </div>

                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-200 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">S.No.</th>
                                <th scope="col" className="px-6 py-3">Product Image</th>
                                <th scope="col" className="px-6 py-3">Product Name</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Category</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((item, index) => {
                                const { id, title, price, imageUrl, category, date } = item;
                                return (
                                    <tr key={id} className="bg-gray-700 border-b border-gray-600 text-white hover:bg-gray-600 transition duration-300">
                                        <td className="px-6 py-4">{index + 1}.</td>
                                        <td className="px-6 py-4">
                                            <img className='w-12 h-12 object-cover rounded-md' src={imageUrl} alt="Product" />
                                        </td>
                                        <td className="px-6 py-4">{title}</td>
                                        <td className="px-6 py-4">₹{price}</td>
                                        <td className="px-6 py-4">{category}</td>
                                        <td className="px-6 py-4">{date}</td>
                                        <td className="px-6 py-4 flex space-x-2">
                                            <button 
                                                onClick={() => deleteProduct(item)} 
                                                className="bg-red-500 hover:bg-red-600 transition duration-300 text-white font-medium px-4 py-1 rounded-lg"
                                            >
                                                Del
                                            </button>
                                            <Link 
                                                to={'/updateproduct'}
                                                onClick={() => editProductHandle(item)}
                                                className="bg-green-500 hover:bg-green-600 transition duration-300 text-white font-medium px-4 py-1 rounded-lg"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductTable;
