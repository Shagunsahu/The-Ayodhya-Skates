import { useState } from "react";

export const useAuth = () => {
  const initialUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('auth_user') || 'null') : null;
  const [user, setUser] = useState<any | null>(initialUser);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => !!(initialUser && initialUser.role === 'admin'));

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '');
      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        return { error: new Error(errorBody.error || 'Login failed') };
      }

      const user = await response.json();
      setUser(user);
      setIsAdmin(user.role === 'admin');
      setSession({});
      try {
        if (typeof window !== 'undefined') localStorage.setItem('auth_user', JSON.stringify(user));
      } catch (e) {
        // ignore
      }
      return { error: null };
    } catch (err: any) {
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    // TODO: Implement with new backend
    return { error: null };
  };

  const signOut = async () => {
    // TODO: Implement with new backend
    setUser(null);
    setSession(null);
    setIsAdmin(false);
    try {
      if (typeof window !== 'undefined') localStorage.removeItem('auth_user');
    } catch (e) {}
    return { error: null };
  };

  return { user, session, loading, isAdmin, signIn, signUp, signOut };
};
