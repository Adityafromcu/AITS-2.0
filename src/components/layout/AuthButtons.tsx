import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const AuthButtons: React.FC = () => {
  const { isAuthenticated, openLoginModal, openRegisterModal } = useAuth();

  return (
    <div className="flex items-center gap-4">
      {!isAuthenticated ? (
        <>
          <button
            onClick={openLoginModal}
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
          >
            Login
          </button>
          <button
            onClick={openRegisterModal}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </>
      ) : (
        <button className="px-4 py-2 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors">
          Dashboard
        </button>
      )}
    </div>
  );
};