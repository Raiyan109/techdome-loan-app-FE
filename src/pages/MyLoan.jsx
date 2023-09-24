import { useEffect, useState } from 'react';

import PaymentDetails from './PaymentDetails';
import moment from 'moment/moment';

// eslint-disable-next-line react/prop-types
const MyLoan = ({ amount, term, createdAt }) => {
    const [showModal, setShowModal] = useState(false)
    const [dates, setDates] = useState([]);

    useEffect(() => {
        if (createdAt) {
            // Parse the createdAt date from the server
            const createdAtDate = moment(createdAt);

            // Create an array to store the dynamic dates
            const dynamicDates = [];

            // Generate three dates with 7 days intervals
            for (let i = 0; i < 3; i++) {
                dynamicDates.push(createdAtDate.clone().add(i * 7, 'days').format('YYYY-MM-DD'));
            }

            setDates(dynamicDates);
        }
    }, [createdAt]);

    return (
        <div>
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">

                    {/* <tbody>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{amount}</td>
                                <td className="p-3">{term}</td>
                                <td className="p-3">
                                    {moment(createdAt).format('MMMM Do, h:mm a')}
                                </td>
                            </tr>
                        </tbody> */}

                    <div className='bg-gray-50 p-3'>
                        <h1>Request Amount of <span className='font-bold'>{amount} $</span> with <span className='font-bold'>{term}</span> on date <span className='font-bold'>
                            {moment(createdAt).format('MMMM Do')}</span></h1>
                    </div>
                    {/* <Link to='/paymentDetails'> */}
                    <span
                        onClick={() => setShowModal(true)}
                        className="text-gray-400 bg-gray-200 rounded-full p-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg> */}
                        Payment Details
                    </span>
                    {/* </Link> */}
                </button>

                <hr className="border-gray-200 dark:border-gray-700" />

                {showModal ? (
                    <>
                        <PaymentDetails setShowModal={setShowModal} amount={amount} dates={dates} />
                    </>
                ) : null}
                {/* <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p> */}
            </div>

        </div>
    );
};

export default MyLoan;