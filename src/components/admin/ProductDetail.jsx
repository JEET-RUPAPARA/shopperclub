import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    // navigate 
    const navigate = useNavigate();

    // Delete product 
    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await deleteDoc(doc(fireDB, 'products', id));
            toast.success('Product deleted successfully');
            getAllProductFunction();
        } catch (error) {
            console.log(error);
            toast.error('Error deleting product');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                {/* Page title */}
                <h1 className="text-2xl font-bold text-gray-800">
                    <span className="border-b-4 border-pink-500 pb-1">Product Inventory</span>
                </h1>
                
                {/* Add Product Button */}
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 flex items-center gap-2 font-medium shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Product
                    </button>
                </Link>
            </div>

            {/* Loading */}
            {loading && (
                <div className="flex justify-center py-10">
                    <Loader />
                </div>
            )}

            {/* Table container with responsive design */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                {!loading && (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {getAllProduct.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                                        No products found. Add some products to get started.
                                    </td>
                                </tr>
                            ) : (
                                getAllProduct.map((item, index) => {
                                    const { id, title, price, category, date, productImageUrl } = item;
                                    return (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-center">
                                                    <img 
                                                        className="h-16 w-16 object-cover rounded-md border border-gray-200 shadow-sm" 
                                                        src={productImageUrl} 
                                                        alt={title}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = "https://via.placeholder.com/100x100?text=No+Image";
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-pink-600">₹{price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800 capitalize">
                                                    {category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3 flex items-center">
                                                <button 
                                                    onClick={() => navigate(`/updateproduct/${id}`)}
                                                    className="text-green-600 hover:text-green-900 flex items-center gap-1 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => {
                                                        if(window.confirm('Are you sure you want to delete this product?')) {
                                                            deleteProduct(id);
                                                        }
                                                    }}
                                                    className="text-red-600 hover:text-red-900 flex items-center gap-1 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;