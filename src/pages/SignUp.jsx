import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import BackToHome from '../components/BackToHome';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:5000/api/user/signup', {
            name,
            email,
            password,
            loans: [],
        })


        const data = res.data
        console.log(data.user._id);
        localStorage.setItem('userId', data.user._id)
        return data
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
                <h1 className="font-bold text-2xl">Sign up</h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                    <label className="font-semibold text-xs" >Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                    <label className="font-semibold text-xs" >Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" />
                    <label className="font-semibold text-xs mt-3" >Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                    <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Submit</button>

                    <div className="flex mt-6 justify-center text-xs">
                        {/* <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a> */}
                        {/* <span className="mx-2 text-gray-300">/</span> */}
                        <Link to='/login' className="text-blue-400 hover:text-blue-500">Login</Link>
                    </div>

                </form>

                <BackToHome />
            </div>
        </>
    );
};

export default SignUp;