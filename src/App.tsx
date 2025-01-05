import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { Schedule } from './components/Schedule';
import Modal from './components/ui/Modal';

const App = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
    setLoginModalOpen(false);
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      institution: formData.get('institution') as string,
    };
    // TODO: Implement registration logic
    console.log('Registration attempt:', userData);
    setRegisterModalOpen(false);
  };

  return ( 
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} title="Login">
        <form onSubmit={handleLoginSubmit} className="space-y-4">
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
      </Modal>
      <Modal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} title="Register">
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

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
              minLength={8}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-1">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;

