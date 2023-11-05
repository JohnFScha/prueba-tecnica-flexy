import { create } from 'zustand';

export type User<T> = {
  profilePicture: T,
  fullName: T,
  cellPhone: T,
  email: T,
  password: T
}

interface UserState {
  user: User<string>,
  setUser: (newUser: User<string>) => void
}

export const useStore = create<UserState>((set) => ({
  user: <User<string>>{},
  setUser: (newUser) => set((state) => {
    const updatedUser = { ...state.user, ...newUser };
    sessionStorage.setItem('userState', JSON.stringify(updatedUser));
    return { user: updatedUser };
  })
}))