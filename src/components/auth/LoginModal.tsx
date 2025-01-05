import React from 'react';
import { X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { useAuth } from '../../hooks/useAuth';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    login(formData.get('email') as string, formData.get('password') as string);
  };

  return (
    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <button onClick={closeLoginModal} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
};