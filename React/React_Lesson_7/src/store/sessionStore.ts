import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

type Role = 'admin' | 'user';

interface SessionState {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: Role;
  setSession: (
    userId: string,
    token: string,
    expiresAt: number,
    role?: Role
  ) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      (set) => ({
        userId: null,
        token: null,
        expiresAt: null,
        role: 'user',
        setSession: (userId, token, expiresAt, role = 'user') =>
          set({ userId, token, expiresAt, role }),
        clearSession: () =>
          set({ userId: null, token: null, expiresAt: null, role: 'user' }),
      }),
      {
        name: 'collabnotes-session',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          userId: state.userId,
          token: state.token,
          role: state.role,
        }),
        version: 2,
        migrate: (persisted: any, version) => {
          if (version < 2) return { ...persisted, role: 'user' };
          return persisted;
        },
      }
    )
  )
);
