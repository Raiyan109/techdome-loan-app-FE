import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Loan App</span>
                    </Link>

                    {/* <div><GiHamburgerMenu /></div> */}
                    <Link to='/login'>
                        <div className='flex justify-center items-center gap-2 border-gray-200 shadow-md p-3 rounded-xl'>
                            <BsFillPersonFill />

                        </div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;