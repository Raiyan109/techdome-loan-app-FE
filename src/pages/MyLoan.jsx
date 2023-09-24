import React from 'react';

const MyLoan = ({ amount, term, index }) => {
    const tHeads = ['Index', 'Amount', 'Loan Term']
    return (
        <div>
            <table>
                {/* <thead>
                    <tr>
                        {tHeads.map(tHead => {
                            <th>{tHead[0]}</th>
                        })}
                    </tr>
                </thead> */}
                <tbody>
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3">{amount}</td>
                        <td className="p-3">{term}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyLoan;