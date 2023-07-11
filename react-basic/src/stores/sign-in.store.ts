import { create } from "zustand";

interface SignInStore {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useStore = create<SignInStore>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set((state) => ({ ...state, email })), 
  setPassword: (password) => set((state) => ({ ...state, password }))
}));

// state -> {email, password, setEmail}
// { ...state } -> { email, password, setEmail }
// { ...state, email: email } -> { email: 'email', password, setEmail }

export default useStore;