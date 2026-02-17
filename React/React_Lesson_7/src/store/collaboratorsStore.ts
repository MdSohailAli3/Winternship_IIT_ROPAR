import { create } from 'zustand';

export interface Collaborator {
  id: string;
  name: string;
}

interface CollaboratorsState {
  collaborators: Collaborator[];
  setCollaborators: (users: Collaborator[]) => void;
}

export const useCollaboratorsStore = create<CollaboratorsState>((set) => ({
  collaborators: [],
  setCollaborators: (users) => set({ collaborators: users }),
}));
