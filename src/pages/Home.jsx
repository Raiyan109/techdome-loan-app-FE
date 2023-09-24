import Navbar from '../components/Navbar';
import LoanForm from './LoanForm';

const Home = () => {
    return (
        <div className='bg-lime-300'>
            <Navbar />
            <LoanForm />
        </div>
    );
};

export default Home;