import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        const endpoint = isLogin    
            ? 'http://localhost/Gymazo-Student-Side/backend/auth/api/login.php'
            : 'http://localhost/Gymazo-Student-Side/backend/auth/api/register.php';

        try {
            const response = await axios.post(endpoint, { username, password });
            setMessage(response.data.message);
            console.log(response.data);
            
            if (response.data.status === 'success' && isLogin) {
                console.log('User logged in successfully!');
            }

        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error('There was an error!', error);
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className='flex justify-center items-center h-screen flex-col gap-4 bg-gray-100'>
            <h1 className='text-3xl font-bold text-gray-800'>{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-80'>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                />
                <button
                    type="submit"
                    className='px-12 py-3 bg-blue-600 text-white font-semibold rounded-md mt-4 hover:bg-blue-700 transition-colors'
                >
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            {message && <p className={`mt-4 font-medium ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
            <button onClick={toggleForm} className='mt-2 text-blue-500 hover:text-blue-600 font-medium transition-colors'>
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
        </div>
    );
}

export default App;
