import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../api/notesApi';
import { useNotesStore } from '../store/notesStore';

export default function NotesList() {
  const notes = useNotesStore((s) => s.notes);
  const setNotes = useNotesStore((s) => s.setNotes);

  const query = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  useEffect(() => {
    if (query.data) {
      setNotes(query.data);
    }
  }, [query.data, setNotes]);

  if (query.isLoading) return <p>Loading notes…</p>;
  if (query.isError) return <p>Error loading notes</p>;

  return (
    <div>
      <h3>Notes</h3>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
