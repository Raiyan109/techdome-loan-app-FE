import axios from "axios";
import { useEffect, useState } from "react";
import MyLoan from "./MyLoan";
import BackToHome from "../components/BackToHome";

const MyLoans = () => {
    const [loans, setLoans] = useState()
    const id = localStorage.getItem("userId")

    const getLoanByUserId = async () => {
        const res = await axios.get(`http://localhost:5000/api/loan/user/${id}`)
            .catch((err) => console.log(err))

        const data = await res.data
        return data
    }

    useEffect(() => {
        getLoanByUserId()
            .then((data) => setLoans(data.loans.loans))
    }, [])
    console.log(loans);
    return (
        <div>
            <BackToHome />
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leadi">{ } Loans </h2>
                <div className="overflow-x-auto">
                    {loans && loans.map((loan, index) => (
                        <MyLoan
                            key={loan._id}
                            amount={loan.amount}
                            term={loan.term}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyLoans;