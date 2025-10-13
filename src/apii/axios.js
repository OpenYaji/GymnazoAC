import axios from 'axios';

// 1. Create a new Axios instance with a base URL.
// This means you won't have to type the full URL for every request.
const api = axios.create({
  baseURL: 'http://localhost/Gymazo-Student-Side/backend/api', // Your backend API's base URL
});

// 2. Use an interceptor to modify outgoing requests.
// This function runs before any request is sent.
api.interceptors.request.use(
  (config) => {
    // 3. Get the token from localStorage.
    const token = localStorage.getItem('token');

    // 4. If a token exists, add it to the 'Authorization' header.
    // The 'Bearer ' prefix is the standard for JWTs.
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // 5. Return the modified configuration for the request to proceed.
    return config;
  },
  (error) => {
    // Handle any errors that occur during the request setup.
    return Promise.reject(error);
  }
);

// 6. Export the configured instance to be used throughout your app.
export default api;