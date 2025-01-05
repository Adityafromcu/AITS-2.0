import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { name: string; email: string };
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, institution: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openRegisterModal: () => set({ isRegisterModalOpen: true }),
  closeRegisterModal: () => set({ isRegisterModalOpen: false }),
  login: async (email: string, password: string) => {
    // TODO: Implement actual login logic
    set({ isAuthenticated: true, user: { name: 'Test User', email }, isLoginModalOpen: false });
  },
  register: async (name: string, email: string, password: string, institution: string) => {
    // TODO: Implement actual registration logic
    set({ isAuthenticated: true, user: { name, email }, isRegisterModalOpen: false });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
