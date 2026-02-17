import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCollaborators } from '../api/collaboratorsApi';
import { useCollaboratorsStore } from '../store/collaboratorsStore';

export default function CollaboratorsList() {
  const collaborators = useCollaboratorsStore((s) => s.collaborators);
  const setCollaborators = useCollaboratorsStore((s) => s.setCollaborators);

  const { data, isLoading } = useQuery({
    queryKey: ['collaborators'],
    queryFn: fetchCollaborators,
  });

  useEffect(() => {
    if (data) {
      setCollaborators(data);
    }
  }, [data, setCollaborators]);

  if (isLoading) return <p>Loading collaborators...</p>;

  return (
    <>
      <h3>Collaborators</h3>
      <ul>
        {collaborators.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}
