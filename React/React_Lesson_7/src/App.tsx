import NotesList from './components/NotesList';
import CollaboratorsList from './components/CollaboratorsList';
import PreferencesPanel from './components/PreferencesPanel';
import { usePreferencesStore } from './store/preferencesStore';

export default function App() {
  const { theme, fontSize } = usePreferencesStore();

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: 40,
        minHeight: '100vh',
        backgroundColor: isDark ? '#121212' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',

        // 👇 THIS is what fontSize does
        fontSize: `${fontSize}px`,
      }}
    >
      <h1>CollabNotes</h1>

      <PreferencesPanel />

      <hr />

      <NotesList />

      <hr />

      <CollaboratorsList />
    </div>
  );
}
