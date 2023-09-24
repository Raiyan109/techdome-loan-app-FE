import { useState } from "react";

const LoanForm = () => {
    const [amountInput, setAmountInput] = useState('')
    const [loanTermInput, setLoanTermInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(amountInput, loanTermInput);
    }
    return (

        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl">This is a simple loan payment app </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                <label className="font-semibold text-xs" >Amount required</label>
                <input
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                <label className="font-semibold text-xs mt-3" >Loan term</label>
                <input
                    value={loanTermInput}
                    onChange={(e) => setLoanTermInput(e.target.value)}
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Submit</button>

            </form>


        </div>

    );
};

export default LoanForm;