import axios from "axios";
import { useEffect, useState } from "react";
import MyLoan from "./MyLoan";
import BackToHome from "../components/BackToHome";
import Loading from "../components/Loading";

const MyLoans = () => {
    const [loans, setLoans] = useState()
    const [loading, setLoading] = useState(false)
    const id = localStorage.getItem("userId")

    const getLoanByUserId = async () => {
        setLoading(true)
        const res = await axios.get(`https://techdome-be.vercel.app/api/loan/user/${id}`)
            .catch((err) => console.log(err))

        setLoading(false)
        const data = await res.data
        return data
    }

    useEffect(() => {
        getLoanByUserId()
            .then((data) => setLoans(data.loans.loans))
    }, [])

    if (loading) {
        return <Loading />
    }
    console.log(loans);
    return (
        <div className="container">
            <BackToHome />
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leadi">{ } Loans </h2>
                <div className="overflow-x-auto">
                    {loans && loans.map((loan, index) => (
                        <MyLoan
                            key={loan._id}
                            amount={loan.amount}
                            term={loan.term}
                            createdAt={loan.createdAt}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyLoans;