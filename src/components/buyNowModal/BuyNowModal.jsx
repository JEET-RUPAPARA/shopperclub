/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-5 py-3 text-white bg-pink-600 hover:bg-pink-500 transition rounded-xl shadow-md"
            >
                Buy Now
            </Button>

            <Dialog open={open} handler={handleOpen} className="bg-pink-50 rounded-xl shadow-lg">
                <DialogBody className="p-6 md:p-8">
                    <h2 className="text-xl font-bold text-pink-600 mb-6 text-center">Enter Your Details</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, name: e.target.value })
                            }
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-md border border-pink-300 bg-white text-pink-700 placeholder-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                        />

                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, address: e.target.value })
                            }
                            placeholder="Enter your address"
                            className="w-full px-4 py-3 rounded-md border border-pink-300 bg-white text-pink-700 placeholder-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                        />

                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, pincode: e.target.value })
                            }
                            placeholder="Enter your pincode"
                            className="w-full px-4 py-3 rounded-md border border-pink-300 bg-white text-pink-700 placeholder-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                        />

                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, mobileNumber: e.target.value })
                            }
                            placeholder="Enter your mobile number"
                            className="w-full px-4 py-3 rounded-md border border-pink-300 bg-white text-pink-700 placeholder-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                        />

                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-5 py-3 text-white bg-pink-600 hover:bg-pink-500 transition rounded-xl shadow-md"
                        >
                            Confirm Purchase
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
