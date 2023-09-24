
import { BsFillPersonFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('userId')
        navigate('/login')
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Loan App</span>
                    </Link>

                    {/* <div><GiHamburgerMenu /></div> */}
                    <div className='flex gap-4'>
                        <Link to='/myLoans'>
                            <div className='flex justify-center items-center gap-2 border-gray-200 shadow-md p-2 rounded-xl'>
                                My Loans
                            </div>
                        </Link>
                        <Link to='/login'>
                            <div className='flex justify-center items-center gap-2 border-gray-200 shadow-md p-3 rounded-xl'>
                                <BsFillPersonFill />

                            </div>
                        </Link>
                        <button onClick={logout}>
                            <div className='flex justify-center items-center gap-2 border-gray-200 shadow-md p-2 rounded-xl'>
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;