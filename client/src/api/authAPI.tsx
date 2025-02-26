import type { UserLogin } from '../interfaces/userLogin.tsx';
import AuthService from '../utils/auth.ts';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Store token for authenticated requests
    AuthService.login(data.token);
    return data;
  } catch (err) {
    console.error('Error logging in:', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };