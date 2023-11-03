import { create } from 'zustand';

export type User = {
  profilePicture: string,
  fullName: string,
  cellPhone: string,
  email: string,
  password: string
}

interface UserState {
  user: User,
  setUser: (newUser: User) => void
}

export const useStore = create<UserState>((set) => ({
  user: <User>{},
  setUser: (newUser) => set((state) => {
    const updatedUser = { ...state.user, ...newUser };
    sessionStorage.setItem('userState', JSON.stringify(updatedUser));
    return { user: updatedUser };
  })
}))