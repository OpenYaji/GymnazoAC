import React, { useState } from 'react';
import Logo from '../../assets/img/gymnazu.png'; 
import Bg from '../../assets/img/bg.png'; 
import { Link, useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose, username }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Login Successful!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Welcome back, <span className="font-semibold text-amber-600 dark:text-amber-400">{username}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Redirecting to your dashboard...
          </p>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full animate-progress"></div>
        </div>

        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="w-12 h-12 opacity-50" />
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // --- DEVELOPMENT BYPASS ---
    // This part simulates a successful login without contacting the database.
    console.log("DEV MODE: Bypassing login credentials check.");
    
    // Simulate a short network delay
    setTimeout(() => {
      // Execute success logic directly
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      
      setShowSuccessModal(true);
      
      setTimeout(() => {
        navigate('/student-dashboard');
      }, 2000); // Redirect after 2 seconds
      
      // setLoading(false); // No need for this here as navigation will happen
    }, 1000); // 1-second delay
    
    /* // --- ORIGINAL DATABASE LOGIC (COMMENTED OUT) ---
    try {
      const response = await fetch('http://localhost/Gymazo-Student-Side/backend/api/auth/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      if (data.status === 'success') {  
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        setShowSuccessModal(true);
        
        setTimeout(() => {
          navigate('/student-dashboard');
        }, 2000);
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Connection error. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
        username={username}
      />

      <div className="relative min-h-screen w-full flex items-center md:items-start justify-center md:pt-2">
        
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="absolute inset-0 bg-stone-900/60 dark:bg-black/70 z-0 transition-colors duration-300"></div>
        </div>

        <div className='fixed top-16 sm:top-20 left-0 w-full z-20 transition-all duration-300'>
          <div className='w-full flex justify-start pt-10'>
            <Link 
              to="/" 
              className='flex items-center gap-2 text-white dark:text-amber-400 font-bold hover:text-white dark:hover:text-amber-300 transition duration-150 text-sm px-4 group'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className='inline'>Back to Home</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 w-full mt-8 max-w-sm mx-4 p-6 rounded-xl shadow-xl bg-stone-800/60 dark:bg-gray-900/70 border border-stone-700 dark:border-gray-600 backdrop-blur-sm transform scale-[0.9] sm:scale-100 transition-colors duration-300">
          <Link to="/">
            <button className="absolute top-3 right-3 text-gray-100 hover:text-white dark:hover:text-amber-400 transition">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </Link>

          <div className="flex flex-col items-center mb-4">
            <img src={Logo} alt="Logo" className="w-16 h-16 mb-2 object-contain" />
            <h2 className="text-lg font-bold uppercase text-white tracking-wider">LOGIN</h2>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter your ID number" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-yellow-500 dark:focus:ring-amber-400 focus:border-yellow-500 dark:focus:border-amber-400 transition duration-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
            </div>

            <div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-yellow-500 dark:focus:ring-amber-400 focus:border-yellow-500 dark:focus:border-amber-400 transition duration-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a3 3 0 106 0v-3a3 3 0 00-6 0v3z"></path></svg>
                </span>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-gray-300 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-amber-400 transition duration-300">Forgot Password?</a>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 text-gray-800 dark:text-gray-900 font-semibold rounded-full bg-[#FEEB8A] dark:bg-amber-400 hover:bg-yellow-400 dark:hover:bg-amber-300 transition duration-300 shadow-lg text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  'LOGIN'
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-xs text-gray-200 dark:text-gray-300">
            Need help? Contact the <Link to="/#contact-us" className="font-semibold text-[#F7C236] dark:text-amber-400 hover:underline">School Office</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-progress {
          animation: progress 2s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Login;