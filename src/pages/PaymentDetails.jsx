// import moment from 'moment';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx'

// eslint-disable-next-line react/prop-types
const PaymentDetails = ({ setShowModal, amount }) => {
    const [dynamicNumber] = useState(amount);


    const dividedNumber = dynamicNumber / 3;
    return (
        <div>
            <div className="w-screen bg-gray-200 text-gray-700 overflow-x-hidden">
                <button
                    onClick={() => setShowModal(false)}
                    className='p-3 m-4 bg-red-600 text-white'>
                    <RxCross2 />
                </button>


                <ul className=''>
                    {[1, 2, 3].map((index) => (
                        <li key={index} className='flex gap-5 gap-y-3 bg-slate-400 p-3 w-full'>
                            <div>{dividedNumber}</div>
                            {/* {dates.map((date, index) => {
                                return (
                                    <li key={index}>{moment(date).format('MMMM Do')}</li>
                                )
                            })} */}
                            <button className='bg-purple-300 py-1 px-4 rounded-md'>
                                <span>Pay</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PaymentDetails;