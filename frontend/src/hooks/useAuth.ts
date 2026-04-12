import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const signIn = async (email: string, password: string) => {
    // TODO: Implement with new backend
    return { error: null };
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
    return { error: null };
  };

  return { user, session, loading, isAdmin, signIn, signUp, signOut };
};
