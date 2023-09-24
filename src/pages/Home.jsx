import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LoanForm from './LoanForm';
import axios from 'axios';

const Home = () => {
    const getLoans = async () => {
        const res = await axios.get('http://localhost:5000/api/loan')
            .catch((err) => console.log(err))

        const data = await res.data
        return data
    }

    useEffect(() => {
        getLoans()
            .then((data) => console.log(data.loans))
    }, [])
    return (
        <div className='bg-lime-300'>
            <Navbar />
            <LoanForm />
        </div>
    );
};

export default Home;