import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Local accounts (system / admin access)
const LOCAL_USERS = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Admin User' },
  { id: 2, username: 'viewer', password: 'viewer123', role: 'viewer', name: 'Viewer User' },
];

// DICT email addresses that should receive the 'admin' role on Google sign-in.
// Add @dict.gov.ph addresses here as needed.
const ADMIN_EMAILS = [
  // 'yourname@dict.gov.ph',
];

const ALLOWED_DOMAIN = import.meta.env.VITE_ALLOWED_DOMAIN || 'dict.gov.ph';

/** Safely decode a JWT payload without a library */
function decodeJwtPayload(token) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '=='.slice(0, (4 - (base64.length % 4)) % 4);
  return JSON.parse(atob(padded));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('kms-user');
    return stored ? JSON.parse(stored) : null;
  });

  /** Local username/password login */
  const login = (username, password) => {
    const found = LOCAL_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      localStorage.setItem('kms-user', JSON.stringify(safeUser));
      return { success: true, user: safeUser };
    }
    return { success: false, error: 'Invalid username or password.' };
  };

  /** Google OAuth login — receives an id_token credential string from @react-oauth/google */
  const googleLogin = (credential) => {
    try {
      const payload = decodeJwtPayload(credential);
      const email = payload.email || '';

      if (!email.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`)) {
        return {
          success: false,
          error: `Only @${ALLOWED_DOMAIN} Google accounts are allowed.`,
        };
      }

      const role = ADMIN_EMAILS.includes(email.toLowerCase()) ? 'admin' : 'viewer';

      const googleUser = {
        name: payload.name,
        email,
        picture: payload.picture,
        role,
        loginType: 'google',
      };

      setUser(googleUser);
      localStorage.setItem('kms-user', JSON.stringify(googleUser));
      return { success: true, user: googleUser };
    } catch {
      return { success: false, error: 'Failed to process Google sign-in. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kms-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, googleLogin, logout, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
