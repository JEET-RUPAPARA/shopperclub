import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <div className="p-4 md:p-6 lg:p-10">
            <h1 className="text-2xl font-bold text-pink-500 mb-6">All Orders</h1>

            <div className="w-full overflow-x-auto rounded-xl shadow-lg border border-pink-100">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-pink-100 text-pink-600 text-sm uppercase tracking-wider">
                            <th className="px-4 py-3 text-left">S.No.</th>
                            <th className="px-4 py-3 text-left">Order ID</th>
                            <th className="px-4 py-3 text-left">Image</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Price</th>
                            <th className="px-4 py-3 text-left">Quantity</th>
                            <th className="px-4 py-3 text-left">Total</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Address</th>
                            <th className="px-4 py-3 text-left">Pincode</th>
                            <th className="px-4 py-3 text-left">Phone</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {getAllOrder.map((order) =>
                            order.cartItems.map((item, index) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                return (
                                    <tr key={`${order.id}-${index}`} className="hover:bg-pink-50 transition duration-150">
                                        <td className="px-4 py-3 border-t">{index + 1}</td>
                                        <td className="px-4 py-3 border-t">{id}</td>
                                        <td className="px-4 py-3 border-t">
                                            <img
                                                src={productImageUrl}
                                                alt={title}
                                                className="w-16 h-16 object-cover rounded-md border"
                                            />
                                        </td>
                                        <td className="px-4 py-3 border-t capitalize">{title}</td>
                                        <td className="px-4 py-3 border-t capitalize">{category}</td>
                                        <td className="px-4 py-3 border-t">₹{price}</td>
                                        <td className="px-4 py-3 border-t">{quantity}</td>
                                        <td className="px-4 py-3 border-t font-semibold">₹{price * quantity}</td>
                                        <td className="px-4 py-3 border-t text-green-600 capitalize">{order.status}</td>
                                        <td className="px-4 py-3 border-t capitalize">{order.addressInfo.name}</td>
                                        <td className="px-4 py-3 border-t">{order.addressInfo.address}</td>
                                        <td className="px-4 py-3 border-t">{order.addressInfo.pincode}</td>
                                        <td className="px-4 py-3 border-t">{order.addressInfo.mobileNumber}</td>
                                        <td className="px-4 py-3 border-t">{order.email}</td>
                                        <td className="px-4 py-3 border-t">{order.date}</td>
                                        <td className="px-4 py-3 border-t">
                                            <button
                                                onClick={() => orderDelete(order.id)}
                                                className="bg-red-100 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
